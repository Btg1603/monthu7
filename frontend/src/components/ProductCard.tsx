import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "../api/types";
import { formatPrice } from "../lib/format";
import { highlightText } from "../lib/highlight";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, highlightQuery }: { product: Product; highlightQuery?: string }) {
  const reduce = useReducedMotion();
  const discount =
    product.listPrice && product.listPrice > product.price
      ? Math.round((1 - product.price / product.listPrice) * 100)
      : null;

  const soldLabel =
    product.sold >= 1000 ? `${(product.sold / 1000).toFixed(1).replace(".", ",")}k` : String(product.sold);

  return (
    <motion.article
      className={styles.card}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              transition: { type: "spring", stiffness: 420, damping: 28 },
            }
      }
      whileTap={reduce ? undefined : { scale: 0.99 }}
    >
      <Link to={`/p/${product.slug}`} className={styles.thumb}>
        {product.badge && (
          <span
            className={
              product.badge.toLowerCase().includes("tikinow") ? styles.badgeBlue : styles.badge
            }
          >
            {product.badge}
          </span>
        )}
        {discount != null && discount > 0 && (
          <span className={styles.discountPill}>-{discount}%</span>
        )}
        <motion.div
          className={styles.imgWrap}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ type: "spring", stiffness: 350, damping: 26 }}
        >
          <img src={product.image} alt="" loading="lazy" width={280} height={280} />
        </motion.div>
      </Link>
      <div className={styles.body}>
        <p className={styles.official}>Chính hãng</p>
        <Link to={`/p/${product.slug}`} className={styles.title}>
          {highlightQuery ? highlightText(product.name, highlightQuery) : product.name}
        </Link>
        <div className={styles.rating}>
          <span className={styles.star} aria-hidden>
            ★
          </span>
          <span className={styles.ratingNum}>{product.rating}</span>
          <span className={styles.dot} />
          <span className={styles.sold}>Đã bán {soldLabel}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.listPrice && product.listPrice > product.price && (
            <span className={styles.priceOld}>{formatPrice(product.listPrice)}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

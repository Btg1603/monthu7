import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "@/shared/api/client";
import type { Product } from "@/shared/api/types";
import { FadeIn } from "@/shared/ui";
import { formatPrice } from "@/shared/lib/format";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const token = useAuthStore((s) => s.token);
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [feedback, setFeedback] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    api
      .productBySlug(slug)
      .then(setProduct)
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [slug]);

  const addToCart = async () => {
    if (!product) return;
    if (!token) {
      navigate("/dang-nhap", { state: { from: `/p/${product.slug}` } });
      return;
    }
    if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
      setFeedback({
        kind: "err",
        text: "Số lượng phải là số nguyên từ 1 đến 99.",
      });
      return;
    }
    setFeedback(null);
    try {
      await api.addCart(product.id, qty);
      const c = await api.cart();
      useCartStore.getState().setCount(c.items.reduce((s, i) => s + i.quantity, 0));
      setFeedback({ kind: "ok", text: "Đã thêm vào giỏ hàng." });
    } catch (e) {
      setFeedback({ kind: "err", text: (e as Error).message });
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>Đang tải…</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>Không tìm thấy sản phẩm.</p>
        <Link to="/">Về trang chủ</Link>
      </div>
    );
  }

  const discount =
    product.listPrice && product.listPrice > product.price
      ? Math.round((1 - product.price / product.listPrice) * 100)
      : null;

  return (
    <div className="container" style={{ padding: "24px 0 48px" }}>
      <FadeIn>
        <nav className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link>
          <span> / </span>
          {product.category && (
            <>
              <Link to={`/danh-muc/${product.category.slug}`}>{product.category.name}</Link>
              <span> / </span>
            </>
          )}
          <span>{product.name}</span>
        </nav>
      </FadeIn>

      <div className={styles.layout}>
        <motion.div
          className={styles.gallery}
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {product.badge && <span className={styles.badge}>{product.badge}</span>}
          <img src={product.image} alt="" width={400} height={400} />
        </motion.div>
        <FadeIn delay={0.06} className={styles.info}>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.meta}>
            ★ {product.rating} ({product.reviewCount} đánh giá) · Đã bán {product.sold}
          </div>
          <div className={styles.priceBlock}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.listPrice && product.listPrice > product.price && (
              <>
                <span className={styles.old}>{formatPrice(product.listPrice)}</span>
                {discount != null && discount > 0 && (
                  <span className={styles.discount}>-{discount}%</span>
                )}
              </>
            )}
          </div>
          <div className={styles.qty}>
            <span>Số lượng</span>
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              −
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={qty}
              onChange={(e) => setQty(Math.min(99, Math.max(1, Number(e.target.value) || 1)))}
            />
            <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))}>
              +
            </button>
          </div>
          <div className={styles.actions}>
            <button type="button" className="btn btn-primary" onClick={addToCart}>
              Thêm vào giỏ hàng
            </button>
            <Link to="/gio-hang" className="btn btn-outline">
              Xem giỏ hàng
            </Link>
          </div>
          {feedback && (
            <p className={feedback.kind === "ok" ? styles.msg : styles.msgErr} role="alert">
              {feedback.text}
            </p>
          )}
          <div className={styles.desc}>
            <h2>Mô tả sản phẩm</h2>
            <p>{product.description}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";
import type { Category, Product } from "../api/types";
import ProductCard from "../components/ProductCard";
import { FadeIn, Reveal, SectionTitle, StaggerContainer, StaggerItem } from "../components/ui";
import styles from "./Home.module.css";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([api.categories(), api.products({ limit: 12, sort: "bestseller" })])
      .then(([c, p]) => {
        setCategories(c);
        setProducts(p.items);
      })
      .catch((e: Error) => setErr(e.message));
  }, []);

  if (err) {
    return (
      <div className="container" style={{ padding: "24px 0" }}>
        <p>Lỗi: {err}. Hãy chạy backend (port 4000).</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.heroWrap}>
        <div className="container">
          <div className={styles.hero}>
            <FadeIn delay={0} className={styles.heroBannerWrap}>
              <div className={styles.heroBanner}>
                <p className={styles.heroTag}>Siêu sale cuối tuần</p>
                <h1 className={styles.heroTitle}>Giảm đến 50%</h1>
                <p className={styles.heroDesc}>Freeship 0đ · Giao nhanh 2h · Trả góp 0%</p>
                <div className={styles.heroCtas}>
                  <Link to="/tim-kiem?q=điện thoại" className={styles.btnPrimary}>
                    Mua ngay
                  </Link>
                  <Link to="/danh-muc/dien-tu-dien-may" className={styles.btnGhost}>
                    Xem khuyến mãi
                  </Link>
                </div>
              </div>
            </FadeIn>
            <div className={styles.heroSide}>
              <FadeIn delay={0.08} y={20}>
                <Link to="/tim-kiem?q=tai nghe" className={styles.miniCard}>
                  <span className={styles.miniBadge}>TikiNOW</span>
                  <strong>Giao 2h</strong>
                  <span>Đơn từ 99k</span>
                </Link>
              </FadeIn>
              <FadeIn delay={0.16} y={20}>
                <Link to="/tim-kiem?q=laptop" className={styles.miniCard}>
                  <span className={styles.miniBadge2}>Ưu đãi</span>
                  <strong>Laptop học tập</strong>
                  <span>Trả góp 0%</span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="container">
          <div className={styles.catPanel}>
            <div className={styles.catHead}>
              <h2 className={styles.catTitle}>Danh mục nổi bật</h2>
              <span className={styles.catHint}>Khám phá ngay</span>
            </div>
            <StaggerContainer className={styles.catScroll}>
              {categories.map((c) => (
                <StaggerItem key={c.id} className={styles.catStagger}>
                  <Link to={`/danh-muc/${c.slug}`} className={styles.catItem}>
                    <span className={styles.catCircle}>{c.icon || "📦"}</span>
                    <span className={styles.catName}>{c.name}</span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </Reveal>

      <section className="container" style={{ paddingBottom: 48 }}>
        <Reveal>
          <SectionTitle
            title="Gợi ý hôm nay"
            subtitle="Dành riêng cho bạn"
            extra={
              <Link to="/tim-kiem?q=samsung" className={styles.sectionMore}>
                Xem thêm →
              </Link>
            }
          />
          <StaggerContainer className={styles.grid}>
            {products.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>
      </section>
    </div>
  );
}

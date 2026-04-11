import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/client";
import type { Product } from "../api/types";
import ProductCard from "../components/ProductCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/ui";
import styles from "./ListPage.module.css";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [name, setName] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setErr(null);
    api
      .category(slug)
      .then((c) => {
        setName(c.name);
        setProducts(c.products);
      })
      .catch((e: Error) => setErr(e.message));
  }, [slug]);

  if (err) {
    return (
      <div className="container" style={{ padding: 24 }}>
        <p>{err}</p>
        <Link to="/">Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "24px 0 40px" }}>
      <FadeIn>
        <nav className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link>
          <span> / </span>
          <span>{name || "…"}</span>
        </nav>
        <h1 className={styles.pageTitle}>{name || "Danh mục"}</h1>
      </FadeIn>
      <StaggerContainer className={styles.grid}>
        {products.map((p) => (
          <StaggerItem key={p.id}>
            <ProductCard product={p} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      {products.length === 0 && !err && <p>Đang tải…</p>}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../api/client";
import type { Product } from "../api/types";
import ProductCard from "../components/ProductCard";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/ui";
import styles from "./ListPage.module.css";

interface SearchResult {
  products: Product[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
  query: any;
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const [result, setResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [minPrice, setMinPrice] = useState(params.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(params.get("maxPrice") || "");
  const [category, setCategory] = useState(params.get("category") || "");
  const [brand, setBrand] = useState(params.get("brand") || "");
  const [minRating, setMinRating] = useState(params.get("minRating") || "");
  const [sort, setSort] = useState(params.get("sort") || "relevance");

  const performSearch = async () => {
    if (!q.trim()) {
      setResult(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const searchParams: Record<string, string | number> = {
        q: q.trim(),
        sort,
      };
      if (minPrice && !isNaN(Number(minPrice))) searchParams.minPrice = Number(minPrice);
      if (maxPrice && !isNaN(Number(maxPrice))) searchParams.maxPrice = Number(maxPrice);
      if (category) searchParams.category = category;
      if (brand) searchParams.brand = brand;
      if (minRating && !isNaN(Number(minRating))) searchParams.minRating = Number(minRating);

      const res = await api.search(searchParams);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lỗi tìm kiếm");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    performSearch();
  }, [q, sort, minPrice, maxPrice, category, brand, minRating]);

  const updateFilters = (updates: Partial<Record<string, string>>) => {
    const newParams = new URLSearchParams(params);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setParams(newParams);
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    updateFilters({ sort: newSort });
  };

  const handleFilterChange = (key: string, value: string) => {
    switch (key) {
      case "minPrice": setMinPrice(value); break;
      case "maxPrice": setMaxPrice(value); break;
      case "category": setCategory(value); break;
      case "brand": setBrand(value); break;
      case "minRating": setMinRating(value); break;
    }
    updateFilters({ [key]: value });
  };

  return (
    <div className="container" style={{ padding: "24px 0 40px" }}>
      <FadeIn>
        <nav className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link>
          <span> / </span>
          <span>Tìm kiếm “{q}”</span>
        </nav>

        <div className={styles.toolbar}>
          <h1 className={styles.pageTitle}>
            {result ? `Tìm thấy ${result.pagination.total} kết quả cho “${q}”` : `Tìm kiếm “${q || "…"}”`}
          </h1>
          <select
            className={styles.select}
            value={sort}
            onChange={(e) => handleSortChange(e.target.value)}
            aria-label="Sắp xếp"
          >
            <option value="relevance">Liên quan</option>
            <option value="price_asc">Giá thấp</option>
            <option value="price_desc">Giá cao</option>
            <option value="newest">Mới nhất</option>
            <option value="bestseller">Bán chạy</option>
            <option value="rating">Đánh giá</option>
          </select>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: "24px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <input
            type="number"
            placeholder="Giá từ"
            value={minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", width: "120px" }}
          />
          <input
            type="number"
            placeholder="Giá đến"
            value={maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", width: "120px" }}
          />
          <input
            type="text"
            placeholder="Danh mục"
            value={category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", width: "120px" }}
          />
          <input
            type="text"
            placeholder="Thương hiệu"
            value={brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px", width: "120px" }}
          />
          <select
            value={minRating}
            onChange={(e) => handleFilterChange("minRating", e.target.value)}
            style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
          >
            <option value="">Tất cả đánh giá</option>
            <option value="4">4+ sao</option>
            <option value="3">3+ sao</option>
            <option value="2">2+ sao</option>
            <option value="1">1+ sao</option>
          </select>
        </div>

        {loading && <div style={{ textAlign: "center", padding: "40px" }}>Đang tìm kiếm...</div>}

        {error && (
          <div style={{ color: "red", textAlign: "center", padding: "40px" }}>
            {error}
          </div>
        )}

        {!loading && !error && result && result.products.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <h2>Không tìm thấy sản phẩm nào</h2>
            <p>Thử tìm với từ khóa khác hoặc điều chỉnh bộ lọc</p>
          </div>
        )}

        {!loading && !error && result && result.products.length > 0 && (
          <StaggerContainer>
            <div className={styles.grid}>
              {result.products.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} highlightQuery={q} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}
      </FadeIn>
    </div>
  );
}

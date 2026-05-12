import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import { api } from "@/shared/api/client";
import type { Product } from "@/shared/api/types";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/ui";
import ProductCard from "@/widgets/ProductCard";

import styles from "./SearchPage.module.css";

interface SearchResult {
  products: Product[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };

  query: any;
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams();

  // =========================
  // QUERY PARAMS
  // =========================

  const q = params.get("q") || "";

  const filters = useMemo(
    () => ({
      sort: params.get("sort") || "relevance",
      minPrice: params.get("minPrice") || "",
      maxPrice: params.get("maxPrice") || "",
      category: params.get("category") || "",
      brand: params.get("brand") || "",
      minRating: params.get("minRating") || "",
    }),
    [params]
  );

  // =========================
  // STATE
  // =========================

  const [result, setResult] = useState<SearchResult | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // giữ data cũ khi loading
  const [isFetching, setIsFetching] = useState(false);

  // chống race condition
  const requestIdRef = useRef(0);

  // cache search
  const cacheRef = useRef<Record<string, SearchResult>>({});

  // =========================
  // CACHE KEY
  // =========================

  const cacheKey = useMemo(() => {
    return JSON.stringify({
      q,
      ...filters,
    });
  }, [q, filters]);

  // =========================
  // SEARCH
  // =========================

  const performSearch = useCallback(async () => {
    const keyword = q.trim();

    if (!keyword) {
      setResult(null);
      return;
    }

    const minRaw = filters.minPrice.trim();
    const maxRaw = filters.maxPrice.trim();
    if (minRaw) {
      const n = Number(minRaw);
      if (Number.isNaN(n) || n < 0) {
        setError('Ô "Giá từ" phải là số không âm.');
        return;
      }
    }
    if (maxRaw) {
      const n = Number(maxRaw);
      if (Number.isNaN(n) || n < 0) {
        setError('Ô "Giá đến" phải là số không âm.');
        return;
      }
    }
    if (minRaw && maxRaw && Number(minRaw) > Number(maxRaw)) {
      setError("Giá tối thiểu không được lớn hơn giá tối đa — hãy chỉnh lại bộ lọc.");
      return;
    }

    // cache hit
    if (cacheRef.current[cacheKey]) {
      setResult(cacheRef.current[cacheKey]);
      return;
    }

    const currentRequestId = ++requestIdRef.current;

    try {
      setError(null);

      // lần đầu loading full
      if (!result) {
        setLoading(true);
      } else {
        setIsFetching(true);
      }

      const searchParams: Record<string, string | number> = {
        q: keyword,
        sort: filters.sort,
      };

      if (filters.minPrice) {
        searchParams.minPrice = Number(filters.minPrice);
      }

      if (filters.maxPrice) {
        searchParams.maxPrice = Number(filters.maxPrice);
      }

      if (filters.category) {
        searchParams.category = filters.category;
      }

      if (filters.brand) {
        searchParams.brand = filters.brand;
      }

      if (filters.minRating) {
        searchParams.minRating = Number(filters.minRating);
      }

      const res = await api.search(searchParams);

      // request cũ bỏ qua
      if (currentRequestId !== requestIdRef.current) {
        return;
      }

      cacheRef.current[cacheKey] = res;

      setResult(res);
    } catch (err) {
      if (currentRequestId !== requestIdRef.current) {
        return;
      }

      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    } finally {
      if (currentRequestId === requestIdRef.current) {
        setLoading(false);
        setIsFetching(false);
      }
    }
  }, [q, filters, cacheKey, result]);

  // =========================
  // FETCH
  // =========================

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  // =========================
  // UPDATE FILTERS
  // =========================

  const updateFilters = useCallback(
    (updates: Record<string, string>) => {
      const newParams = new URLSearchParams(params);

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });

      setParams(newParams, {
        replace: true,
      });
    },
    [params, setParams]
  );

  // =========================
  // HANDLERS
  // =========================

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilters({
      sort: e.target.value,
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    updateFilters({
      [key]: value,
    });
  };

  // =========================
  // UI STATES
  // =========================

  const hasProducts = result && result.products && result.products.length > 0;

  return (
    <div
      className="container"
      style={{
        padding: "24px 0 48px",
      }}
    >
      <FadeIn>
        {/* ========================= */}
        {/* BREADCRUMB */}
        {/* ========================= */}

        <nav className={styles.breadcrumb}>
          <Link to="/">Trang chủ</Link>

          <span>/</span>

          <span>Tìm kiếm "{q}"</span>
        </nav>

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className={styles.toolbar}>
          <div>
            <h1 className={styles.pageTitle}>
              {result ? `${result.pagination.total} kết quả cho "${q}"` : `Tìm kiếm "${q}"`}
            </h1>

            {isFetching && <p className={styles.fetching}>Đang cập nhật...</p>}
          </div>

          <select className={styles.select} value={filters.sort} onChange={handleSortChange}>
            <option value="relevance">Liên quan</option>

            <option value="price_asc">Giá thấp → cao</option>

            <option value="price_desc">Giá cao → thấp</option>

            <option value="rating">Đánh giá cao</option>

            <option value="bestseller">Bán chạy</option>

            <option value="newest">Mới nhất</option>
          </select>
        </div>

        {/* ========================= */}
        {/* FILTERS */}
        {/* ========================= */}

        <div className={styles.filters}>
          <input
            type="number"
            placeholder="Giá từ"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
          />

          <input
            type="number"
            placeholder="Giá đến"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
          />

          <input
            type="text"
            placeholder="Danh mục"
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          />

          <input
            type="text"
            placeholder="Thương hiệu"
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          />

          <select
            value={filters.minRating}
            onChange={(e) => handleFilterChange("minRating", e.target.value)}
          >
            <option value="">Tất cả đánh giá</option>

            <option value="4">4+ sao</option>

            <option value="3">3+ sao</option>

            <option value="2">2+ sao</option>

            <option value="1">1+ sao</option>
          </select>
        </div>

        {/* ========================= */}
        {/* LOADING */}
        {/* ========================= */}

        {loading && (
          <div className={styles.loadingWrapper}>
            <div className={styles.loadingGrid}>
              {Array.from({
                length: 8,
              }).map((_, i) => (
                <div key={i} className={styles.skeleton} />
              ))}
            </div>
          </div>
        )}

        {/* ========================= */}
        {/* ERROR */}
        {/* ========================= */}

        {!loading && error && (
          <div className={styles.empty}>
            <h2>Có lỗi xảy ra</h2>

            <p>{error}</p>
          </div>
        )}

        {/* ========================= */}
        {/* EMPTY */}
        {/* ========================= */}

        {!loading && !error && result && result.products.length === 0 && (
          <div className={styles.empty}>
            <h2>Không tìm thấy sản phẩm</h2>

            <p>Hãy thử từ khóa khác</p>
          </div>
        )}

        {/* ========================= */}
        {/* PRODUCTS */}
        {/* ========================= */}

        {!loading && !error && hasProducts && (
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

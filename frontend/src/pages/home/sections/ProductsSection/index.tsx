import type { Product } from "@/shared/api/types";
import { Reveal, SectionTitle, StaggerContainer, StaggerItem } from "@/shared/ui";
import ProductCard from "@/widgets/ProductCard";
import styles from "./ProductsSection.module.css";

interface ProductsSectionProps {
  products: Product[];
  loading: boolean;
  page: number;
  totalPages: number;
  onLoadMore: () => void;
}

export default function ProductsSection({
  products,
  loading,
  page,
  totalPages,
  onLoadMore,
}: ProductsSectionProps) {
  return (
    <section className="container" style={{ paddingBottom: 48 }}>
      <Reveal>
        <SectionTitle
          title="Gợi ý hôm nay"
          subtitle="Dành riêng cho bạn"
          extra={
            <button
              type="button"
              className={styles.loadMoreButton}
              onClick={onLoadMore}
              disabled={loading || page >= totalPages}
            >
              {page >= totalPages ? "Đã tải hết" : loading ? "Đang tải..." : "Xem thêm →"}
            </button>
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
  );
}

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/shared/api/client";
import type { CartItem } from "@/shared/api/types";
import { formatPrice } from "@/shared/lib/format";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const navigate = useNavigate();
  const token = useAuthStore((s) => s.token);
  const [items, setItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actionErr, setActionErr] = useState<string | null>(null);

  const load = () => {
    if (!token) return;
    api
      .cart()
      .then((c) => {
        setItems(c.items);
        setSubtotal(c.subtotal);
        useCartStore.getState().setCount(c.items.reduce((s, i) => s + i.quantity, 0));
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    load();
  }, [token]);

  const updateQty = async (id: string, quantity: number) => {
    try {
      setActionErr(null);
      await api.patchCart(id, quantity);
      load();
    } catch (e) {
      setActionErr((e as Error).message);
    }
  };

  const remove = async (id: string) => {
    try {
      setActionErr(null);
      await api.removeCart(id);
      load();
    } catch (e) {
      setActionErr((e as Error).message);
    }
  };

  if (!token) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>
          Vui lòng <Link to="/dang-nhap">đăng nhập</Link> để xem giỏ hàng.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>Đang tải giỏ hàng…</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "24px 0 48px" }}>
      <h1 className={styles.title}>Giỏ hàng</h1>
      {actionErr && (
        <p className="form-alert" role="alert" style={{ marginBottom: 16 }}>
          {actionErr}
        </p>
      )}
      {items.length === 0 ? (
        <p>
          Giỏ hàng trống. <Link to="/">Tiếp tục mua sắm</Link>
        </p>
      ) : (
        <div className={styles.layout}>
          <ul className={styles.list}>
            {items.map((row) => (
              <li key={row.id} className={styles.row}>
                <Link to={`/p/${row.product.slug}`} className={styles.thumb}>
                  <img src={row.product.image} alt="" width={96} height={96} />
                </Link>
                <div className={styles.detail}>
                  <Link to={`/p/${row.product.slug}`} className={styles.name}>
                    {row.product.name}
                  </Link>
                  <div className={styles.price}>{formatPrice(row.product.price)}</div>
                  <div className={styles.qty}>
                    <button
                      type="button"
                      onClick={() => updateQty(row.id, Math.max(1, row.quantity - 1))}
                    >
                      −
                    </button>
                    <span>{row.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQty(row.id, Math.min(99, row.quantity + 1))}
                    >
                      +
                    </button>
                    <button type="button" className={styles.remove} onClick={() => remove(row.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
                <div className={styles.lineTotal}>
                  {formatPrice(row.product.price * row.quantity)}
                </div>
              </li>
            ))}
          </ul>
          <aside className={styles.summary}>
            <p>
              Tạm tính: <strong>{formatPrice(subtotal)}</strong>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/thanh-toan")}
            >
              Mua hàng
            </button>
            <Link to="/" className={styles.continue}>
              ← Tiếp tục mua sắm
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}

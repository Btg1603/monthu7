import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "@/shared/api/client";
import type { Order } from "@/shared/api/types";
import { formatPrice } from "@/shared/lib/format";
import { useAuthStore } from "@/store/authStore";
import styles from "./OrdersPage.module.css";

export default function OrdersPage() {
  const token = useAuthStore((s) => s.token);
  const [orders, setOrders] = useState<Order[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    api
      .orders()
      .then(setOrders)
      .catch((e: Error) => setErr(e.message));
  }, [token]);

  if (!token) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>
          <Link to="/dang-nhap">Đăng nhập</Link> để xem đơn hàng.
        </p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "24px 0 48px" }}>
      <h1 className={styles.title}>Đơn hàng của tôi</h1>
      {err && (
        <p className="form-alert" role="alert">
          {err}
        </p>
      )}
      {orders.length === 0 && !err && <p>Chưa có đơn hàng.</p>}
      <ul className={styles.list}>
        {orders.map((o) => (
          <li key={o.id} className={styles.card}>
            <div className={styles.head}>
              <span>#{o.id.slice(0, 8)}</span>
              <span className={styles.status}>{o.status}</span>
              <span>{new Date(o.createdAt).toLocaleString("vi-VN")}</span>
            </div>
            <p>
              {formatPrice(o.total)} · {o.phone}
            </p>
            <p className={styles.addr}>{o.address}</p>
            <ul className={styles.items}>
              {o.items.map((it) => (
                <li key={it.id}>
                  {it.product.name} × {it.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

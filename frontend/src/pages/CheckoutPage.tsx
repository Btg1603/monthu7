import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { formatPrice } from "../lib/format";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const token = useAuthStore((s) => s.token);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) return;
    api
      .cart()
      .then((c) => setSubtotal(c.subtotal))
      .catch(() => setSubtotal(0));
  }, [token]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setErr(null);
    setLoading(true);
    try {
      await api.checkout({ address, phone });
      useCartStore.getState().setCount(0);
      navigate("/don-hang");
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>
          <Link to="/dang-nhap">Đăng nhập</Link> để thanh toán.
        </p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "24px 0 48px" }}>
      <h1 className={styles.title}>Thanh toán</h1>
      <form className={styles.form} onSubmit={submit}>
        <label>
          Địa chỉ giao hàng
          <textarea
            className="input"
            rows={3}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Số nhà, đường, phường, quận, TP..."
          />
        </label>
        <label>
          Số điện thoại
          <input
            className="input"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09xxxxxxxx"
          />
        </label>
        <p>
          Tổng thanh toán: <strong>{formatPrice(subtotal)}</strong> (demo COD)
        </p>
        {err && <p className={styles.err}>{err}</p>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Đang xử lý…" : "Đặt hàng"}
        </button>
      </form>
    </div>
  );
}

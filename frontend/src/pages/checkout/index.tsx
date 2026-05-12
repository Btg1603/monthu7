import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/shared/api/client";
import { formatPrice } from "@/shared/lib/format";
import { validateCheckoutFields } from "@/shared/lib/validators";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const token = useAuthStore((s) => s.token);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [err, setErr] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ address?: string; phone?: string }>({});
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
    const fe = validateCheckoutFields(address, phone);
    setFieldErrors(fe);
    if (Object.keys(fe).length > 0) return;

    setLoading(true);
    try {
      await api.checkout({ address: address.trim(), phone: phone.trim() });
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
      <form noValidate className={styles.form} onSubmit={submit}>
        <label>
          Địa chỉ giao hàng
          <textarea
            className={`input ${fieldErrors.address ? "input--invalid" : ""}`}
            rows={3}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setFieldErrors((p) => ({ ...p, address: undefined }));
            }}
            placeholder="Số nhà, đường, phường, quận, TP..."
            aria-invalid={Boolean(fieldErrors.address)}
          />
          {fieldErrors.address && (
            <span className="field-error" role="alert">
              {fieldErrors.address}
            </span>
          )}
        </label>
        <label>
          Số điện thoại
          <input
            className={`input ${fieldErrors.phone ? "input--invalid" : ""}`}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setFieldErrors((p) => ({ ...p, phone: undefined }));
            }}
            placeholder="VD: 0912345678 — ít nhất 8 chữ số"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone && (
            <span className="field-error" role="alert">
              {fieldErrors.phone}
            </span>
          )}
        </label>
        <p>
          Tổng thanh toán: <strong>{formatPrice(subtotal)}</strong> (demo COD)
        </p>
        {err && (
          <p className="form-alert" role="alert">
            {err}
          </p>
        )}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Đang xử lý…" : "Đặt hàng"}
        </button>
      </form>
    </div>
  );
}

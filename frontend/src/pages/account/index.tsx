import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "@/shared/api/client";
import type { User } from "@/shared/api/types";
import { validateAccountFields } from "@/shared/lib/validators";
import { useAuthStore } from "@/store/authStore";
import styles from "./AccountPage.module.css";

export default function AccountPage() {
  const token = useAuthStore((s) => s.token);
  const setAuth = useAuthStore((s) => s.setAuth);
  const storeUser = useAuthStore((s) => s.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    if (!token) return;
    api
      .me()
      .then((u: User) => {
        setName(u.name);
        setPhone(u.phone || "");
      })
      .catch(() => {
        if (storeUser) {
          setName(storeUser.name);
          setPhone(storeUser.phone || "");
        }
      });
  }, [token, storeUser]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setErr(null);
    setMsg(null);
    const fe = validateAccountFields(name, phone);
    setFieldErrors(fe);
    if (Object.keys(fe).length > 0) return;

    try {
      const u = await api.updateProfile({ name: name.trim(), phone: phone.trim() || null });
      setAuth(token, u);
      setMsg("Đã lưu thông tin tài khoản.");
    } catch (e) {
      setErr((e as Error).message);
    }
  };

  if (!token) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <p>
          <Link to="/dang-nhap">Đăng nhập</Link> để xem tài khoản.
        </p>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "24px 0 48px" }}>
      <h1 className={styles.title}>Tài khoản</h1>
      <form noValidate className={styles.form} onSubmit={submit}>
        <label>
          Họ tên
          <input
            className={`input ${fieldErrors.name ? "input--invalid" : ""}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setFieldErrors((p) => ({ ...p, name: undefined }));
            }}
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name && (
            <span className="field-error" role="alert">
              {fieldErrors.name}
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
            placeholder="Để trống nếu không muốn cập nhật"
            inputMode="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldErrors.phone && (
            <span className="field-error" role="alert">
              {fieldErrors.phone}
            </span>
          )}
        </label>
        {msg && <p className={styles.ok}>{msg}</p>}
        {err && (
          <p className="form-alert" role="alert">
            {err}
          </p>
        )}
        <button type="submit" className="btn btn-primary">
          Lưu thay đổi
        </button>
      </form>
      <p>
        <Link to="/don-hang">Xem đơn hàng →</Link>
      </p>
    </div>
  );
}

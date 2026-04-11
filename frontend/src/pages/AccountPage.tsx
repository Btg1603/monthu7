import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";
import type { User } from "../api/types";
import { useAuthStore } from "../store/authStore";
import styles from "./AccountPage.module.css";

export default function AccountPage() {
  const token = useAuthStore((s) => s.token);
  const setAuth = useAuthStore((s) => s.setAuth);
  const storeUser = useAuthStore((s) => s.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

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
    try {
      const u = await api.updateProfile({ name, phone: phone || null });
      setAuth(token, u);
      setMsg("Đã lưu");
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
      <form className={styles.form} onSubmit={submit}>
        <label>
          Họ tên
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Số điện thoại
          <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        {msg && <p className={styles.ok}>{msg}</p>}
        {err && <p className={styles.err}>{err}</p>}
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

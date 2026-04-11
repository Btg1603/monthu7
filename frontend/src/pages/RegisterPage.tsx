import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useAuthStore } from "../store/authStore";
import styles from "./AuthPage.module.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    try {
      const r = await api.register({ name, email, password, phone: phone || undefined });
      setAuth(r.token, r.user);
      navigate("/", { replace: true });
    } catch (e) {
      setErr((e as Error).message);
    }
  };

  return (
    <div className="container" style={{ padding: "40px 0 60px" }}>
      <div className={styles.box}>
        <h1 className={styles.title}>Tạo tài khoản</h1>
        <form onSubmit={submit} className={styles.form}>
          <label>
            Họ tên
            <input
              className="input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              className="input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Mật khẩu (tối thiểu 6 ký tự)
            <input
              className="input"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Số điện thoại (tuỳ chọn)
            <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          {err && <p className={styles.err}>{err}</p>}
          <button type="submit" className="btn btn-primary">
            Đăng ký
          </button>
        </form>
        <p className={styles.switch}>
          Đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}

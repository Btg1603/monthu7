import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useAuthStore } from "../store/authStore";
import styles from "./AuthPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = useAuthStore((s) => s.setAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const from = (location.state as { from?: string } | null)?.from || "/";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    try {
      const r = await api.login({ email, password });
      setAuth(r.token, r.user);
      navigate(from, { replace: true });
    } catch (e) {
      setErr((e as Error).message);
    }
  };

  return (
    <div className="container" style={{ padding: "40px 0 60px" }}>
      <div className={styles.box}>
        <h1 className={styles.title}>Đăng nhập</h1>
        <form onSubmit={submit} className={styles.form}>
          <label>
            Email
            <input
              className="input"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Mật khẩu
            <input
              className="input"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {err && <p className={styles.err}>{err}</p>}
          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
        <p className={styles.switch}>
          Chưa có tài khoản? <Link to="/dang-ky">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}

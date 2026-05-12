import { j as e } from "./motion-Crlsyqa2.js";
import { u as b, r as n, L as w } from "./vendor-CUtgA-5W.js";
import { u as y, a as S } from "./index-2DOOHyE3.js";
import { b as k } from "./validators-DcRnqfuW.js";
import { s as r } from "./auth-page.module-BhCqbJak.js";
function P() {
  const h = b(),
    v = y((s) => s.setAuth),
    [o, x] = n.useState(""),
    [m, j] = n.useState(""),
    [p, g] = n.useState(""),
    [u, f] = n.useState(""),
    [d, c] = n.useState(null),
    [a, i] = n.useState({}),
    N = async (s) => {
      (s.preventDefault(), c(null));
      const t = k(o, m, p, u);
      if ((i(t), !(Object.keys(t).length > 0)))
        try {
          const l = await S.register({
            name: o.trim(),
            email: m.trim(),
            password: p,
            phone: u.trim() || void 0,
          });
          (v(l.token, l.user), h("/", { replace: !0 }));
        } catch (l) {
          c(l.message);
        }
    };
  return e.jsx("div", {
    className: "container",
    style: { padding: "40px 0 60px" },
    children: e.jsxs("div", {
      className: r.box,
      children: [
        e.jsx("h1", { className: r.title, children: "Tạo tài khoản" }),
        e.jsxs("form", {
          noValidate: !0,
          onSubmit: N,
          className: r.form,
          children: [
            e.jsxs("label", {
              children: [
                "Họ tên",
                e.jsx("input", {
                  className: `input ${a.name ? "input--invalid" : ""}`,
                  value: o,
                  onChange: (s) => {
                    (x(s.target.value), i((t) => ({ ...t, name: void 0 })));
                  },
                  autoComplete: "name",
                  "aria-invalid": !!a.name,
                }),
                a.name &&
                  e.jsx("span", { className: "field-error", role: "alert", children: a.name }),
              ],
            }),
            e.jsxs("label", {
              children: [
                "Email",
                e.jsx("input", {
                  className: `input ${a.email ? "input--invalid" : ""}`,
                  type: "email",
                  value: m,
                  onChange: (s) => {
                    (j(s.target.value), i((t) => ({ ...t, email: void 0 })));
                  },
                  autoComplete: "email",
                  "aria-invalid": !!a.email,
                }),
                a.email &&
                  e.jsx("span", { className: "field-error", role: "alert", children: a.email }),
              ],
            }),
            e.jsxs("label", {
              children: [
                "Mật khẩu (tối thiểu 6 ký tự)",
                e.jsx("input", {
                  className: `input ${a.password ? "input--invalid" : ""}`,
                  type: "password",
                  value: p,
                  onChange: (s) => {
                    (g(s.target.value), i((t) => ({ ...t, password: void 0 })));
                  },
                  autoComplete: "new-password",
                  "aria-invalid": !!a.password,
                }),
                a.password &&
                  e.jsx("span", { className: "field-error", role: "alert", children: a.password }),
              ],
            }),
            e.jsxs("label", {
              children: [
                "Số điện thoại (tuỳ chọn)",
                e.jsx("input", {
                  className: `input ${a.phone ? "input--invalid" : ""}`,
                  value: u,
                  onChange: (s) => {
                    (f(s.target.value), i((t) => ({ ...t, phone: void 0 })));
                  },
                  inputMode: "tel",
                  autoComplete: "tel",
                  placeholder: "VD: 0912345678",
                  "aria-invalid": !!a.phone,
                }),
                a.phone &&
                  e.jsx("span", { className: "field-error", role: "alert", children: a.phone }),
              ],
            }),
            d && e.jsx("p", { className: "form-alert", role: "alert", children: d }),
            e.jsx("button", { type: "submit", className: "btn btn-primary", children: "Đăng ký" }),
          ],
        }),
        e.jsxs("p", {
          className: r.switch,
          children: ["Đã có tài khoản? ", e.jsx(w, { to: "/dang-nhap", children: "Đăng nhập" })],
        }),
      ],
    }),
  });
}
export { P as default };

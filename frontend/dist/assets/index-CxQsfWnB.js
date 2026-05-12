import { j as e } from "./motion-Crlsyqa2.js";
import { u as b, c as w, r as i, L as y } from "./vendor-CUtgA-5W.js";
import { u as N, a as k } from "./index-2DOOHyE3.js";
import { a as E } from "./validators-DcRnqfuW.js";
import { s as l } from "./auth-page.module-BhCqbJak.js";
function F() {
  var p;
  const u = b(),
    h = w(),
    g = N((s) => s.setAuth),
    [o, x] = i.useState(""),
    [n, f] = i.useState(""),
    [c, m] = i.useState(null),
    [a, d] = i.useState({}),
    v = ((p = h.state) == null ? void 0 : p.from) || "/",
    j = async (s) => {
      (s.preventDefault(), m(null));
      const r = E(o, n);
      if ((d(r), !(Object.keys(r).length > 0)))
        try {
          const t = await k.login({ email: o.trim(), password: n });
          (g(t.token, t.user), u(v, { replace: !0 }));
        } catch (t) {
          m(t.message);
        }
    };
  return e.jsx("div", {
    className: "container",
    style: { padding: "40px 0 60px" },
    children: e.jsxs("div", {
      className: l.box,
      children: [
        e.jsx("h1", { className: l.title, children: "Đăng nhập" }),
        e.jsxs("form", {
          noValidate: !0,
          onSubmit: j,
          className: l.form,
          children: [
            e.jsxs("label", {
              children: [
                "Email",
                e.jsx("input", {
                  className: `input ${a.email ? "input--invalid" : ""}`,
                  type: "email",
                  autoComplete: "email",
                  value: o,
                  onChange: (s) => {
                    (x(s.target.value), d((r) => ({ ...r, email: void 0 })));
                  },
                  "aria-invalid": !!a.email,
                  "aria-describedby": a.email ? "login-email-err" : void 0,
                }),
                a.email &&
                  e.jsx("span", {
                    id: "login-email-err",
                    className: "field-error",
                    role: "alert",
                    children: a.email,
                  }),
              ],
            }),
            e.jsxs("label", {
              children: [
                "Mật khẩu",
                e.jsx("input", {
                  className: `input ${a.password ? "input--invalid" : ""}`,
                  type: "password",
                  autoComplete: "current-password",
                  value: n,
                  onChange: (s) => {
                    (f(s.target.value), d((r) => ({ ...r, password: void 0 })));
                  },
                  "aria-invalid": !!a.password,
                  "aria-describedby": a.password ? "login-password-err" : void 0,
                }),
                a.password &&
                  e.jsx("span", {
                    id: "login-password-err",
                    className: "field-error",
                    role: "alert",
                    children: a.password,
                  }),
              ],
            }),
            c && e.jsx("p", { className: "form-alert", role: "alert", children: c }),
            e.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              children: "Đăng nhập",
            }),
          ],
        }),
        e.jsxs("p", {
          className: l.switch,
          children: ["Chưa có tài khoản? ", e.jsx(y, { to: "/dang-ky", children: "Đăng ký" })],
        }),
      ],
    }),
  });
}
export { F as default };

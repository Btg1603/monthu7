import { j as e } from "./motion-Crlsyqa2.js";
import { r as a, L as v } from "./vendor-CUtgA-5W.js";
import { u as p, a as k } from "./index-2DOOHyE3.js";
import { c as b } from "./validators-DcRnqfuW.js";
const _ = "_title_ovyj2_1",
  S = "_form_ovyj2_11",
  E = "_ok_ovyj2_43",
  d = { title: _, form: S, ok: E };
function C() {
  const r = p((n) => n.token),
    y = p((n) => n.setAuth),
    o = p((n) => n.user),
    [i, l] = a.useState(""),
    [c, u] = a.useState(""),
    [f, x] = a.useState(null),
    [j, g] = a.useState(null),
    [t, h] = a.useState({});
  a.useEffect(() => {
    r &&
      k
        .me()
        .then((n) => {
          (l(n.name), u(n.phone || ""));
        })
        .catch(() => {
          o && (l(o.name), u(o.phone || ""));
        });
  }, [r, o]);
  const N = async (n) => {
    if ((n.preventDefault(), !r)) return;
    (g(null), x(null));
    const s = b(i, c);
    if ((h(s), !(Object.keys(s).length > 0)))
      try {
        const m = await k.updateProfile({ name: i.trim(), phone: c.trim() || null });
        (y(r, m), x("Đã lưu thông tin tài khoản."));
      } catch (m) {
        g(m.message);
      }
  };
  return r
    ? e.jsxs("div", {
        className: "container",
        style: { padding: "24px 0 48px" },
        children: [
          e.jsx("h1", { className: d.title, children: "Tài khoản" }),
          e.jsxs("form", {
            noValidate: !0,
            className: d.form,
            onSubmit: N,
            children: [
              e.jsxs("label", {
                children: [
                  "Họ tên",
                  e.jsx("input", {
                    className: `input ${t.name ? "input--invalid" : ""}`,
                    value: i,
                    onChange: (n) => {
                      (l(n.target.value), h((s) => ({ ...s, name: void 0 })));
                    },
                    "aria-invalid": !!t.name,
                  }),
                  t.name &&
                    e.jsx("span", { className: "field-error", role: "alert", children: t.name }),
                ],
              }),
              e.jsxs("label", {
                children: [
                  "Số điện thoại",
                  e.jsx("input", {
                    className: `input ${t.phone ? "input--invalid" : ""}`,
                    value: c,
                    onChange: (n) => {
                      (u(n.target.value), h((s) => ({ ...s, phone: void 0 })));
                    },
                    placeholder: "Để trống nếu không muốn cập nhật",
                    inputMode: "tel",
                    "aria-invalid": !!t.phone,
                  }),
                  t.phone &&
                    e.jsx("span", { className: "field-error", role: "alert", children: t.phone }),
                ],
              }),
              f && e.jsx("p", { className: d.ok, children: f }),
              j && e.jsx("p", { className: "form-alert", role: "alert", children: j }),
              e.jsx("button", {
                type: "submit",
                className: "btn btn-primary",
                children: "Lưu thay đổi",
              }),
            ],
          }),
          e.jsx("p", { children: e.jsx(v, { to: "/don-hang", children: "Xem đơn hàng →" }) }),
        ],
      })
    : e.jsx("div", {
        className: "container",
        style: { padding: 40 },
        children: e.jsxs("p", {
          children: [e.jsx(v, { to: "/dang-nhap", children: "Đăng nhập" }), " để xem tài khoản."],
        }),
      });
}
export { C as default };

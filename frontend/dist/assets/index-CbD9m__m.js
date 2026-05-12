import { j as e } from "./motion-Crlsyqa2.js";
import { u as N, r as a, L as y } from "./vendor-CUtgA-5W.js";
import { u as C, a as m, b as k } from "./index-2DOOHyE3.js";
import { f as E } from "./format-ksNvffJs.js";
import { v as _ } from "./validators-DcRnqfuW.js";
const P = "_title_1leau_1",
  D = "_form_1leau_11",
  f = { title: P, form: D };
function F() {
  const g = N(),
    r = C((t) => t.token),
    [o, x] = a.useState(""),
    [l, j] = a.useState(""),
    [v, d] = a.useState(0),
    [c, h] = a.useState(null),
    [s, i] = a.useState({}),
    [u, p] = a.useState(!1);
  a.useEffect(() => {
    r &&
      m
        .cart()
        .then((t) => d(t.subtotal))
        .catch(() => d(0));
  }, [r]);
  const b = async (t) => {
    if ((t.preventDefault(), !r)) return;
    h(null);
    const n = _(o, l);
    if ((i(n), !(Object.keys(n).length > 0))) {
      p(!0);
      try {
        (await m.checkout({ address: o.trim(), phone: l.trim() }),
          k.getState().setCount(0),
          g("/don-hang"));
      } catch (S) {
        h(S.message);
      } finally {
        p(!1);
      }
    }
  };
  return r
    ? e.jsxs("div", {
        className: "container",
        style: { padding: "24px 0 48px" },
        children: [
          e.jsx("h1", { className: f.title, children: "Thanh toán" }),
          e.jsxs("form", {
            noValidate: !0,
            className: f.form,
            onSubmit: b,
            children: [
              e.jsxs("label", {
                children: [
                  "Địa chỉ giao hàng",
                  e.jsx("textarea", {
                    className: `input ${s.address ? "input--invalid" : ""}`,
                    rows: 3,
                    value: o,
                    onChange: (t) => {
                      (x(t.target.value), i((n) => ({ ...n, address: void 0 })));
                    },
                    placeholder: "Số nhà, đường, phường, quận, TP...",
                    "aria-invalid": !!s.address,
                  }),
                  s.address &&
                    e.jsx("span", { className: "field-error", role: "alert", children: s.address }),
                ],
              }),
              e.jsxs("label", {
                children: [
                  "Số điện thoại",
                  e.jsx("input", {
                    className: `input ${s.phone ? "input--invalid" : ""}`,
                    value: l,
                    onChange: (t) => {
                      (j(t.target.value), i((n) => ({ ...n, phone: void 0 })));
                    },
                    placeholder: "VD: 0912345678 — ít nhất 8 chữ số",
                    inputMode: "tel",
                    autoComplete: "tel",
                    "aria-invalid": !!s.phone,
                  }),
                  s.phone &&
                    e.jsx("span", { className: "field-error", role: "alert", children: s.phone }),
                ],
              }),
              e.jsxs("p", {
                children: ["Tổng thanh toán: ", e.jsx("strong", { children: E(v) }), " (demo COD)"],
              }),
              c && e.jsx("p", { className: "form-alert", role: "alert", children: c }),
              e.jsx("button", {
                type: "submit",
                className: "btn btn-primary",
                disabled: u,
                children: u ? "Đang xử lý…" : "Đặt hàng",
              }),
            ],
          }),
        ],
      })
    : e.jsx("div", {
        className: "container",
        style: { padding: 40 },
        children: e.jsxs("p", {
          children: [e.jsx(y, { to: "/dang-nhap", children: "Đăng nhập" }), " để thanh toán."],
        }),
      });
}
export { F as default };

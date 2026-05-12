import { j as t } from "./motion-Crlsyqa2.js";
import { u as f, r as n, L as i } from "./vendor-CUtgA-5W.js";
import { u as v, a as u, b as q } from "./index-2DOOHyE3.js";
import { f as m } from "./format-ksNvffJs.js";
const C = "_title_j9epu_1",
  S = "_layout_j9epu_11",
  k = "_list_j9epu_37",
  T = "_row_j9epu_57",
  E = "_thumb_j9epu_83",
  L = "_name_j9epu_97",
  M = "_price_j9epu_117",
  A = "_qty_j9epu_129",
  G = "_remove_j9epu_159",
  P = "_lineTotal_j9epu_179",
  $ = "_summary_j9epu_189",
  s = {
    title: C,
    layout: S,
    list: k,
    row: T,
    thumb: E,
    name: L,
    price: M,
    qty: A,
    remove: G,
    lineTotal: P,
    summary: $,
    continue: "_continue_j9epu_227",
  };
function V() {
  const x = f(),
    c = v((e) => e.token),
    [d, _] = n.useState([]),
    [y, g] = n.useState(0),
    [N, p] = n.useState(!0),
    [h, l] = n.useState(null),
    r = () => {
      c &&
        u
          .cart()
          .then((e) => {
            (_(e.items),
              g(e.subtotal),
              q.getState().setCount(e.items.reduce((a, o) => a + o.quantity, 0)));
          })
          .finally(() => p(!1));
    };
  n.useEffect(() => {
    if (!c) {
      p(!1);
      return;
    }
    r();
  }, [c]);
  const j = async (e, a) => {
      try {
        (l(null), await u.patchCart(e, a), r());
      } catch (o) {
        l(o.message);
      }
    },
    b = async (e) => {
      try {
        (l(null), await u.removeCart(e), r());
      } catch (a) {
        l(a.message);
      }
    };
  return c
    ? N
      ? t.jsx("div", {
          className: "container",
          style: { padding: 40 },
          children: t.jsx("p", { children: "Đang tải giỏ hàng…" }),
        })
      : t.jsxs("div", {
          className: "container",
          style: { padding: "24px 0 48px" },
          children: [
            t.jsx("h1", { className: s.title, children: "Giỏ hàng" }),
            h &&
              t.jsx("p", {
                className: "form-alert",
                role: "alert",
                style: { marginBottom: 16 },
                children: h,
              }),
            d.length === 0
              ? t.jsxs("p", {
                  children: [
                    "Giỏ hàng trống. ",
                    t.jsx(i, { to: "/", children: "Tiếp tục mua sắm" }),
                  ],
                })
              : t.jsxs("div", {
                  className: s.layout,
                  children: [
                    t.jsx("ul", {
                      className: s.list,
                      children: d.map((e) =>
                        t.jsxs(
                          "li",
                          {
                            className: s.row,
                            children: [
                              t.jsx(i, {
                                to: `/p/${e.product.slug}`,
                                className: s.thumb,
                                children: t.jsx("img", {
                                  src: e.product.image,
                                  alt: "",
                                  width: 96,
                                  height: 96,
                                }),
                              }),
                              t.jsxs("div", {
                                className: s.detail,
                                children: [
                                  t.jsx(i, {
                                    to: `/p/${e.product.slug}`,
                                    className: s.name,
                                    children: e.product.name,
                                  }),
                                  t.jsx("div", {
                                    className: s.price,
                                    children: m(e.product.price),
                                  }),
                                  t.jsxs("div", {
                                    className: s.qty,
                                    children: [
                                      t.jsx("button", {
                                        type: "button",
                                        onClick: () => j(e.id, Math.max(1, e.quantity - 1)),
                                        children: "−",
                                      }),
                                      t.jsx("span", { children: e.quantity }),
                                      t.jsx("button", {
                                        type: "button",
                                        onClick: () => j(e.id, Math.min(99, e.quantity + 1)),
                                        children: "+",
                                      }),
                                      t.jsx("button", {
                                        type: "button",
                                        className: s.remove,
                                        onClick: () => b(e.id),
                                        children: "Xóa",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              t.jsx("div", {
                                className: s.lineTotal,
                                children: m(e.product.price * e.quantity),
                              }),
                            ],
                          },
                          e.id
                        )
                      ),
                    }),
                    t.jsxs("aside", {
                      className: s.summary,
                      children: [
                        t.jsxs("p", {
                          children: ["Tạm tính: ", t.jsx("strong", { children: m(y) })],
                        }),
                        t.jsx("button", {
                          type: "button",
                          className: "btn btn-primary",
                          onClick: () => x("/thanh-toan"),
                          children: "Mua hàng",
                        }),
                        t.jsx(i, {
                          to: "/",
                          className: s.continue,
                          children: "← Tiếp tục mua sắm",
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        })
    : t.jsx("div", {
        className: "container",
        style: { padding: 40 },
        children: t.jsxs("p", {
          children: [
            "Vui lòng ",
            t.jsx(i, { to: "/dang-nhap", children: "đăng nhập" }),
            " để xem giỏ hàng.",
          ],
        }),
      });
}
export { V as default };

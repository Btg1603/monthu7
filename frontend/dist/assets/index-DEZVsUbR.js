import { u as v, j as s, m as z } from "./motion-Crlsyqa2.js";
import { g as P, u as S, r, L as i } from "./vendor-CUtgA-5W.js";
import { u as C, a as u, b as E } from "./index-2DOOHyE3.js";
import { F as p } from "./FadeIn-CFs8MqKz.js";
import { f as x } from "./format-ksNvffJs.js";
const M = "_breadcrumb_16z1r_1",
  q = "_layout_16z1r_19",
  B = "_gallery_16z1r_45",
  F = "_badge_16z1r_75",
  w = "_title_16z1r_101",
  L = "_meta_16z1r_113",
  T = "_priceBlock_16z1r_125",
  I = "_price_16z1r_125",
  R = "_old_16z1r_159",
  $ = "_discount_16z1r_171",
  A = "_qty_16z1r_181",
  K = "_actions_16z1r_231",
  Q = "_msg_16z1r_245",
  V = "_msgErr_16z1r_257",
  X = "_desc_16z1r_269",
  t = {
    breadcrumb: M,
    layout: q,
    gallery: B,
    badge: F,
    title: w,
    meta: L,
    priceBlock: T,
    price: I,
    old: R,
    discount: $,
    qty: A,
    actions: K,
    msg: Q,
    msgErr: V,
    desc: X,
  };
function U() {
  const { slug: l } = P(),
    _ = S(),
    j = v(),
    y = C((n) => n.token),
    [e, h] = r.useState(null),
    [a, o] = r.useState(1),
    [d, c] = r.useState(null),
    [b, g] = r.useState(!0);
  r.useEffect(() => {
    l &&
      (g(!0),
      u
        .productBySlug(l)
        .then(h)
        .catch(() => h(null))
        .finally(() => g(!1)));
  }, [l]);
  const f = async () => {
    if (e) {
      if (!y) {
        _("/dang-nhap", { state: { from: `/p/${e.slug}` } });
        return;
      }
      if (!Number.isInteger(a) || a < 1 || a > 99) {
        c({ kind: "err", text: "Số lượng phải là số nguyên từ 1 đến 99." });
        return;
      }
      c(null);
      try {
        await u.addCart(e.id, a);
        const n = await u.cart();
        (E.getState().setCount(n.items.reduce((N, k) => N + k.quantity, 0)),
          c({ kind: "ok", text: "Đã thêm vào giỏ hàng." }));
      } catch (n) {
        c({ kind: "err", text: n.message });
      }
    }
  };
  if (b)
    return s.jsx("div", {
      className: "container",
      style: { padding: 40 },
      children: s.jsx("p", { children: "Đang tải…" }),
    });
  if (!e)
    return s.jsxs("div", {
      className: "container",
      style: { padding: 40 },
      children: [
        s.jsx("p", { children: "Không tìm thấy sản phẩm." }),
        s.jsx(i, { to: "/", children: "Về trang chủ" }),
      ],
    });
  const m =
    e.listPrice && e.listPrice > e.price ? Math.round((1 - e.price / e.listPrice) * 100) : null;
  return s.jsxs("div", {
    className: "container",
    style: { padding: "24px 0 48px" },
    children: [
      s.jsx(p, {
        children: s.jsxs("nav", {
          className: t.breadcrumb,
          children: [
            s.jsx(i, { to: "/", children: "Trang chủ" }),
            s.jsx("span", { children: " / " }),
            e.category &&
              s.jsxs(s.Fragment, {
                children: [
                  s.jsx(i, { to: `/danh-muc/${e.category.slug}`, children: e.category.name }),
                  s.jsx("span", { children: " / " }),
                ],
              }),
            s.jsx("span", { children: e.name }),
          ],
        }),
      }),
      s.jsxs("div", {
        className: t.layout,
        children: [
          s.jsxs(z.div, {
            className: t.gallery,
            initial: j ? !1 : { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
            children: [
              e.badge && s.jsx("span", { className: t.badge, children: e.badge }),
              s.jsx("img", { src: e.image, alt: "", width: 400, height: 400 }),
            ],
          }),
          s.jsxs(p, {
            delay: 0.06,
            className: t.info,
            children: [
              s.jsx("h1", { className: t.title, children: e.name }),
              s.jsxs("div", {
                className: t.meta,
                children: ["★ ", e.rating, " (", e.reviewCount, " đánh giá) · Đã bán ", e.sold],
              }),
              s.jsxs("div", {
                className: t.priceBlock,
                children: [
                  s.jsx("span", { className: t.price, children: x(e.price) }),
                  e.listPrice &&
                    e.listPrice > e.price &&
                    s.jsxs(s.Fragment, {
                      children: [
                        s.jsx("span", { className: t.old, children: x(e.listPrice) }),
                        m != null &&
                          m > 0 &&
                          s.jsxs("span", { className: t.discount, children: ["-", m, "%"] }),
                      ],
                    }),
                ],
              }),
              s.jsxs("div", {
                className: t.qty,
                children: [
                  s.jsx("span", { children: "Số lượng" }),
                  s.jsx("button", {
                    type: "button",
                    onClick: () => o((n) => Math.max(1, n - 1)),
                    children: "−",
                  }),
                  s.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 99,
                    value: a,
                    onChange: (n) => o(Math.min(99, Math.max(1, Number(n.target.value) || 1))),
                  }),
                  s.jsx("button", {
                    type: "button",
                    onClick: () => o((n) => Math.min(99, n + 1)),
                    children: "+",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: t.actions,
                children: [
                  s.jsx("button", {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: f,
                    children: "Thêm vào giỏ hàng",
                  }),
                  s.jsx(i, {
                    to: "/gio-hang",
                    className: "btn btn-outline",
                    children: "Xem giỏ hàng",
                  }),
                ],
              }),
              d &&
                s.jsx("p", {
                  className: d.kind === "ok" ? t.msg : t.msgErr,
                  role: "alert",
                  children: d.text,
                }),
              s.jsxs("div", {
                className: t.desc,
                children: [
                  s.jsx("h2", { children: "Mô tả sản phẩm" }),
                  s.jsx("p", { children: e.description }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { U as default };

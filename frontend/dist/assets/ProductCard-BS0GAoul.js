import { j as i, u as g, m as r } from "./motion-Crlsyqa2.js";
import { f as o } from "./format-ksNvffJs.js";
import { L as d } from "./vendor-CUtgA-5W.js";
function f(s, l) {
  const a = l.trim();
  if (!a) return s;
  const n = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    c = new RegExp(`(${n})`, "i"),
    _ = s.split(new RegExp(`(${n})`, "gi"));
  return i.jsx(i.Fragment, {
    children: _.map((t, m) =>
      c.test(t)
        ? i.jsx("mark", { style: { backgroundColor: "#fff3cd", padding: "0 2px" }, children: t }, m)
        : t
    ),
  });
}
const j = "_card_iw9fj_1",
  h = "_thumb_iw9fj_39",
  p = "_imgWrap_iw9fj_55",
  w = "_badge_iw9fj_77",
  x = "_badgeBlue_iw9fj_113",
  b = "_discountPill_iw9fj_149",
  N = "_body_iw9fj_175",
  u = "_official_iw9fj_191",
  P = "_title_iw9fj_205",
  y = "_rating_iw9fj_235",
  v = "_star_iw9fj_253",
  R = "_ratingNum_iw9fj_265",
  $ = "_dot_iw9fj_275",
  k = "_sold_iw9fj_289",
  B = "_priceRow_iw9fj_297",
  C = "_price_iw9fj_297",
  L = "_priceOld_iw9fj_329",
  e = {
    card: j,
    thumb: h,
    imgWrap: p,
    badge: w,
    badgeBlue: x,
    discountPill: b,
    body: N,
    official: u,
    title: P,
    rating: y,
    star: v,
    ratingNum: R,
    dot: $,
    sold: k,
    priceRow: B,
    price: C,
    priceOld: L,
  };
function F({ product: s, highlightQuery: l }) {
  const a = g(),
    n = s.listPrice && s.listPrice > s.price ? Math.round((1 - s.price / s.listPrice) * 100) : null,
    c = s.sold >= 1e3 ? `${(s.sold / 1e3).toFixed(1).replace(".", ",")}k` : String(s.sold);
  return i.jsxs(r.article, {
    className: e.card,
    whileHover: a ? void 0 : { y: -6, transition: { type: "spring", stiffness: 420, damping: 28 } },
    whileTap: a ? void 0 : { scale: 0.99 },
    children: [
      i.jsxs(d, {
        to: `/p/${s.slug}`,
        className: e.thumb,
        children: [
          s.badge &&
            i.jsx("span", {
              className: s.badge.toLowerCase().includes("tikinow") ? e.badgeBlue : e.badge,
              children: s.badge,
            }),
          n != null &&
            n > 0 &&
            i.jsxs("span", { className: e.discountPill, children: ["-", n, "%"] }),
          i.jsx(r.div, {
            className: e.imgWrap,
            whileHover: a ? void 0 : { scale: 1.04 },
            transition: { type: "spring", stiffness: 350, damping: 26 },
            children: i.jsx("img", {
              src: s.image,
              alt: "",
              loading: "lazy",
              width: 280,
              height: 280,
            }),
          }),
        ],
      }),
      i.jsxs("div", {
        className: e.body,
        children: [
          i.jsx("p", { className: e.official, children: "Chính hãng" }),
          i.jsx(d, { to: `/p/${s.slug}`, className: e.title, children: l ? f(s.name, l) : s.name }),
          i.jsxs("div", {
            className: e.rating,
            children: [
              i.jsx("span", { className: e.star, "aria-hidden": !0, children: "★" }),
              i.jsx("span", { className: e.ratingNum, children: s.rating }),
              i.jsx("span", { className: e.dot }),
              i.jsxs("span", { className: e.sold, children: ["Đã bán ", c] }),
            ],
          }),
          i.jsxs("div", {
            className: e.priceRow,
            children: [
              i.jsx("span", { className: e.price, children: o(s.price) }),
              s.listPrice &&
                s.listPrice > s.price &&
                i.jsx("span", { className: e.priceOld, children: o(s.listPrice) }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { F as P };

import { a as W, u as S, j as e, m as B } from "./motion-Crlsyqa2.js";
import { r as d, L as x } from "./vendor-CUtgA-5W.js";
import { a as g } from "./index-2DOOHyE3.js";
import { S as C, a as T } from "./Stagger-1RtdqA6q.js";
import { e as v, F as j } from "./FadeIn-CFs8MqKz.js";
import { P as G } from "./ProductCard-BS0GAoul.js";
import "./format-ksNvffJs.js";
function P({ children: c, className: t, amount: r = 0.12 }) {
  const a = d.useRef(null),
    l = W(a, { once: !0, amount: r });
  return S()
    ? e.jsx("div", { ref: a, className: t, children: c })
    : e.jsx(B.div, {
        ref: a,
        className: t,
        initial: { opacity: 0, y: 22 },
        animate: l ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
        transition: { duration: 0.48, ease: v },
        children: c,
      });
}
const D = "_bar_1ttdb_1",
  I = "_accent_1ttdb_19",
  M = "_head_1ttdb_35",
  $ = "_extra_1ttdb_51",
  E = "_title_1ttdb_61",
  L = "_sub_1ttdb_75",
  m = { bar: D, accent: I, head: M, extra: $, title: E, sub: L };
function w({ accent: c = !0, title: t, subtitle: r, extra: a, className: l }) {
  const i = S();
  return e.jsxs(B.div, {
    className: `${m.bar} ${l ?? ""}`,
    initial: i ? !1 : { opacity: 0, x: -12 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: v },
    children: [
      c && e.jsx("span", { className: m.accent, "aria-hidden": !0 }),
      e.jsxs("div", {
        className: m.head,
        children: [
          e.jsx("h2", { className: m.title, children: t }),
          r && e.jsx("span", { className: m.sub, children: r }),
        ],
      }),
      a != null && e.jsx("div", { className: m.extra, children: a }),
    ],
  });
}
const R = "_catPanel_1dbu0_1",
  q = "_catHead_1dbu0_10",
  F = "_catTitle_1dbu0_19",
  K = "_catHint_1dbu0_25",
  O = "_catStagger_1dbu0_30",
  V = "_catScroll_1dbu0_35",
  X = "_catItem_1dbu0_50",
  A = "_catName_1dbu0_56",
  J = "_catCircle_1dbu0_60",
  o = {
    catPanel: R,
    catHead: q,
    catTitle: F,
    catHint: K,
    catStagger: O,
    catScroll: V,
    catItem: X,
    catName: A,
    catCircle: J,
  };
function Q({ categories: c }) {
  return e.jsx(P, {
    children: e.jsx("section", {
      className: "container",
      children: e.jsxs("div", {
        className: o.catPanel,
        children: [
          e.jsxs("div", {
            className: o.catHead,
            children: [
              e.jsx("h2", { className: o.catTitle, children: "Danh mục nổi bật" }),
              e.jsx("span", { className: o.catHint, children: "Khám phá ngay" }),
            ],
          }),
          e.jsx(C, {
            className: o.catScroll,
            children: c.map((t) =>
              e.jsx(
                T,
                {
                  className: o.catStagger,
                  children: e.jsxs(x, {
                    to: `/danh-muc/${t.slug}`,
                    className: o.catItem,
                    children: [
                      e.jsx("span", { className: o.catCircle, children: t.icon || "📦" }),
                      e.jsx("span", { className: o.catName, children: t.name }),
                    ],
                  }),
                },
                t.id
              )
            ),
          }),
        ],
      }),
    }),
  });
}
const U = "_heroWrap_8zh8s_1",
  Y = "_heroBannerWrap_8zh8s_6",
  Z = "_hero_8zh8s_1",
  ee = "_heroBanner_8zh8s_6",
  se = "_heroTag_8zh8s_44",
  te = "_heroTitle_8zh8s_52",
  ae = "_heroDesc_8zh8s_59",
  ne = "_heroCtas_8zh8s_65",
  ce = "_btnPrimary_8zh8s_73",
  ie = "_btnGhost_8zh8s_89",
  re = "_heroSide_8zh8s_104",
  oe = "_miniCard_8zh8s_110",
  le = "_miniBadge_8zh8s_140",
  de = "_miniBadge2_8zh8s_150",
  s = {
    heroWrap: U,
    heroBannerWrap: Y,
    hero: Z,
    heroBanner: ee,
    heroTag: se,
    heroTitle: te,
    heroDesc: ae,
    heroCtas: ne,
    btnPrimary: ce,
    btnGhost: ie,
    heroSide: re,
    miniCard: oe,
    miniBadge: le,
    miniBadge2: de,
  };
function he() {
  return e.jsx("section", {
    className: s.heroWrap,
    children: e.jsx("div", {
      className: "container",
      children: e.jsxs("div", {
        className: s.hero,
        children: [
          e.jsx(j, {
            delay: 0,
            className: s.heroBannerWrap,
            children: e.jsxs("div", {
              className: s.heroBanner,
              children: [
                e.jsx("p", { className: s.heroTag, children: "Siêu sale cuối tuần" }),
                e.jsx("h1", { className: s.heroTitle, children: "Giảm đến 50%" }),
                e.jsx("p", {
                  className: s.heroDesc,
                  children: "Freeship 0đ · Giao nhanh 2h · Trả góp 0%",
                }),
                e.jsxs("div", {
                  className: s.heroCtas,
                  children: [
                    e.jsx(x, {
                      to: "/tim-kiem?q=điện thoại",
                      className: s.btnPrimary,
                      children: "Mua ngay",
                    }),
                    e.jsx(x, {
                      to: "/danh-muc/dien-tu-dien-may",
                      className: s.btnGhost,
                      children: "Xem khuyến mãi",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: s.heroSide,
            children: [
              e.jsx(j, {
                delay: 0.08,
                y: 20,
                children: e.jsxs(x, {
                  to: "/tim-kiem?q=tai nghe",
                  className: s.miniCard,
                  children: [
                    e.jsx("span", { className: s.miniBadge, children: "TikiNOW" }),
                    e.jsx("strong", { children: "Giao 2h" }),
                    e.jsx("span", { children: "Đơn từ 99k" }),
                  ],
                }),
              }),
              e.jsx(j, {
                delay: 0.16,
                y: 20,
                children: e.jsxs(x, {
                  to: "/tim-kiem?q=laptop",
                  className: s.miniCard,
                  children: [
                    e.jsx("span", { className: s.miniBadge2, children: "Ưu đãi" }),
                    e.jsx("strong", { children: "Laptop học tập" }),
                    e.jsx("span", { children: "Trả góp 0%" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const me = "_loadMoreButton_cdlxa_1",
  _e = "_grid_cdlxa_26",
  f = { loadMoreButton: me, grid: _e };
function ue({ products: c, loading: t, page: r, totalPages: a, onLoadMore: l }) {
  return e.jsx("section", {
    className: "container",
    style: { paddingBottom: 48 },
    children: e.jsxs(P, {
      children: [
        e.jsx(w, {
          title: "Gợi ý hôm nay",
          subtitle: "Dành riêng cho bạn",
          extra: e.jsx("button", {
            type: "button",
            className: f.loadMoreButton,
            onClick: l,
            disabled: t || r >= a,
            children: r >= a ? "Đã tải hết" : t ? "Đang tải..." : "Xem thêm →",
          }),
        }),
        e.jsx(C, {
          className: f.grid,
          children: c.map((i) => e.jsx(T, { children: e.jsx(G, { product: i }) }, i.id)),
        }),
      ],
    }),
  });
}
const xe = "_page_vbhig_1",
  pe = { page: xe };
function Be() {
  const [c, t] = d.useState([]),
    [r, a] = d.useState([]),
    [l, i] = d.useState(null),
    [z, p] = d.useState(!1),
    [N, b] = d.useState(1),
    [k, y] = d.useState(1),
    H = async (_ = 1) => {
      try {
        p(!0);
        const n = await g.products({ page: _, limit: 12, sort: "bestseller" }),
          h = n.pagination;
        (a((u) => (_ === 1 ? n.items : [...u, ...n.items])),
          b(_),
          y((h == null ? void 0 : h.totalPages) ?? 1));
      } catch (n) {
        n instanceof Error ? i(n.message) : i("Đã có lỗi xảy ra khi tải sản phẩm");
      } finally {
        p(!1);
      }
    };
  return (
    d.useEffect(() => {
      async function _() {
        p(!0);
        try {
          const [n, h] = await Promise.all([
            g.categories(),
            g.products({ page: 1, limit: 12, sort: "bestseller" }),
          ]);
          (t(n), a(h.items));
          const u = h.pagination;
          (b(1), y((u == null ? void 0 : u.totalPages) ?? 1));
        } catch (n) {
          n instanceof Error ? i(n.message) : i("Đã có lỗi xảy ra khi tải dữ liệu");
        } finally {
          p(!1);
        }
      }
      _();
    }, []),
    l
      ? e.jsx("div", {
          className: "container",
          style: { padding: "24px 0" },
          children: e.jsxs("p", {
            className: "form-alert",
            role: "alert",
            children: [
              e.jsx("strong", { children: "Không tải được trang chủ." }),
              " ",
              l,
              e.jsx("span", {
                style: { display: "block", marginTop: 8, fontWeight: 400 },
                children: "Kiểm tra backend đang chạy tại cổng 4000 và thử tải lại trang.",
              }),
            ],
          }),
        })
      : e.jsxs("div", {
          className: pe.page,
          children: [
            e.jsx(he, {}),
            e.jsx(Q, { categories: c }),
            e.jsx(ue, {
              products: r,
              loading: z,
              page: N,
              totalPages: k,
              onLoadMore: () => H(N + 1),
            }),
          ],
        })
  );
}
export { Be as default };

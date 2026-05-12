import { j as e } from "./motion-Crlsyqa2.js";
import { f as S, r as i, L as G } from "./vendor-CUtgA-5W.js";
import { a as T } from "./index-2DOOHyE3.js";
import { F as w } from "./FadeIn-CFs8MqKz.js";
import { S as E, a as F } from "./Stagger-1RtdqA6q.js";
import { P as I } from "./ProductCard-BS0GAoul.js";
import "./format-ksNvffJs.js";
const L = "_breadcrumb_1qy7k_1",
  W = "_pageTitle_1qy7k_19",
  M = "_grid_1qy7k_31",
  $ = "_toolbar_1qy7k_43",
  K = "_select_1qy7k_61",
  O = "_filters_1qy7k_83",
  A = "_fetching_1qy7k_117",
  B = "_loadingWrapper_1qy7k_129",
  D = "_loadingGrid_1qy7k_137",
  H = "_skeleton_1qy7k_149",
  J = "_empty_1qy7k_183",
  s = {
    breadcrumb: L,
    pageTitle: W,
    grid: M,
    toolbar: $,
    select: K,
    filters: O,
    fetching: A,
    loadingWrapper: B,
    loadingGrid: D,
    skeleton: H,
    empty: J,
  };
function ee() {
  const [c, _] = S(),
    o = c.get("q") || "",
    r = i.useMemo(
      () => ({
        sort: c.get("sort") || "relevance",
        minPrice: c.get("minPrice") || "",
        maxPrice: c.get("maxPrice") || "",
        category: c.get("category") || "",
        brand: c.get("brand") || "",
        minRating: c.get("minRating") || "",
      }),
      [c]
    ),
    [l, j] = i.useState(null),
    [g, b] = i.useState(!1),
    [p, d] = i.useState(null),
    [q, v] = i.useState(!1),
    x = i.useRef(0),
    y = i.useRef({}),
    f = i.useMemo(() => JSON.stringify({ q: o, ...r }), [o, r]),
    N = i.useCallback(async () => {
      const t = o.trim();
      if (!t) {
        j(null);
        return;
      }
      const a = r.minPrice.trim(),
        h = r.maxPrice.trim();
      if (a) {
        const n = Number(a);
        if (Number.isNaN(n) || n < 0) {
          d('Ô "Giá từ" phải là số không âm.');
          return;
        }
      }
      if (h) {
        const n = Number(h);
        if (Number.isNaN(n) || n < 0) {
          d('Ô "Giá đến" phải là số không âm.');
          return;
        }
      }
      if (a && h && Number(a) > Number(h)) {
        d("Giá tối thiểu không được lớn hơn giá tối đa — hãy chỉnh lại bộ lọc.");
        return;
      }
      if (y.current[f]) {
        j(y.current[f]);
        return;
      }
      const m = ++x.current;
      try {
        (d(null), l ? v(!0) : b(!0));
        const n = { q: t, sort: r.sort };
        (r.minPrice && (n.minPrice = Number(r.minPrice)),
          r.maxPrice && (n.maxPrice = Number(r.maxPrice)),
          r.category && (n.category = r.category),
          r.brand && (n.brand = r.brand),
          r.minRating && (n.minRating = Number(r.minRating)));
        const P = await T.search(n);
        if (m !== x.current) return;
        ((y.current[f] = P), j(P));
      } catch (n) {
        if (m !== x.current) return;
        d(n instanceof Error ? n.message : "Có lỗi xảy ra");
      } finally {
        m === x.current && (b(!1), v(!1));
      }
    }, [o, r, f, l]);
  i.useEffect(() => {
    N();
  }, [N]);
  const k = i.useCallback(
      (t) => {
        const a = new URLSearchParams(c);
        (Object.entries(t).forEach(([h, m]) => {
          m ? a.set(h, m) : a.delete(h);
        }),
          _(a, { replace: !0 }));
      },
      [c, _]
    ),
    R = (t) => {
      k({ sort: t.target.value });
    },
    u = (t, a) => {
      k({ [t]: a });
    },
    C = l && l.products && l.products.length > 0;
  return e.jsx("div", {
    className: "container",
    style: { padding: "24px 0 48px" },
    children: e.jsxs(w, {
      children: [
        e.jsxs("nav", {
          className: s.breadcrumb,
          children: [
            e.jsx(G, { to: "/", children: "Trang chủ" }),
            e.jsx("span", { children: "/" }),
            e.jsxs("span", { children: ['Tìm kiếm "', o, '"'] }),
          ],
        }),
        e.jsxs("div", {
          className: s.toolbar,
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className: s.pageTitle,
                  children: l ? `${l.pagination.total} kết quả cho "${o}"` : `Tìm kiếm "${o}"`,
                }),
                q && e.jsx("p", { className: s.fetching, children: "Đang cập nhật..." }),
              ],
            }),
            e.jsxs("select", {
              className: s.select,
              value: r.sort,
              onChange: R,
              children: [
                e.jsx("option", { value: "relevance", children: "Liên quan" }),
                e.jsx("option", { value: "price_asc", children: "Giá thấp → cao" }),
                e.jsx("option", { value: "price_desc", children: "Giá cao → thấp" }),
                e.jsx("option", { value: "rating", children: "Đánh giá cao" }),
                e.jsx("option", { value: "bestseller", children: "Bán chạy" }),
                e.jsx("option", { value: "newest", children: "Mới nhất" }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: s.filters,
          children: [
            e.jsx("input", {
              type: "number",
              placeholder: "Giá từ",
              value: r.minPrice,
              onChange: (t) => u("minPrice", t.target.value),
            }),
            e.jsx("input", {
              type: "number",
              placeholder: "Giá đến",
              value: r.maxPrice,
              onChange: (t) => u("maxPrice", t.target.value),
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Danh mục",
              value: r.category,
              onChange: (t) => u("category", t.target.value),
            }),
            e.jsx("input", {
              type: "text",
              placeholder: "Thương hiệu",
              value: r.brand,
              onChange: (t) => u("brand", t.target.value),
            }),
            e.jsxs("select", {
              value: r.minRating,
              onChange: (t) => u("minRating", t.target.value),
              children: [
                e.jsx("option", { value: "", children: "Tất cả đánh giá" }),
                e.jsx("option", { value: "4", children: "4+ sao" }),
                e.jsx("option", { value: "3", children: "3+ sao" }),
                e.jsx("option", { value: "2", children: "2+ sao" }),
                e.jsx("option", { value: "1", children: "1+ sao" }),
              ],
            }),
          ],
        }),
        g &&
          e.jsx("div", {
            className: s.loadingWrapper,
            children: e.jsx("div", {
              className: s.loadingGrid,
              children: Array.from({ length: 8 }).map((t, a) =>
                e.jsx("div", { className: s.skeleton }, a)
              ),
            }),
          }),
        !g &&
          p &&
          e.jsxs("div", {
            className: s.empty,
            children: [e.jsx("h2", { children: "Có lỗi xảy ra" }), e.jsx("p", { children: p })],
          }),
        !g &&
          !p &&
          l &&
          l.products.length === 0 &&
          e.jsxs("div", {
            className: s.empty,
            children: [
              e.jsx("h2", { children: "Không tìm thấy sản phẩm" }),
              e.jsx("p", { children: "Hãy thử từ khóa khác" }),
            ],
          }),
        !g &&
          !p &&
          C &&
          e.jsx(E, {
            children: e.jsx("div", {
              className: s.grid,
              children: l.products.map((t) =>
                e.jsx(F, { children: e.jsx(I, { product: t, highlightQuery: o }) }, t.id)
              ),
            }),
          }),
      ],
    }),
  });
}
export { ee as default };

import { j as e } from "./motion-Crlsyqa2.js";
import { r as c, L as t } from "./vendor-CUtgA-5W.js";
import { a as o } from "./index-2DOOHyE3.js";
import { F as l } from "./FadeIn-CFs8MqKz.js";
import { S as d, a as h } from "./Stagger-1RtdqA6q.js";
const _ = "_page_16emq_1",
  p = "_breadcrumb_16emq_11",
  g = "_sep_16emq_39",
  u = "_head_16emq_49",
  x = "_title_16emq_61",
  j = "_sub_16emq_75",
  N = "_loading_16emq_87",
  b = "_grid_16emq_95",
  q = "_card_16emq_113",
  f = "_icon_16emq_167",
  C = "_name_16emq_191",
  S = "_count_16emq_219",
  s = {
    page: _,
    breadcrumb: p,
    sep: g,
    head: u,
    title: x,
    sub: j,
    loading: N,
    grid: b,
    card: q,
    icon: f,
    name: C,
    count: S,
  };
function I() {
  const [r, i] = c.useState([]),
    [n, m] = c.useState(null);
  return (
    c.useEffect(() => {
      o.categories()
        .then(i)
        .catch((a) => m(a.message));
    }, []),
    n
      ? e.jsx("div", {
          className: "container",
          style: { padding: "24px 0" },
          children: e.jsxs("p", {
            className: "form-alert",
            role: "alert",
            children: [e.jsx("strong", { children: "Không tải được danh mục." }), " ", n],
          }),
        })
      : e.jsx("div", {
          className: s.page,
          children: e.jsxs("div", {
            className: "container",
            children: [
              e.jsxs(l, {
                children: [
                  e.jsxs("nav", {
                    className: s.breadcrumb,
                    children: [
                      e.jsx(t, { to: "/", children: "Trang chủ" }),
                      e.jsx("span", { className: s.sep, children: "›" }),
                      e.jsx("span", { children: "Danh mục sản phẩm" }),
                    ],
                  }),
                  e.jsxs("header", {
                    className: s.head,
                    children: [
                      e.jsx("h1", { className: s.title, children: "Danh mục sản phẩm" }),
                      e.jsx("p", {
                        className: s.sub,
                        children: "Chọn danh mục để xem sản phẩm theo ngành hàng",
                      }),
                    ],
                  }),
                ],
              }),
              r.length === 0 && !n
                ? e.jsx("p", { className: s.loading, children: "Đang tải…" })
                : e.jsx(d, {
                    className: s.grid,
                    children: r.map((a) =>
                      e.jsx(
                        h,
                        {
                          children: e.jsxs(t, {
                            to: `/danh-muc/${a.slug}`,
                            className: s.card,
                            children: [
                              e.jsx("span", { className: s.icon, children: a.icon || "📦" }),
                              e.jsx("span", { className: s.name, children: a.name }),
                              a.productCount != null &&
                                e.jsxs("span", {
                                  className: s.count,
                                  children: [a.productCount, " sản phẩm"],
                                }),
                            ],
                          }),
                        },
                        a.id
                      )
                    ),
                  }),
            ],
          }),
        })
  );
}
export { I as default };

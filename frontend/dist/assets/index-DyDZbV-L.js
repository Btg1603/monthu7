import { j as e } from "./motion-Crlsyqa2.js";
import { g, r as s, L as d } from "./vendor-CUtgA-5W.js";
import { a as p } from "./index-2DOOHyE3.js";
import { F as x } from "./FadeIn-CFs8MqKz.js";
import { S as h, a as u } from "./Stagger-1RtdqA6q.js";
import { P as j } from "./ProductCard-BS0GAoul.js";
import "./format-ksNvffJs.js";
const f = "_breadcrumb_1qegx_1",
  _ = "_pageTitle_1qegx_19",
  b = "_grid_1qegx_31",
  n = { breadcrumb: f, pageTitle: _, grid: b };
function v() {
  const { slug: a } = g(),
    [c, l] = s.useState(""),
    [i, m] = s.useState([]),
    [t, o] = s.useState(null);
  return (
    s.useEffect(() => {
      a &&
        (o(null),
        p
          .category(a)
          .then((r) => {
            (l(r.name), m(r.products));
          })
          .catch((r) => o(r.message)));
    }, [a]),
    t
      ? e.jsxs("div", {
          className: "container",
          style: { padding: 24 },
          children: [
            e.jsxs("p", {
              className: "form-alert",
              role: "alert",
              children: [e.jsx("strong", { children: "Không tải được danh mục này." }), " ", t],
            }),
            e.jsx("p", {
              style: { marginTop: 12 },
              children: e.jsx(d, { to: "/", children: "Về trang chủ" }),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "container",
          style: { padding: "24px 0 40px" },
          children: [
            e.jsxs(x, {
              children: [
                e.jsxs("nav", {
                  className: n.breadcrumb,
                  children: [
                    e.jsx(d, { to: "/", children: "Trang chủ" }),
                    e.jsx("span", { children: " / " }),
                    e.jsx("span", { children: c || "…" }),
                  ],
                }),
                e.jsx("h1", { className: n.pageTitle, children: c || "Danh mục" }),
              ],
            }),
            e.jsx(h, {
              className: n.grid,
              children: i.map((r) => e.jsx(u, { children: e.jsx(j, { product: r }) }, r.id)),
            }),
            i.length === 0 && !t && e.jsx("p", { children: "Đang tải…" }),
          ],
        })
  );
}
export { v as default };

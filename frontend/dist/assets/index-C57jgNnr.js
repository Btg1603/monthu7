import { j as s } from "./motion-Crlsyqa2.js";
import { r as c, L as h } from "./vendor-CUtgA-5W.js";
import { u as p, a as o } from "./index-2DOOHyE3.js";
import { f as m } from "./format-ksNvffJs.js";
const x = "_title_1bxp1_1",
  u = "_list_1bxp1_11",
  _ = "_card_1bxp1_29",
  j = "_head_1bxp1_43",
  f = "_status_1bxp1_61",
  g = "_addr_1bxp1_81",
  N = "_items_1bxp1_93",
  t = { title: x, list: u, card: _, head: j, status: f, addr: g, items: N };
function S() {
  const a = p((e) => e.token),
    [i, d] = c.useState([]),
    [r, l] = c.useState(null);
  return (
    c.useEffect(() => {
      a &&
        o
          .orders()
          .then(d)
          .catch((e) => l(e.message));
    }, [a]),
    a
      ? s.jsxs("div", {
          className: "container",
          style: { padding: "24px 0 48px" },
          children: [
            s.jsx("h1", { className: t.title, children: "Đơn hàng của tôi" }),
            r && s.jsx("p", { className: "form-alert", role: "alert", children: r }),
            i.length === 0 && !r && s.jsx("p", { children: "Chưa có đơn hàng." }),
            s.jsx("ul", {
              className: t.list,
              children: i.map((e) =>
                s.jsxs(
                  "li",
                  {
                    className: t.card,
                    children: [
                      s.jsxs("div", {
                        className: t.head,
                        children: [
                          s.jsxs("span", { children: ["#", e.id.slice(0, 8)] }),
                          s.jsx("span", { className: t.status, children: e.status }),
                          s.jsx("span", {
                            children: new Date(e.createdAt).toLocaleString("vi-VN"),
                          }),
                        ],
                      }),
                      s.jsxs("p", { children: [m(e.total), " · ", e.phone] }),
                      s.jsx("p", { className: t.addr, children: e.address }),
                      s.jsx("ul", {
                        className: t.items,
                        children: e.items.map((n) =>
                          s.jsxs("li", { children: [n.product.name, " × ", n.quantity] }, n.id)
                        ),
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        })
      : s.jsx("div", {
          className: "container",
          style: { padding: 40 },
          children: s.jsxs("p", {
            children: [s.jsx(h, { to: "/dang-nhap", children: "Đăng nhập" }), " để xem đơn hàng."],
          }),
        })
  );
}
export { S as default };

import { u as n, j as r, m as u } from "./motion-Crlsyqa2.js";
const c = [0.25, 0.1, 0.25, 1];
function m({ children: a, className: e, delay: i = 0, y: o = 14, duration: s = 0.4 }) {
  const t = n();
  return r.jsx(u.div, {
    className: e,
    initial: t ? !1 : { opacity: 0, y: o },
    animate: { opacity: 1, y: 0 },
    transition: { duration: t ? 0 : s, delay: t ? 0 : i, ease: c },
    children: a,
  });
}
export { m as F, c as e };

import { u as s, j as n, m as r } from "./motion-Crlsyqa2.js";
import { e as o } from "./FadeIn-CFs8MqKz.js";
const d = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.38, ease: o } },
};
function u({ children: i, className: t, stagger: a = 0.055 }) {
  const e = s();
  return n.jsx(r.div, {
    className: t,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: e ? 0 : a, delayChildren: e ? 0 : 0.05 } },
    },
    children: i,
  });
}
function m({ children: i, className: t }) {
  const e = s()
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, visible: { opacity: 1, y: 0, scale: 1 } }
    : d;
  return n.jsx(r.div, { className: t, variants: e, style: { height: "100%" }, children: i });
}
export { u as S, m as a };

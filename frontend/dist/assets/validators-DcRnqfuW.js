function a(t) {
  const i = t.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i);
}
function s(t) {
  const i = t.replace(/\D/g, "");
  return i.length >= 8 && i.length <= 11;
}
function g(t, i) {
  const n = {},
    e = t.trim();
  return (
    e
      ? a(e) || (n.email = "Email không đúng định dạng (ví dụ: ban@email.com).")
      : (n.email = "Vui lòng nhập email."),
    i || (n.password = "Vui lòng nhập mật khẩu."),
    n
  );
}
function c(t, i, n, e) {
  const h = {};
  t.trim() || (h.name = "Vui lòng nhập họ tên.");
  const l = i.trim();
  (l ? a(l) || (h.email = "Email không đúng định dạng.") : (h.email = "Vui lòng nhập email."),
    n
      ? n.length < 6 && (h.password = "Mật khẩu phải có ít nhất 6 ký tự.")
      : (h.password = "Vui lòng nhập mật khẩu."));
  const o = e.trim();
  return (
    o &&
      !s(o) &&
      (h.phone = "Số điện thoại không hợp lệ (nhập 8–11 chữ số, có thể bắt đầu bằng 0)."),
    h
  );
}
function u(t, i) {
  const n = {},
    e = t.trim();
  e
    ? e.length < 5 &&
      (n.address = "Địa chỉ quá ngắn — ghi rõ số nhà, đường, phường/quận (ít nhất 5 ký tự).")
    : (n.address = "Vui lòng nhập địa chỉ giao hàng.");
  const h = i.trim().replace(/\s/g, "");
  return (
    h
      ? s(h) || (n.phone = "Số điện thoại không hợp lệ (cần ít nhất 8 chữ số).")
      : (n.phone = "Vui lòng nhập số điện thoại liên hệ."),
    n
  );
}
function r(t, i) {
  const n = {};
  t.trim() || (n.name = "Vui lòng nhập họ tên.");
  const e = i.trim();
  return (e && !s(e) && (n.phone = "Số điện thoại không hợp lệ."), n);
}
export { g as a, c as b, r as c, u as v };

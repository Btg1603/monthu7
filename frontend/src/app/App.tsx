import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layout/Layout";

const Home = lazy(() => import("@/pages/home"));
const SearchPage = lazy(() => import("@/pages/search"));
const CategoriesPage = lazy(() => import("@/pages/categories"));
const CategoryPage = lazy(() => import("@/pages/category"));
const ProductPage = lazy(() => import("@/pages/product"));
const CartPage = lazy(() => import("@/pages/cart"));
const CheckoutPage = lazy(() => import("@/pages/checkout"));
const LoginPage = lazy(() => import("@/pages/login"));
const RegisterPage = lazy(() => import("@/pages/register"));
const AccountPage = lazy(() => import("@/pages/account"));
const OrdersPage = lazy(() => import("@/pages/orders"));

function RouteFallback() {
  return <div style={{ padding: "2rem", textAlign: "center", color: "#666" }}>Đang tải...</div>;
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tim-kiem" element={<SearchPage />} />
          <Route path="danh-muc" element={<CategoriesPage />} />
          <Route path="danh-muc/:slug" element={<CategoryPage />} />
          <Route path="p/:slug" element={<ProductPage />} />
          <Route path="gio-hang" element={<CartPage />} />
          <Route path="thanh-toan" element={<CheckoutPage />} />
          <Route path="dang-nhap" element={<LoginPage />} />
          <Route path="dang-ky" element={<RegisterPage />} />
          <Route path="tai-khoan" element={<AccountPage />} />
          <Route path="don-hang" element={<OrdersPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

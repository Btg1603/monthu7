import { useAuthStore } from "../store/authStore";

const base = "";

async function request<T>(
  path: string,
  options: RequestInit & { token?: string | null } = {}
): Promise<T> {
  const { token, ...init } = options;
  const headers = new Headers(init.headers);
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const t = token ?? useAuthStore.getState().token;
  if (t) headers.set("Authorization", `Bearer ${t}`);

  const res = await fetch(`${base}${path}`, { ...init, headers });
  if (res.status === 204) return undefined as T;
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const msg = data?.error || data?.message || res.statusText;
    throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
  }
  return data as T;
}

export const api = {
  health: () => request<{ ok: boolean }>("/health"),

  categories: () =>
    request<import("./types").Category[]>("/api/categories"),

  category: (slug: string) =>
    request<{ id: string; name: string; slug: string; products: import("./types").Product[] }>(
      `/api/categories/${encodeURIComponent(slug)}`
    ),

  products: (params: Record<string, string | number | undefined>) => {
    const q = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "") q.set(k, String(v));
    });
    return request<{ items: import("./types").Product[]; pagination: unknown }>(
      `/api/products?${q}`
    );
  },

  search: (params: Record<string, string | number | undefined>) => {
    const q = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "") q.set(k, String(v));
    });
    return request<{
      products: import("./types").Product[];
      pagination: { page: number; limit: number; total: number; totalPages: number };
      query: any;
    }>(`/api/search?${q}`);
  },

  searchSuggestions: (q: string) =>
    request<{ suggestions: string[] }>(`/api/search/suggestions?q=${encodeURIComponent(q)}`),

  productBySlug: (slug: string) =>
    request<import("./types").Product>(`/api/products/slug/${encodeURIComponent(slug)}`),

  register: (body: { email: string; password: string; name: string; phone?: string }) =>
    request<{ user: import("./types").User; token: string }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
      token: null,
    }),

  login: (body: { email: string; password: string }) =>
    request<{ user: import("./types").User; token: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      token: null,
    }),

  me: () => request<import("./types").User>("/api/auth/me"),

  cart: () =>
    request<{ items: import("./types").CartItem[]; subtotal: number }>("/api/cart"),

  addCart: (productId: string, quantity = 1) =>
    request<import("./types").CartItem>("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    }),

  patchCart: (id: string, quantity: number) =>
    request<import("./types").CartItem>(`/api/cart/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    }),

  removeCart: (id: string) =>
    request<void>(`/api/cart/${id}`, { method: "DELETE" }),

  clearCart: () => request<{ ok: boolean }>("/api/cart/clear/all", { method: "POST" }),

  orders: () => request<import("./types").Order[]>("/api/orders"),

  order: (id: string) => request<import("./types").Order>(`/api/orders/${id}`),

  checkout: (body: { address: string; phone: string }) =>
    request<import("./types").Order>("/api/orders/checkout", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  updateProfile: (body: { name?: string; phone?: string | null }) =>
    request<import("./types").User>("/api/user/profile", {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
};

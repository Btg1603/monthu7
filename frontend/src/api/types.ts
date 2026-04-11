export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  productCount?: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  listPrice: number | null;
  image: string;
  rating: number;
  reviewCount: number;
  sold: number;
  badge: string | null;
  brand: string | null;
  tags: string | null;
  categoryId: string;
  category?: Category;
};

export type User = {
  id: string;
  email: string;
  name: string;
  phone: string | null;
  createdAt: string;
};

export type CartItem = {
  id: string;
  quantity: number;
  product: Product;
};

export type Order = {
  id: string;
  userId: string;
  status: string;
  total: number;
  address: string;
  phone: string;
  createdAt: string;
  items: Array<{
    id: string;
    quantity: number;
    price: number;
    product: Product;
  }>;
};

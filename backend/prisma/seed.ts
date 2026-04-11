import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cats = [
  { name: "Điện thoại - Máy tính bảng", slug: "dien-thoai-may-tinh-bang", icon: "📱" },
  { name: "Điện tử - Điện máy", slug: "dien-tu-dien-may", icon: "📺" },
  { name: "Thời trang nam", slug: "thoi-trang-nam", icon: "👔" },
  { name: "Thời trang nữ", slug: "thoi-trang-nu", icon: "👗" },
  { name: "Nhà cửa - Đời sống", slug: "nha-cua-doi-song", icon: "🏠" },
  { name: "Sách - VPP", slug: "sach-vpp", icon: "📚" },
  { name: "Làm đẹp - Sức khỏe", slug: "lam-dep-suc-khoe", icon: "💄" },
  { name: "Thể thao - Dã ngoại", slug: "the-thao-da-ngoai", icon: "⚽" },
];

function p(
  name: string,
  slug: string,
  desc: string,
  price: number,
  listPrice: number | null,
  rating: number,
  reviewCount: number,
  sold: number,
  badge: string | null,
  catSlug: string,
  brand?: string,
  tags?: string
) {
  return {
    name,
    slug,
    description: desc,
    price,
    listPrice,
    rating,
    reviewCount,
    sold,
    badge,
    categoryId: catSlug,
    brand,
    tags,
  };
}

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const createdCats: Record<string, string> = {};
  for (const c of cats) {
    const row = await prisma.category.create({ data: c });
    createdCats[c.slug] = row.id;
  }

  const products = [
    p(
      "Điện thoại Samsung Galaxy A54 5G 8GB/128GB",
      "samsung-galaxy-a54-5g",
      "Màn hình Super AMOLED 6.4 inch, chip Exynos 1380, pin 5000mAh.",
      7490000,
      8990000,
      4.8,
      1250,
      3200,
      "-17%",
      "dien-thoai-may-tinh-bang",
      "Samsung",
      "điện thoại,android,5g"
    ),
    p(
      "iPhone 15 128GB | Chính hãng VN/A",
      "iphone-15-128gb",
      "Chip A16 Bionic, Dynamic Island, camera 48MP.",
      19990000,
      22990000,
      4.9,
      890,
      1500,
      "Giảm sốc",
      "dien-thoai-may-tinh-bang",
      "Apple",
      "điện thoại,ios,iphone"
    ),
    p(
      "Xiaomi Redmi Note 13 Pro 8GB/256GB",
      "xiaomi-redmi-note-13-pro",
      "Màn AMOLED 120Hz, Snapdragon 7s Gen 2.",
      6690000,
      7290000,
      4.7,
      560,
      2100,
      null,
      "dien-thoai-may-tinh-bang",
      "Xiaomi",
      "điện thoại,android,redmi"
    ),
    p(
      "Laptop ASUS VivoBook 15 OLED",
      "laptop-asus-vivobook-15-oled",
      "Intel Core i5, RAM 16GB, SSD 512GB, OLED.",
      15990000,
      17990000,
      4.6,
      320,
      890,
      "Mới",
      "dien-tu-dien-may",
      "ASUS",
      "laptop,máy tính,oled"
    ),
    p(
      "Tai nghe Bluetooth Sony WH-1000XM5",
      "sony-wh-1000xm5",
      "Chống ồn chủ động, pin 30 giờ.",
      7490000,
      8990000,
      4.9,
      2100,
      5600,
      "TikiNOW",
      "dien-tu-dien-may",
      "Sony",
      "tai nghe,bluetooth,chống ồn"
    ),
    p(
      "Smart TV Samsung 55 inch Crystal UHD",
      "smart-tv-samsung-55",
      "4K HDR, hệ điều hành Tizen.",
      11290000,
      13990000,
      4.5,
      412,
      780,
      "-19%",
      "dien-tu-dien-may"
    ),
    p(
      "Áo thun nam cổ trụ Basic Coolmate",
      "ao-thun-nam-co-tru-coolmate",
      "Vải cotton thoáng mát, nhiều màu.",
      199000,
      299000,
      4.7,
      890,
      12000,
      null,
      "thoi-trang-nam"
    ),
    p(
      "Quần jean nam slim fit",
      "quan-jean-nam-slim-fit",
      "Co giãn nhẹ, form slim.",
      399000,
      599000,
      4.4,
      230,
      3400,
      null,
      "thoi-trang-nam"
    ),
    p(
      "Váy liền nữ công sở",
      "vay-lien-nu-cong-so",
      "Chất liệu lụa mát, thanh lịch.",
      459000,
      659000,
      4.6,
      156,
      2100,
      "Mới",
      "thoi-trang-nu"
    ),
    p(
      "Túi xách nữ da PU cao cấp",
      "tui-xach-nu-da-pu",
      "Nhiều ngăn, khóa kéo YKK.",
      329000,
      499000,
      4.5,
      98,
      890,
      null,
      "thoi-trang-nu"
    ),
    p(
      "Nồi chiên không dầu Philips 4.1L",
      "noi-chien-khong-dau-philips",
      "Công nghệ Rapid Air, dễ vệ sinh.",
      1990000,
      2490000,
      4.8,
      3400,
      15000,
      "Bán chạy",
      "nha-cua-doi-song"
    ),
    p(
      "Bộ chăn ga cotton Amando",
      "bo-chan-ga-cotton-amando",
      "1m6 x 2m, nhiều họa tiết.",
      890000,
      1190000,
      4.6,
      670,
      4500,
      null,
      "nha-cua-doi-song"
    ),
    p(
      "Sách Đắc Nhân Tâm (bìa cứng)",
      "sach-dac-nhan-tam",
      "Bản dịch Nguyễn Hiến Lê.",
      79000,
      120000,
      4.9,
      12000,
      80000,
      null,
      "sach-vpp"
    ),
    p(
      "Bút bi Thiên Long TL-027",
      "but-bi-thien-long-tl027",
      "Hộp 20 cây, mực xanh.",
      45000,
      null,
      4.5,
      560,
      23000,
      null,
      "sach-vpp"
    ),
    p(
      "Serum Vitamin C The Ordinary",
      "serum-vitamin-c-the-ordinary",
      "Làm sáng da, 30ml.",
      320000,
      420000,
      4.7,
      2100,
      12000,
      "-24%",
      "lam-dep-suc-khoe"
    ),
    p(
      "Kem chống nắng La Roche-Posay",
      "kem-chong-nang-la-roche-posay",
      "SPF 50+, không nhờn.",
      395000,
      495000,
      4.8,
      5600,
      18000,
      "Hàng hiệu",
      "lam-dep-suc-khoe"
    ),
    p(
      "Giày chạy bộ Nike Revolution 6",
      "giay-chay-bo-nike-revolution-6",
      "Đệm êm, size đủ.",
      1890000,
      2290000,
      4.6,
      890,
      5600,
      null,
      "the-thao-da-ngoai"
    ),
    p(
      "Lều cắm trại 4 người Naturehike",
      "leu-cam-trai-4-nguoi",
      "Chống nước, gọn nhẹ.",
      2490000,
      2990000,
      4.5,
      230,
      890,
      null,
      "the-thao-da-ngoai"
    ),
  ];

  for (const x of products) {
    const cid = createdCats[x.categoryId];
    await prisma.product.create({
      data: {
        name: x.name,
        slug: x.slug,
        description: x.description,
        price: x.price,
        listPrice: x.listPrice,
        image: `https://picsum.photos/seed/${encodeURIComponent(x.slug)}/280/280`,
        rating: x.rating,
        reviewCount: x.reviewCount,
        sold: x.sold,
        badge: x.badge,
        brand: x.brand ?? null,
        tags: x.tags ?? null,
        categoryId: cid,
      },
    });
  }

  console.log("Seed OK:", cats.length, "categories,", products.length, "products");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

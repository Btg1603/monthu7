import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

const router = Router();

const searchQuery = z.object({
  q: z.string().min(1).max(100), // Từ khóa tìm kiếm
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(48).default(20),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  category: z.string().optional(),
  brand: z.string().optional(),
  minRating: z.coerce.number().min(0).max(5).optional(),
  sort: z.enum(["relevance", "price_asc", "price_desc", "newest", "bestseller", "rating"]).default("relevance"),
});

/**
 * @openapi
 * /api/search:
 *   get:
 *     tags: [Search]
 *     summary: Tìm kiếm sản phẩm nâng cao
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: Từ khóa tìm kiếm
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 20 }
 *       - in: query
 *         name: minPrice
 *         description: Giá tối thiểu
 *       - in: query
 *         name: maxPrice
 *         description: Giá tối đa
 *       - in: query
 *         name: category
 *         description: Slug danh mục
 *       - in: query
 *         name: brand
 *         description: Thương hiệu
 *       - in: query
 *         name: minRating
 *         description: Đánh giá tối thiểu (0-5)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [relevance, price_asc, price_desc, newest, bestseller, rating]
 *     responses:
 *       200:
 *         description: Tìm kiếm thành công
 *       400:
 *         description: Query không hợp lệ
 */
router.get("/", async (req, res) => {
  const parsed = searchQuery.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: "Query không hợp lệ", details: parsed.error.flatten() });
    return;
  }

  const { q, page, limit, minPrice, maxPrice, category, brand, minRating, sort } = parsed.data;
  const skip = (page - 1) * limit;

  // Xây dựng điều kiện where
  const where: any = {
    AND: [
      // Tìm kiếm full-text trong name, description, brand, tags
      {
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
          { brand: { contains: q, mode: "insensitive" } },
          { tags: { contains: q, mode: "insensitive" } },
        ],
      },
    ],
  };

  // Thêm bộ lọc
  if (minPrice !== undefined || maxPrice !== undefined) {
    where.AND.push({
      price: {
        ...(minPrice !== undefined && { gte: minPrice }),
        ...(maxPrice !== undefined && { lte: maxPrice }),
      },
    });
  }

  if (category) {
    where.AND.push({
      category: { slug: category },
    });
  }

  if (brand) {
    where.AND.push({
      brand: { contains: brand, mode: "insensitive" },
    });
  }

  if (minRating !== undefined) {
    where.AND.push({
      rating: { gte: minRating },
    });
  }

  // Xây dựng orderBy
  let orderBy: any;
  switch (sort) {
    case "price_asc":
      orderBy = { price: "asc" };
      break;
    case "price_desc":
      orderBy = { price: "desc" };
      break;
    case "newest":
      orderBy = { createdAt: "desc" };
      break;
    case "bestseller":
      orderBy = { sold: "desc" };
      break;
    case "rating":
      orderBy = { rating: "desc" };
      break;
    case "relevance":
    default:
      // Ưu tiên sản phẩm có tên chứa query, sau đó theo số lượng bán
      orderBy = [
        { sold: "desc" },
        { rating: "desc" },
      ];
      break;
  }

  try {
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          category: true,
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.product.count({ where }),
    ]);

    res.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      query: { q, filters: { minPrice, maxPrice, category, brand, minRating }, sort },
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
});

/**
 * @openapi
 * /api/search/suggestions:
 *   get:
 *     tags: [Search]
 *     summary: Gợi ý tìm kiếm (autocomplete)
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: Từ khóa đang nhập
 *     responses:
 *       200:
 *         description: Danh sách gợi ý thành công
 *       400:
 *         description: Query không hợp lệ
 */
router.get("/suggestions", async (req, res) => {
  const q = z.string().min(1).max(50).safeParse(req.query.q);
  if (!q.success) {
    res.status(400).json({ error: "Query không hợp lệ" });
    return;
  }

  try {
    const queryTerm = q.data.trim();
    
    // Đơn giản hóa: chỉ tìm những sản phẩm có tên chứa từ khóa
    const suggestions = await prisma.product.findMany({
      where: {
        name: {
          contains: queryTerm,
        },
      },
      select: {
        name: true,
      },
      take: 10,
      orderBy: {
        sold: "desc", // Ưu tiên sản phẩm bán chạy
      },
    });

    res.json({
      suggestions: suggestions.map(s => s.name),
    });
  } catch (error) {
    console.error("Suggestions error:", error);
    res.status(500).json({ error: "Lỗi server" });
  }
});

export default router;
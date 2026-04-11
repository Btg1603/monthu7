import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

/**
 * @openapi
 * /api/categories:
 *   get:
 *     tags: [Categories]
 *     summary: Danh sách danh mục
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", async (_req, res) => {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { products: true } } },
  });
  res.json(
    categories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      icon: c.icon,
      productCount: c._count.products,
    }))
  );
});

/**
 * @openapi
 * /api/categories/{slug}:
 *   get:
 *     tags: [Categories]
 *     summary: Chi tiết danh mục theo slug
 */
router.get("/:slug", async (req, res) => {
  const cat = await prisma.category.findUnique({
    where: { slug: req.params.slug },
    include: {
      products: { take: 24, orderBy: { sold: "desc" } },
    },
  });
  if (!cat) {
    res.status(404).json({ error: "Không tìm thấy danh mục" });
    return;
  }
  res.json(cat);
});

export default router;

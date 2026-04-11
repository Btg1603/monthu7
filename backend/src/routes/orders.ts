import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { authRequired } from "../middleware/auth.js";

const router = Router();
router.use(authRequired);

const checkoutSchema = z.object({
  address: z.string().min(5),
  phone: z.string().min(8),
});

/**
 * @openapi
 * /api/orders:
 *   get:
 *     tags: [Orders]
 *     summary: Lịch sử đơn hàng
 *     security: [{ bearerAuth: [] }]
 */
router.get("/", async (req, res) => {
  const orders = await prisma.order.findMany({
    where: { userId: req.user!.userId },
    orderBy: { createdAt: "desc" },
    include: {
      items: { include: { product: { select: { id: true, name: true, slug: true, image: true } } } },
    },
  });
  res.json(orders);
});

/**
 * @openapi
 * /api/orders/checkout:
 *   post:
 *     tags: [Orders]
 *     summary: Đặt hàng từ giỏ hiện tại
 *     security: [{ bearerAuth: [] }]
 */
router.post("/checkout", async (req, res) => {
  const parsed = checkoutSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Validation", details: parsed.error.flatten() });
    return;
  }
  const { address, phone } = parsed.data;
  const cartItems = await prisma.cartItem.findMany({
    where: { userId: req.user!.userId },
    include: { product: true },
  });
  if (cartItems.length === 0) {
    res.status(400).json({ error: "Giỏ hàng trống" });
    return;
  }
  const total = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const order = await prisma.$transaction(async (tx) => {
    const o = await tx.order.create({
      data: {
        userId: req.user!.userId,
        total,
        address,
        phone,
        status: "confirmed",
        items: {
          create: cartItems.map((ci) => ({
            productId: ci.productId,
            quantity: ci.quantity,
            price: ci.product.price,
          })),
        },
      },
    });
    await tx.cartItem.deleteMany({ where: { userId: req.user!.userId } });
    return o;
  });

  const full = await prisma.order.findUnique({
    where: { id: order.id },
    include: { items: { include: { product: true } } },
  });
  res.status(201).json(full);
});

/**
 * @openapi
 * /api/orders/{id}:
 *   get:
 *     tags: [Orders]
 *     summary: Chi tiết đơn hàng
 *     security: [{ bearerAuth: [] }]
 */
router.get("/:id", async (req, res) => {
  const order = await prisma.order.findFirst({
    where: { id: req.params.id, userId: req.user!.userId },
    include: {
      items: { include: { product: true } },
    },
  });
  if (!order) {
    res.status(404).json({ error: "Không tìm thấy đơn hàng" });
    return;
  }
  res.json(order);
});

export default router;

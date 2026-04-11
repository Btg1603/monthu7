import "dotenv/config";
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";
import authRoutes from "./routes/auth.js";
import categoriesRoutes from "./routes/categories.js";
import productsRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import ordersRoutes from "./routes/orders.js";
import userRoutes from "./routes/user.js";
import searchRoutes from "./routes/search.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

/**
 * @openapi
 * /health:
 *   get:
 *     tags: [System]
 *     summary: Kiểm tra server
 */
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "tiki-clone-api", time: new Date().toISOString() });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customSiteTitle: "TIKI Clone API" }));
app.get("/openapi.json", (_req, res) => res.json(swaggerSpec));

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/user", userRoutes);
app.use("/api/search", searchRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`API http://localhost:${PORT}`);
  console.log(`Swagger http://localhost:${PORT}/api-docs`);
});

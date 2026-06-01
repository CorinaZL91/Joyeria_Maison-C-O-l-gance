import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

/* Rutas */
import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import alertRoutes from "./routes/alert.routes.js";

import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

app.use(morgan("common"));

app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL!, "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Bienvenido a API Maison C&O Élégance",
    version: "1.0.0",
    routes: [
      {
        endpoint: "/auth",
        method: "POST/GET",
        description: "Autenticación de usuarios (registro, login y perfil)",
      },
      {
        endpoint: "/categories",
        method: "GET/POST/PUT/DELETE",
        description: "Gestión de categorías",
      },
      {
        endpoint: "/products",
        method: "GET/POST/PUT/DELETE",
        description: "Gestión de productos",
      },
      {
        endpoint: "/cart",
        method: "GET/POST/PUT/DELETE",
        description: "Gestión del carrito de compras",
      },
      {
        endpoint: "/orders",
        method: "GET/POST/PUT",
        description: "Gestión de pedidos",
      },
      {
        endpoint: "/alerts",
        method: "GET",
        description: "Consulta de alertas de stock",
      },
    ],
  });
});

app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/alerts", alertRoutes);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

console.log("Iniciando servidor...");

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server corriendo en el puerto ${port}`);
  });
}

export default app;

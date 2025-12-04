import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

// Merge local and remote origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://auth-frontend-blond.vercel.app",
  "https://auth-backend-g8wo.onrender.com", // backend itself if needed
  "https://your-frontend.vercel.app"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./db.js";

import studentRoutes from "./routes/student.js";
import courseRoutes from "./routes/courseRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import examRoutes from "./routes/examRoutes.js";
import evaluationRoutes from "./routes/evaluationRoutes.js";
import markMatrixRoutes from "./routes/markMatrixRoutes.js";
import studentController from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import courseMappingRoutes from "./routes/coursemappingRoutes.js";
import classRoutes from "./routes/classroutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import teacherlogin from "./routes/teacherloginRoutes.js";
import uploadscriptRoutes from "./routes/uploadscriptRoutes.js";
import referenceAnswerRoutes from "./routes/referenceAnswerRoutes.js";
import courseclassRoutes from "./routes/courseclassRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   CORS
========================= */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://smartautomatedgradingengine.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow Postman / server-to-server / same-origin requests with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS not allowed for origin: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

/* =========================
   BODY PARSERS
========================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   HEALTH / ROOT
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend is live",
    status: "ok",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Server healthy",
  });
});

/* =========================
   DB + ROUTES + SERVER START
========================= */
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected");

    // Routes
    app.use("/api/courses", courseRoutes);
    app.use("/api/students", studentRoutes);
    app.use("/api/students", studentController); // keep only if both files are needed
    app.use("/api/upload", uploadRoutes);
    app.use("/api/uploadscript", uploadscriptRoutes);
    app.use("/api/exams", examRoutes);
    app.use("/api/evaluation", evaluationRoutes);
    app.use("/api/markmatrix", markMatrixRoutes);
    app.use("/api/teachers", teacherRoutes);
    app.use("/api/course-mapping", courseMappingRoutes);
    app.use("/api/classes", classRoutes);
    app.use("/api/admin", adminRoutes);
    app.use("/api/teacherlogin", teacherlogin);
    app.use("/api/reference", referenceAnswerRoutes);
    app.use("/api/courseclass", courseclassRoutes);

    // 404 handler for unknown API routes
    app.use("/api", (req, res) => {
      return res.status(404).json({
        error: `API route not found: ${req.method} ${req.originalUrl}`,
      });
    });

    // General 404
    app.use((req, res) => {
      return res.status(404).json({
        error: `Route not found: ${req.method} ${req.originalUrl}`,
      });
    });

    // Global error handler
    app.use((err, req, res, next) => {
      console.error("❌ Server error:", err.stack || err.message || err);

      if (err.message && err.message.includes("CORS")) {
        return res.status(403).json({ error: err.message });
      }

      return res.status(500).json({
        error: "Internal server error",
        details: err.message,
      });
    });

    app.listen(PORT, () => {
      console.log(`✅ Backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

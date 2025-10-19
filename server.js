
// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// POST /api/leads — this is what Zapier will call
app.post("/api/leads", (req, res) => {
  console.log("New lead received:", req.body);
  res.json({ status: "ok", data: req.body });
});

// Root route just to test
app.get("/", (req, res) => {
  res.send("Listo Qasa API is running ✅");
});

// Listen (Vercel handles this automatically)
export default app;

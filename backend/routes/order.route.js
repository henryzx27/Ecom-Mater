import express from "express";
import { createOrder } from "../controllers/order.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/", protectRoute, createOrder);
export default router;

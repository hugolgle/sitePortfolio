import express from "express";
const router = express.Router();
import { getXpPro } from "../controllers/xpPro.controller.js";

router.get("/", getXpPro);

export default router;

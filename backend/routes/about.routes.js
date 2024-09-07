import express from "express";
const router = express.Router();
import { getAbout } from "../controllers/about.controller.js";

router.get("/", getAbout);

export default router;

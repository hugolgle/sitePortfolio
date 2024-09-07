import express from "express";
const router = express.Router();
import { getCareers } from "../controllers/careers.controller.js";

router.get("/", getCareers);

export default router;

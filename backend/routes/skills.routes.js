import express from "express";
const router = express.Router();
import { getSkills } from "../controllers/skills.controller.js";

router.get("/", getSkills);

export default router;

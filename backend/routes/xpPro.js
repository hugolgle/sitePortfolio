import express from 'express';
import { getXpPros } from '../controllers/xpPro.js';

const router = express.Router();

router.get("/", getXpPros);

export default router;

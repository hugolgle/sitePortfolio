import express from 'express';
import { getParcours } from '../controllers/parcours.js';

const router = express.Router();

router.get("/", getParcours);

export default router;

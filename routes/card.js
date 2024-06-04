import { Router } from 'express';
import { createCard, getCards } from '../controllers/card.js';

const router = Router();

router.get('/', getCards);
router.post('/', createCard);

export default router;

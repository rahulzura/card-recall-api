import { Router } from 'express';

import cardRouter from './card.js';

const router = Router();

router.get('/health', (req, res) => {
  res.send("ok");
});

router.use('/cards', cardRouter);

export default router;

import express from 'express';

const router = express.Router();
router.get('/create', (req, res, next) => {
    res.status(200).json('Created');
});

export default router;

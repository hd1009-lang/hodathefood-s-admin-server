import express from 'express';

const router = express.Router();
router.get('/login', (req, res, next) => {
    res.status(200).json('Member');
});
export default router;

import express from 'express';
import MemberController from '../components/Member.controller';
import asyncWrapper from '../utils/wrapper';
const router = express.Router();
router.get('/login', asyncWrapper(MemberController.login));
export default router;

import express from 'express';
import MemberController from '../components/member.controller';
import asyncWrapper from '../utils/wrapper';
const router = express.Router();
router.post('/create', asyncWrapper(MemberController.create));
router.get('/list', asyncWrapper(MemberController.getList));
export default router;

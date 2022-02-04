import express from 'express';
import RoleController from '../components/role.controller';
import asyncWrapper from '../utils/wrapper';

const router = express.Router();
router.post('/create', asyncWrapper(RoleController.created));

export default router;

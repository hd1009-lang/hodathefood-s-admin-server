import express from 'express';
import Member from './member.route';
import Role from './role.route';
const router = express.Router();

const routes = [
    {
        path: '/members',
        route: Member,
    },
    {
        path: '/roles',
        route: Role,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;

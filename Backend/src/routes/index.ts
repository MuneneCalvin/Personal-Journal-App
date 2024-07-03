import { Router } from 'express';
import userRoutes from './user.routes';
import journalRoutes from './journal.routes';

const router = Router();

const defaultRoutes = [
    { path: '/users', route: userRoutes },
    { path: '/journals', route: journalRoutes },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
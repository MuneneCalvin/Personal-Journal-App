import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import journalRoutes from './journal.routes';

const router = Router();

const defaultRoutes = [
    { path: '/auth', route: authRoutes },
    { path: '/users', route: userRoutes },
    { path: '/journals', route: journalRoutes },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
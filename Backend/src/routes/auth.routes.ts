import { Router } from 'express';
import authController from '../controllers/auth.controller';
import { authValidation } from '../validations';

const router = Router();

router.post('/register', authValidation.register, authController.register);
router.post('/login', authValidation.login, authController.login);

export default router;
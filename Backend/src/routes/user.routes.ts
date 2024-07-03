import { Router } from 'express';
import userController from '../controllers/user.controller';
import verifyToken from '../middlewares/verifyToken';

const router = Router();
router.get('/all', verifyToken, userController.getAllUsers);
router.get('/:userId', verifyToken, userController.getUserById);
router.put('/update/:userId', verifyToken, userController.updateUserById);
router.delete('/delete/:userId', verifyToken, userController.deleteUser);

export default router;
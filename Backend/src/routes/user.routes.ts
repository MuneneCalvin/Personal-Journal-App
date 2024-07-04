import { Router } from 'express';
import userController from '../controllers/user.controller';
// import verifyToken from '../middlewares/verifyToken';

const router = Router();
router.get('/all', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.put('/update/:userId', userController.updateUserById);
router.delete('/delete/:userId', userController.deleteUser);

export default router;
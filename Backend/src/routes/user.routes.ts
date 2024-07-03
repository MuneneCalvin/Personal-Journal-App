import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update/:userId', userController.updateUserById);
router.delete('/delete/:userId', userController.deleteUser);
router.get('/profile/:userId', userController.getprofile);
router.get('/logout', userController.logoutUser);

export default router;
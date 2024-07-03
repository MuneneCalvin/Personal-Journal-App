import { Request, Response } from 'express';
import authService from '../services/auth.service';

class AuthController {
    public async register(req: Request, res: Response) {
        try {
            const user = await authService.registerUser(req.body);
            res.status(200).json({ success: true, message: "User registered", user });
        } catch (error) {
            res.status(400).json({ message: 'Failed to register user', details: error });
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await authService.loginUser(email, password);
            res.status(200).json({ success: true, message: "User logged in", token });
        } catch (error) {
            res.status(400).json({ message: 'Failed to login user', details: error });
        }
    }
}

export default new AuthController();
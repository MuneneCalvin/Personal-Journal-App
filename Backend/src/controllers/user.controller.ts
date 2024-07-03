import { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
    public async registerUser(req: Request, res: Response) {
        try {
            const user = await userService.registerUser(req.body);
            res.status(201).json({ success: true, message: "User Registered Successfully!!!", user });
        } catch (error) {
            res.status(400).json({ message: 'Failed to Register user', details: error });
        }
    }

    public async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await userService.loginUser(email, password);
            res.status(200).json({ success: true, message: "User Logged In Successfully!!!", token });
        } catch (error) {
            res.status(400).json({ message: 'Failed to Login user', details: error });
        }
    }

    public async updateUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const updatedUser = await userService.updateUserById(userId, req.body);
            res.status(200).json({ success: true, message: "User Updated", updatedUser });
        } catch (error) {
            res.status(400).json({ message: 'Failed to update user', details: error });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const deletedUser = await userService.deleteUser(userId);
            res.status(200).json({ success: true, message: "User Deleted", });
        } catch (error) {
            res.status(400).json({ message: 'Failed to delete user', details: error });
        }
    }

    public async getprofile(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const user = await userService.getprofile(userId);
            res.status(200).json({ success: true, message: "User Profile", user });
        } catch (error) {
            res.status(400).json({ message: 'Failed to get user profile', details: error });
        }
    }

    public async logoutUser(req: Request, res: Response) {
        try {
            const response = await userService.logoutUser();
            res.status(200).json({ success: true, message: response});
        } catch (error) {
            res.status(400).json({ message: 'Failed to logout user', details: error });
        }
    }
}

export default new UserController();
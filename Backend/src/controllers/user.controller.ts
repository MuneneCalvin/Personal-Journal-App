import { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
    public async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({ success: true, message: "Users fetched", data: users });
        } catch (error) {
            res.status(400).json({ message: 'Failed to fetch users', details: error });
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ success: true, message: "User fetched", data:user });
        } catch (error) {
            res.status(400).json({ message: 'Failed to fetch user', details: error });
        }
    }

    public async updateUserById(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const updatedUser = await userService.updateUserById(userId, req.body);
            res.status(200).json({ success: true, message: "User Updated", data: updatedUser });
        } catch (error) {
            res.status(400).json({ message: 'Failed to update user', details: error });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const deletedUser = await userService.deleteUser(userId);
            res.status(200).json({ success: true, message: "User Deleted", data: deletedUser});
        } catch (error) {
            res.status(400).json({ message: 'Failed to delete user', details: error });
        }
    }
}

export default new UserController();
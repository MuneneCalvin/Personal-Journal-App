import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/users.model';

dotenv.config();

class UserService {
    public async registerUser(user: any) {
        const newUser = await User.create(user);
        const hashedPassword = bcrypt.hashSync(newUser.password, 10);
        newUser.password = hashedPassword;

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: 86400 });

        return { user: newUser, token };
    }

    public async loginUser(email: string, password: string) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return 'User not found';
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return 'Invalid Credentials';
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: 86400, // 24 hours
        });

        return { token };
    }

    public async updateUserById(userId: string, user: any) {
        const updatedUser = await User.update(user, { where: { id: userId } });
        return updatedUser;
    }

    public async deleteUser(userId: string) {
        const deletedUser = await User.destroy({ where: { id: userId } });
        return deletedUser;
    }

    public async getprofile (userId: string) {
        const user = await User.findOne({ where: { id: userId } });
        return user;
    }

    public async logoutUser() {
        // This is a placeholder for now
        return 'User logged out';
    }
}

export default new UserService();

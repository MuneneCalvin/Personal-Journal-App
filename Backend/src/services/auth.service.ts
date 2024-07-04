import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/users.model';

dotenv.config();

class AuthService {
    public async registerUser(user: any) {
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;

        const newUser = await User.create(user);

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

        return token;
    }

    public async logoutUser() {
        // This is a placeholder for now
        return 'User logged out';
    }
}

export default new AuthService();

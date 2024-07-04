import User from '../models/users.model';

class UserService {
    public async getAllUsers() {
        const users = await User.findAll();
        if (!users) {
            return "No users found"
        }
        return users;
    }

    public async getUserById(userId: string) {
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return "User not found"
        }
        return user;
    }

    public async updateUserById(userId: string, user: any) {
        const updatedUser = await User.update(user, { where: { id: userId } });
        return updatedUser;
    }

    public async deleteUser(userId: string) {
        const deletedUser = await User.destroy({ where: { id: userId } });
        return deletedUser;
    }
}

export default new UserService();

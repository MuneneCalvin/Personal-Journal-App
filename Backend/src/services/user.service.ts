import User from '../models/users.model';

class UserService {
    public async getAllUsers() {
        const users = await User.findAll();
        return users;
    }

    public async getUserById(userId: string) {
        const user = await User.findOne({ where: { id: userId } });
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

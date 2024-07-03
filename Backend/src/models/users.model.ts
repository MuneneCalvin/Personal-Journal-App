import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';

class User extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    lastname: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: 'users',
    sequelize,
    timestamps: true,
});

export default User;

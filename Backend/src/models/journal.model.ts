import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/database';

class Journal extends Model {
    public id!: number;
    public title!: string;
    public content!: string;
    public category!: string;
    public userId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Journal.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    content: {
        type: new DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    }
}, {
    tableName: 'journals',
    sequelize,
    timestamps: true,
});

export default Journal;

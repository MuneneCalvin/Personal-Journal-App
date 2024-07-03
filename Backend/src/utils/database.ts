import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:password@localhost:3306/journal_app');

export default sequelize;

import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import logger from './logger';
dotenv.config();


class Database {
    public sequelize: Sequelize | undefined;

    private POSTGRES_DB = process.env.DB_NAME as string;
    private POSTGRES_HOST = process.env.DB_HOST as string;
    private POSTGRES_PORT = process.env.DB_PORT as unknown as number;
    private POSTGRES_USER = process.env.DB_USER as unknown as string;
    private POSTGRES_PASSWORD = process.env.DB_PASSWORD as unknown as string;

    constructor() {
        this.connectToPostgreSQL();
    }


    private async connectToPostgreSQL() {
        this.sequelize = new Sequelize({
        database: this.POSTGRES_DB,
        username: this.POSTGRES_USER,
        password: this.POSTGRES_PASSWORD,
        host: this.POSTGRES_HOST,
        port: this.POSTGRES_PORT,
        dialect: "postgres",
        });

        await this.sequelize
        .authenticate()
        .then(() => {
            logger.info(" ✅ Connected to Database.");
        })
        .catch((err) => {
            logger.error(" ❌ Unable to connect to the PostgreSQL database", err);
        });
    }
}

export default Database;
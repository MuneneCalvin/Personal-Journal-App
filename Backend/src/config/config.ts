import dotenv from 'dotenv';
import joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = joi.object({
    NODE_ENV: joi.string().valid('production', 'staging', 'development', 'test', 'preprod').required(),
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required().description('Database URL'),
}).unknown()

const { value: envVars, error } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    databaseURL: envVars.DATABASE_URL,
};

export default config;
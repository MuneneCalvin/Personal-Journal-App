import dotenv from 'dotenv';
import joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = joi.object({
    PORT: joi.number().default(3000),
    NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
}).unknown()

const { value: envVars, error } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    port: envVars.PORT,
    env: envVars.NODE_ENV,
};

export default config;
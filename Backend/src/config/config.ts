import dotenv from 'dotenv';
import joi from 'joi';
import path from 'path';

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(4200),
    NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
    // MONGODB_URL: joi.string().required().description('Mongo DB URL'),
    // JWT_SECRET: joi.string().required().description('JWT Secret Key'),
    // JWT_EXPIRATION: joi.string().required().description('JWT Expiration Time'),
})
    .unknown()
    .required();

const { value: envVars, error } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
    port: envVars.PORT,
    nodeEnv: envVars.NODE_ENV,
    mongodbUrl: envVars.MONGODB_URL,
    jwtSecret: envVars.JWT_SECRET,
    jwtExpiration: envVars.JWT_EXPIRATION,
    saltRounds: envVars.SALT_ROUNDS,
    sendgridApiKey: envVars.SENDGRID_API_KEY,
    emailFrom: envVars.EMAIL_FROM,
    emailTo: envVars.EMAIL_TO,
    emailSubject: envVars.EMAIL_SUBJECT,
    emailText: envVars.EMAIL_TEXT,
};

export default config;
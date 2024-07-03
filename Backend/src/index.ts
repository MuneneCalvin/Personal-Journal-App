import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import cors from 'cors';
import morgan from './config/morgan';
import config  from './config/config';
import logger from './config/logger';
import Database from './utils/database';
import Routes from './routes';

dotenv.config();

const app = express();

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

app.use(bodyParser.json());
// app.use(cors());

// Sync the database
Database.sync({ force: false })
    .then(() => {
        logger.info('✅ Connected to Database. 🚀');
    })
    .catch((error) => {
        logger.error(' ❌ Error connecting to the database: ');
    });

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Journal App API! 😉👋');
});

app.use(Routes);

// Start the server
app.listen(config.port, () => {
    logger.info(`Listening to Port ${config.port} 🚀🚀`);
});


import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import cors from 'cors';
import config  from './config/config';
import logger from './config/logger';

dotenv.config();

const app = express();

app.use(bodyParser.json());
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Journal App API! 😉👋');
});

app.listen(config.port, () => {
    logger.info(`Listening to Port ${config.port} 🚀🚀`);
});


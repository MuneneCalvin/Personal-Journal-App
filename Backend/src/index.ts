import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import cors from 'cors';
import config  from './config/config';
import logger from './config/logger';
// import Database from './config/database';

dotenv.config();

const app = express();

app.use(bodyParser.json());
// app.use(cors());

// Sync the database
// const db = new Database();
// db.sequelize?.sync();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Journal App API! 😉👋');
});

// Start the server
app.listen(config.port, () => {
    logger.info(`Listening to Port ${config.port} 🚀🚀`);
});


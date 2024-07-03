import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../config/logger';
import Users from '../models/users.model';


const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const token = header.split(' ')[1];
    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
        if (Date.now() >= decoded.exp * 1000) {
            logger.info(`Token Expired`);
            return res.status(401).send({ message: 'Token expired.' });
        }

        const user = await Users.findOne({ where: { id: decoded.id } });
        req.body.user = user;
        next();
    } catch (error) {
        logger.error(`Unauthorized: ${error}`);
        return res.status(401).send({ message: 'Unauthorized' });
    }
};


export default verifyToken;
import { Router } from 'express';
import journalController from '../controllers/journal.controller';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/', verifyToken, journalController.createJournal);
router.get('/', verifyToken, journalController.getAllJournals);
router.get('/:journalId', verifyToken, journalController.getJournalById);
router.get('/category/:category', verifyToken, journalController.getJournalsByCategory);
router.put('/:journalId', verifyToken, journalController.updateJournalById);
router.delete('/:journalId', verifyToken, journalController.deleteJournalById);

export default router;
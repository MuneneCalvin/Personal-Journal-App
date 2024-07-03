import { Router } from 'express';
import journalController from '../controllers/journal.controller';

const router = Router();

router.post('/', journalController.createJournal);
router.get('/', journalController.getAllJournals);
router.get('/:journalId', journalController.getJournalById);
router.get('/category/:category', journalController.getJournalsByCategory);
router.put('/:journalId', journalController.updateJournalById);
router.delete('/:journalId', journalController.deleteJournalById);

export default router;
import { Router } from 'express';
import journalController from '../controllers/journal.controller';
import { journalValidation } from '../validations';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router
    .route('/')
    .post(verifyToken, journalValidation.create, journalController.createJournal)
    .get(verifyToken, journalValidation.getJournals, journalController.getAllJournals);

router.get('/user', verifyToken, journalController.getAllJournalsByUser);
router.get('/:journalId', verifyToken, journalController.getJournalById);
router.get('/category/:category', verifyToken, journalController.getJournalsByCategory);
router.get('/summary', verifyToken, journalController.getSummary);
router.put('/:journalId', verifyToken, journalController.updateJournalById);
router.delete('/:journalId', verifyToken, journalController.deleteJournalById);

export default router;
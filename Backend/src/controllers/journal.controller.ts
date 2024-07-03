import { Request, Response } from 'express';
import journalService from '../services/journal.service';

class JournalController {
    public async createJournal(req: Request, res: Response) {
        try {
            const { title, content, category } = req.body;
            const userId = req.app.locals.user.id;
            const journal = await journalService.create(title, content, category, userId);
            res.status(201).json({ success: true, message: "Journal Created Successfully!!!", journal });
        } catch (error) {
            res.status(400).json({ message: 'Failed to create journal', details: error });
        }
    }

    public async getAllJournals(req: Request, res: Response) {
        try {
            const userId = req.app.locals.user.id;
            const journals = await journalService.getAllJournals(userId);
            res.status(200).json({ success: true, message: "All Journals", journals });
        } catch (error) {
            res.status(400).json({ message: 'Failed to get journals', details: error });
        }
    }

    public async getJournalById(req: Request, res: Response) {
        try {
            const { journalId } = req.params;
            const userId = req.app.locals.user.id;
            const journal = await journalService.getJournalById(Number(journalId), userId);
            res.status(200).json({ success: true, message: "Journal", journal });
        } catch (error) {
            res.status(400).json({ message: 'Failed to get journal', details: error });
        }
    }

    public async getJournalsByCategory(req: Request, res: Response) {
        try {
            const { category } = req.params;
            const userId = req.app.locals.user.id;
            const journals = await journalService.getJournalsByCategory(category, userId);
            res.status(200).json({ success: true, message: "Journals by Category", journals });
        } catch (error) {
            res.status(400).json({ message: 'Failed to get journals by category', details: error });
        }
    }

    public async updateJournalById(req: Request, res: Response) {
        try {
            const { journalId } = req.params;
            const { title, content, category } = req.body;
            const userId = req.app.locals.user.id;
            const updatedJournal = await journalService.updateJournalById(Number(journalId), title, content, category, userId);
            res.status(200).json({ success: true, message: "Journal Updated", updatedJournal });
        } catch (error) {
            res.status(400).json({ message: 'Failed to update journal', details: error });
        }
    }

    public async deleteJournalById(req: Request, res: Response) {
        try {
            const { journalId } = req.params;
            const userId = req.app.locals.user.id;
            const deletedJournal = await journalService.deleteJournalById(Number(journalId), userId);
            res.status(200).json({ success: true, message: "Journal Deleted", });
        } catch (error) {
            res.status(400).json({ message: 'Failed to delete journal', details: error });
        }
    }
}

export default new JournalController();
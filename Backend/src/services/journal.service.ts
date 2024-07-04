import Journal from '../models/journal.model';

class JournalService {
    public async create(title: string, content: string, category: string, userId: number) {
        return await Journal.create({ title, content, category, userId });
    }

    public async getall() {
        const result = await Journal.findAll();
        if (result.length === 0) {
            return "No Journals Found";
        }

        return result;
    }

    public async getAllJournalsByUser(userId: number) {
        const result = await Journal.findAll({ where: { userId } });
        if (result.length === 0) {
            return "No Journals found for the selected user";
        }

        return result;
    }

    public async getJournalById(journalId: number, userId: number) {
        const result = await Journal.findOne({ where: { id: journalId, userId } });
        if (!result) {
            return "Journal not found";
        }

        return result;
    }

    public async getJournalsByCategory(category: string, userId: number) {
        const result = await Journal.findAll({ where: { category, userId } });
        if (result.length === 0) {
            return "No Journals found for the selected category";
        }

        return result;
    }

    public async getSummary(userId: number, startDate: Date, endDate: Date) {
        const result = await Journal.findAll({ where: { userId, createdAt: { $between: [startDate, endDate] } } });
        if (result.length === 0) {
            return "No Journals found for the selected date range";
        }

        return result;
    }

    public async updateJournalById(journalId: number, title: string, content: string, category: string, userId: number) {
        return await Journal.update({ title, content, category }, { where: { id: journalId, userId } });
    }

    public async deleteJournalById(journalId: number, userId: number) {
        return await Journal.destroy({ where: { id: journalId, userId } });
    }

    public async deleteAllJournals(userId: number) {
        return await Journal.destroy({ where: { userId } });
    }
}

export default new JournalService();

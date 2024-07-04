import Journal from '../models/journal.model';

class JournalService {
    public async create(title: string, content: string, category: string, userId: number) {
        return await Journal.create({ title, content, category, userId });
    }

    public async getAllJournals(userId: number) {
        return await Journal.findAll({ where: { userId } });
    }

    public async getJournalById(journalId: number, userId: number) {
        return await Journal.findOne({ where: { id: journalId, userId } });
    }

    public async getJournalsByCategory(category: string, userId: number) {
        return await Journal.findAll({ where: { category, userId } });
    }

    public async getSummary(userId: number, startDate: Date, endDate: Date) {
        return await Journal.findAll({
            where: {
                userId,
                createdAt: {
                    $between: [startDate, endDate]
                }
            }
        });
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

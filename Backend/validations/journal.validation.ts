import Joi from 'joi';

const createJournal = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }),
};

const getJournals = {
    query: Joi.object().keys({
        category: Joi.string(),
    }),
};

const getJournal = {
    params: Joi.object().keys({
        journalId: Joi.string().required(),
    }),
};

const updateJournal = {
    params: Joi.object().keys({
        journalId: Joi.required(),
    }),
    body: Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }),
};

const deleteJournal = {
    params: Joi.object().keys({
        journalId: Joi.string().required(),
    }),
};


export default {
    createJournal,
    getJournals,
    getJournal,
    updateJournal,
    deleteJournal,
};
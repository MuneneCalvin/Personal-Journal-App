import Joi from 'joi';


const createUser = {
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
    }),
};

const getUser = {
    params: Joi.object().keys({
        userId: Joi.string().required(),
    }),
};

const updateUser = {
    params: Joi.object().keys({
        userId: Joi.required(),
    }),
    body: Joi.object().keys({
        email: Joi.string(),
        password: Joi.string(),
        name: Joi.string(),
    }),
};

const deleteUser = {
    params: Joi.object().keys({
        userId: Joi.string().required(),
    }),
};

export default {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
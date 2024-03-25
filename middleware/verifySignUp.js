const knex = require('../Database/knex');
const User = require('../Modules/user');


checkDuplicateEmail = async (req, res, next) => {
    const user = await knex('user').where('email', req.body.email).first();

    if (user) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    next();
};

checkDuplicateBook = async (req, res, next) => {
    const book = await knex('book').where('ISBN', req.body.ISBN).first();

    if (book) {
        return res.status(400).json({ message: 'Book already exists' });
    }

    next();
}

const verifySignUp = {
    checkDuplicateEmail,
    checkDuplicateBook
};

module.exports = verifySignUp;
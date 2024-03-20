const knex = require('../Database/knex.js');

class Borrower {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    static async getBorrowers() {
        return await knex('borrower').select('*');
    }

    static async updateBorrowerName(email, newName) {
        return await knex('borrower').where('email', email).update({ name: newName });
    }

    static async deleteBorrower(email) {
        return await knex('borrower').where('email', email).del();
    }

    static async getBorrowerByEmail(email) {
        return await knex('borrower').where('email', email).select('*');
    }

    async addBorrowerToDatabase() {
        return await knex('borrower').insert(
            {
                email: this.email,
                name: this.name
            });
    }

    static async returnBook(ISBN, email) {
        return await knex('books_borrowers').where('ISBN', ISBN).andWhere('email', email).del();
    }

    static async borrowBook(ISBN, email) {
        return await knex('books_borrowers').insert(
            {
                ISBN: ISBN,
                email: email
            });
    }
}

module.exports = Borrower;
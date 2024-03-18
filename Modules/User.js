const knex = require('../Database/knex.js');

class Borrower {
    constructor(name, email) {
        this.name = name
        this.email = email

        knex('borrowers').insert([
            {
                name: this.name,
                email: this.email
            }
        ]);
    }

    static async getBorrowers() {
        return await knex('borrowers').select('*');
    }

    static async updateBorrowerName(email, newName) {
        return await knex('borrowers').where('email', email).update({ name: newName });
    }

    static async deleteBorrower(email) {
        return await knex('borrowers').where('email', email).del();
    }

    static async getBorrowerByEmail(email) {
        return await knex('borrowers').where('email', email).select('*');
    }
}

module.exports = Borrower;
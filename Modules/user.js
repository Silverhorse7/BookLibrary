const knex = require('../Database/knex.js');

// class Borrower {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }

//     static async getBorrowers() {
//         return await knex('borrower').select('*');
//     }

//     static async updateBorrowerName(email, newName) {
//         return await knex('borrower').where('email', email).update({ name: newName });
//     }

//     static async deleteBorrower(email) {
//         return await knex('borrower').where('email', email).del();
//     }

//     static async getBorrowerByEmail(email) {
//         return await knex('borrower').where('email', email).select('*');
//     }

//     async addBorrowerToDatabase() {
//         return await knex('borrower').insert(
//             {
//                 email: this.email,
//                 name: this.name
//             });
//     }

//     static async returnBook(ISBN, email) {
//         return await knex('books_borrowers').where('ISBN', ISBN).andWhere('email', email).del();
//     }

//     static async borrowBook(ISBN, email) {
//         return await knex('books_borrowers').insert(
//             {
//                 ISBN: ISBN,
//                 email: email
//             });
//     }
// }

// module.exports = Borrower;


// schema is: username, email, age, role




exports.addUser = async (req) => {
    return await knex('user').insert({
        username: req.username,
        email: req.email,
        age: req.age
    });
};

exports.getUsers = async () => {
    return await knex('user').select('*');
};

exports.getUserByEmail = async (email) => {
    return await knex('user').where('email', email).select('*');
};

exports.updateUserRole = async (email, newRole) => {
    return await knex('user').where('email', email).update({ role: newRole });
};

exports.deleteUser = async (email) => {
    return await knex('user').where('email', email).del();
};

exports.updateUserAge = async (email, newAge) => {
    return await knex('user').where('email', email).update({ age: newAge });
};

exports.updateUserUsername = async (email, newUsername) => {
    return await knex('user').where('email', email).update({ username: newUsername });
};

exports.getUserByUsername = async (username) => {
    return await knex('user').where('username', username).select('*');
};

exports.addWarning = async (email, warning) => {
    // increment warning count
    const user = await knex('user').where('email', email).select('warning_count');
    const warningCount = user[0].warning_count + 1;
    return await knex('user').where('email', email).update({ warning_count: warningCount });
};

exports.getWarningCount = async (email) => {
    return await knex('user').where('email', email).select('warning_count');
};

exports.resetWarningCount = async (email) => {
    return await knex('user').where('email', email).update({ warning_count: 0 });
};

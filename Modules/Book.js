const knex = require('../Database/knex');


exports.addBook = async (book) => {
    return await knex('book').insert({
        ISBN: book.ISBN,
        title: book.title,
        author: book.author,
        available_quantity: book.available_quantity,
        shelf_location: book.shelf_location
    });
};

exports.getBooks = async () => {
    return await knex('book').select('*');
};

exports.getQuantity = async (ISBN) => {
    return await knex('book').where('ISBN', ISBN).select('available_quantity');
};

exports.getBookByISBN = async (ISBN) => {
    return await knex('book').where('ISBN', ISBN).select('*');
};

exports.getBookByTitle = async (title) => {
    return await knex('book').where('title', title).select('*');
};

exports.getBookByAuthor = async (author) => {
    return await knex('book').where('author', author).select('*');
};

exports.updateBookQuantity = async (ISBN, newQuantity) => {
    try {
        await knex('book').where('ISBN', ISBN).update({ available_quantity: newQuantity });
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

exports.updateBookShelfLocation = async (ISBN, newShelfLocation) => {
    await knex('book').where('ISBN', ISBN).update({ shelf_location: newShelfLocation });
};

exports.deleteBook = async (ISBN) => {
    return await knex('book').where('ISBN', ISBN).del();
};


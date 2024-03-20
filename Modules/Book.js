const knex = require('../Database/knex.js');


class Book {

    constructor(ISBN, title, author, available_quantity, shelf_location) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.available_quantity = available_quantity;
        this.shelf_location = shelf_location;
    }

    async addBookToDatabase() {
        return await knex('books').insert(
            {
                ISBN: this.ISBN,
                title: this.title,
                author: this.author,
                available_quantity: this.available_quantity,
                shelf_location: this.shelf_location
            });
    }

    static async getBooks() {
        return await knex('books').select('*');
    }

    static async getQuantity(ISBN) {
        console.log(`ISBN: ${ISBN}`);
        return await knex('books').where('ISBN', ISBN).select('available_quantity');
    }

    static async getBookByISBN(ISBN) {
        console.log(`ISBN: ${ISBN}`);
        return await knex('books').where('ISBN', ISBN).select('*');
    }

    static async getBookByTitle(title) {
        return await knex('books').where('title', title).select('*');
    }

    static async getBookByAuthor(author) {
        return await knex('books').where('author', author).select('*');
    }

    static async updateBookQuantity(ISBN, newQuantity) {
        try {
            await knex('books').where('ISBN', ISBN).update({ available_quantity: newQuantity });
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }


    async updateBookShelfLocation(ISBN, newShelfLocation) {
        await knex('books').where('ISBN', ISBN).update({ shelf_location: newShelfLocation });
    }

    async updateBookTitle(ISBN, newTitle) {
        try {
            await knex('books').where('ISBN', ISBN).update({ title: newTitle });

        }
        catch (err) {
            console.log(err);
        }
        return;
    }

    async updateBookAuthor(ISBN, newAuthor) {
        await knex('books').where('ISBN', ISBN).update({ author: newAuthor });
    }

    async deleteBook(ISBN) {
        await knex('books').where('ISBN', ISBN).del();
    }

}

module.exports = Book;
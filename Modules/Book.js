const knex = require('../Database/knex.js');


class Book {

    constructor(ISBN, title, author, available_quantity, shelf_location) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.available_quantity = available_quantity;
        this.shelf_location = shelf_location;

        knex('books').insert([
            {
                ISBN: this.ISBN,
                title: this.title,
                available_quantity: this.available_quantity,
                shelf_location: this.shelf_location,
                author: this.author
            }
        ]);
    }

    static async getBooks() {
        return await knex('books').select('*');
    }


    static async getBookByISBN(ISBN) {
        return await knex('books').where('ISBN', ISBN).select('*');
    }

    static async getBookByTitle(title) {
        return await knex('books').where('title', title).select('*');
    }

    static async getBookByAuthor(author) {
        return await knex('books').where('author', author).select('*');
    }

    static async updateBookQuantity(ISBN, newQuantity) {
        return await knex('books').where('ISBN', ISBN).update({ available_quantity: newQuantity });
    }

    static async updateBookShelfLocation(ISBN, newShelfLocation) {
        return await knex('books').where('ISBN', ISBN).update({ shelf_location: newShelfLocation });
    }

    static async updateBookTitle(ISBN, newTitle) {
        return await knex('books').where('ISBN', ISBN).update({ title: newTitle });
    }

    static async updateBookAuthor(ISBN, newAuthor) {
        return await knex('books').where('ISBN', ISBN).update({ author: newAuthor });
    }

    static async deleteBook(ISBN) {
        return await knex('books').where('ISBN', ISBN).del();
    }

}

module.exports = Book;
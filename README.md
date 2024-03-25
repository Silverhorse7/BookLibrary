# BookLibrary

I'm pleased to present the BookLibrary application, a project I undertook over a span of 2-3 days. Within this short timeframe, I transitioned from having no prior knowledge of backend technologies to acquiring proficiency in Node.js, Knex, MySQL, and the creation of a simple RESTful API. It's worth noting that at the outset, I had nothing but my problem-solving skills and an ambition to learn anything and everything necessary to complete this project successfully. Additionally, I delved into concepts such as Unit Testing, JWT implementation, utilizing Postman for API endpoint testing, as well as aspects of application security and adhering to Clean Code principles.

Although some features in the Extra branch remain incomplete due to time constraints, the current version of the application serves as a functional book library system. Users can perform basic CRUD operations for books, borrowers, and borrowed books.

Despite the apparent simplicity of the application, this project has been a tremendous learning experience for me. I am optimistic about my future prospects in software development, and I believe that with continued practice and dedication, I will be well-equipped to tackle more complex projects in the future.
## Features

- Book
    - Add, update, delete and view books
    - Search for books

- Borrower
    - Add, update, delete and view borrowers
    - Search for borrowers

- Borrow
    - Borrow books
    - Return books
    - View borrowed books by borrower



## Schema Design

- Book
    - isbn (primary)
    - title
    - author
    - quantity
    - shelf location
- Borrower
    - email (primary)
    - name

- Borrow Table
    - isbn
    - email


## Technologies Used

- Node.js
- Knex (SQL query builder)
- Database: MySQL

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies


## API Endpoints (Restful)


- GET /books
    - Description: Get all books
    - Response: 
        - Status: 200

- PUT /books
    - Description: Update a book
    - Request Body (example):
        ```
        {
            "isbn": "978-3-16-148410-0",
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "quantity": 10,
            "shelf_location": "A1"
        }
        ```
    - Response: 
        - Status: 200

- POST /books
    - Description: Add a book
    - Request Body (example):
        ```
        {
            "isbn": "978-3-16-148410-0",
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "quantity": 10,
            "shelf_location": "A1"
        }
        ```
    - Response: 
        - Status: 201

- GET /books/search
    - Description: Search for a book by title, author, or ISBN.
    - Request Query:
        - title, author or isbn
    - Response: 
        - Status: 200

- DELETE /books
    - Description: Delete a book
    - Request Body:
        ```
        {
            "isbn": "978-3-16-148410-0"
        }
        ```
    - Response: 
        - Status: 200

- POST /borrowers
    - Description: Register a borrower
    - Request Body:
        ```
        {
            "email": "
            "name": "John Doe"
        }
        ```

- PUT /borrowers
    - Description: Update a borrower
    - Request Body:
        ```
        {
            "email": "
            "name": "John Doe"
        }
        ```

- DELETE /borrowers
    - Description: Delete a borrower
    - Request Body:
        ```
        {
            "email": "
        }
        ```

- GET /borrowers
    - Description: Get all borrowers
    - Response:
        - Status: 200

- POST /borrow
    - Description: Borrow a book
    - Request Body:
        ```
        {
            "isbn": "978-3-16-148410-0",
            "email": "
        }
        ```
    - Response:
        - Status: 200

- POST /return
    - Description: Return a book
    - Request Body:
        ```
        {
            "isbn": "978-3-16-148410-0",
            "email": "
        }
        ```
    - Response:
        - Status: 200

- GET /borrowers
    - Description: Get all borrowed books
    - Response:
        - Status: 200


## Future Improvements

- Implement authentication and authorization
- Implement unit tests
- Implement pagination for large datasets
- Implement error handling
- Implement logging
- Implement validation for request bodies
- Implement a more complex schema design to accommodate more features
- Implement a more complex and efficient search functionality in the database


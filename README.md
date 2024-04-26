# BookLibrary

I'm pleased to present the BookLibrary application, a project I undertook over a span of 2-3 days. Within this short timeframe, I transitioned from having no prior knowledge of backend technologies to acquiring proficiency in Node.js, Knex, MySQL, and the creation of a simple RESTful API. It's worth noting that at the outset, I had nothing but my problem-solving skills and an ambition to learn anything and everything necessary to complete this project successfully. Additionally, I delved into concepts such as Unit Testing, JWT implementation, utilizing Postman for API endpoint testing, as well as aspects of application security and adhering to Clean Code principles.

Despite the apparent simplicity of the application, this project has been a tremendous learning experience for me. I am optimistic about my future prospects in software development, and I believe that with continued practice and dedication, I will be well-equipped to tackle more complex projects in the future.


### Built With

* [NodeJS](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
* [PostgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database system.
* [Sequelize](http://docs.sequelizejs.com/) - A promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* [ExpressJS](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.


#### Getting Started

```markdown
# Clone your fork of this repository

# Ensure NodeJS, PostgreSQL and Sequelize cli are globally installed

# Switch to project directory
cd helloBooks

# Install dependencies
npm install

# Set up environment variables
Follow the template in .env.example

# Run database migrations
npm run migrate:dev

# run app.js (future to be updated in a script instead.)
node app.js
```

#### Features

* Authentication is via [**JSON Web Tokens**](https://jwt.io/)
* Login/Sign up to gain access to routes
* A library of books from different categories
* Ability to borrow books repeatedly
* Track your reading/borrowing history
* Admin access to add and modify book details


## API Endpoints (Restful) (Soon to be documented)

## Future Improvements

- Implement testing via jest.

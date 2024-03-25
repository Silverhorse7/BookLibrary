const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const router = require('./routes');

const app = express();

// require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));



// Middleware
app.use(express.json());

// Parse incoming requests data
app.use(express.urlencoded({ extended: true }));

// Use your routes in your app
app.use(router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the library' });
});
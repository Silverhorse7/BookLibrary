const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Import your routes
const router = require('./routes');

// Middleware
app.use(express.json());

// Use your routes in your app
app.use(router);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the library' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const User = require('../Modules/user.js');

// schema is: username, email, age, role


exports.registerUser = async (req, res) => {
    // Logic to register a User
    const { user } = req.body;

    await User.addUser(user);

    res.status(201).json({ message: 'User registered successfully' });

};

exports.updateUser = async (req, res) => {
    // Logic to update a User's details
    const { email, name } = req.body;

    const User = await User.getUserByEmail(email);
    if (User.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }

    // check if the email is already in use
    const UserWithEmail = await User.getUserByEmail(email);

    await User.updateUserName(email, name);


};

exports.deleteUser = async (req, res) => {
    // Logic to delete a User

    const { email, name } = req.body;
    const User = await User.getUserByEmail(email);

    if (User.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }

    await User.deleteUser(email);
    res.status(200).json({ message: 'User deleted successfully' });
};

exports.listUsers = async (req, res) => {
    // Logic to list all Users
    const Users = await User.getUsers();

    res.status(200).json(Users);
};
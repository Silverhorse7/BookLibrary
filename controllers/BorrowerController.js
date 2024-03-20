const Borrower = require('../Modules/Borrower.js');

exports.registerBorrower = async (req, res) => {
    // Logic to register a borrower
    const { email, name } = req.body;

    const newBorrower = new Borrower(name, email);
    await newBorrower.addBorrowerToDatabase();

    res.status(201).json({ message: 'Borrower registered successfully' });
};

exports.updateBorrower = async (req, res) => {
    // Logic to update a borrower's details
    const { email, name } = req.body;

    const borrower = await Borrower.getBorrowerByEmail(email);
    if (borrower.length === 0) {
        return res.status(404).json({ message: 'Borrower not found' });
    }

    // check if the email is already in use
    const borrowerWithEmail = await Borrower.getBorrowerByEmail(email);

    await Borrower.updateBorrowerName(email, name);


};

exports.deleteBorrower = async (req, res) => {
    // Logic to delete a borrower

    const { email, name } = req.body;
    const borrower = await Borrower.getBorrowerByEmail(email);

    if (borrower.length === 0) {
        return res.status(404).json({ message: 'Borrower not found' });
    }

    await Borrower.deleteBorrower(email);
    res.status(200).json({ message: 'Borrower deleted successfully' });
};

exports.listBorrowers = async (req, res) => {
    // Logic to list all borrowers
    const borrowers = await Borrower.getBorrowers();

    res.status(200).json(borrowers);
};
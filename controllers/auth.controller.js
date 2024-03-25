const config = require("../config/auth.config.js");
const user = require("../Modules/user.js");
const book = require("../Modules/Book.js");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    await user.addUser(
        req.body.username,
        req.body.email,
        req.body.age,
        bcrypt.hashSync(req.body.password, 8),
        req.body.role
    ).then(() => {
        res.send({ message: "User was registered successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    await user.getUserByEmail(email).then(user => {

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            age: user.age,
            role: user.role,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};
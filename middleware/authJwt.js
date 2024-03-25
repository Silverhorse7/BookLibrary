const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const user = require("../Modules/user.js");


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token,
        config.secret,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" });
            }
            req.userId = decoded.id;
            next();
        });
};

isAdmin = async (req, res, next) => {
    const user = await knex('admin').where('id', req.userId).first();

    if (user.role === 'admin') {
        next();
        return;
    }

    res.status(403).send({ message: "Require Admin Role!" });
    return;
}

isUser = async (req, res, next) => {
    const user = await knex('user').where('id', req.userId).first();

    if (user.role === 'user') {
        next();
        return;
    }

    res.status(403).send({ message: "Require User Role!" });
    return;
}

const authJwt = {
    verifyToken,
    isAdmin,
    isUser
};

module.exports = authJwt;
const pool = require('../config/db.js');

const User = {};

User.get = (username) => {
    return pool.query('SELECT * FROM users WHERE username=$1', [username]);
};

User.register = (username, password, email) => {
    return pool.query('INSERT INTO users(user_id, username, password, email) VALUES(DEFAULT, $1, $2, $3) RETURNING user_id', [username, password, email]);
};

User.getById = (id) => {
    return pool.query('SELECT * FROM users WHERE user_id=$1', [id]);
};

User.getAll = () => {
    return pool.query('SELECT * FROM users');
}

module.exports = User;

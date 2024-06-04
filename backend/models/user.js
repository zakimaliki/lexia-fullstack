const db = require('../db');

const User = {
    async createUser(username, password) {
        const result = await db.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, password]
        );
        return result.rows[0];
    },
    async findUserByUsername(username) {
        const result = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );
        return result.rows[0];
    }
};

module.exports = User;

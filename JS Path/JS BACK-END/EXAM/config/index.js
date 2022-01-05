const config = {
    development: {
        PORT: 3000,
        DB_CONNECTION: 'mongodb://localhost:27017/expenseTracker', //ADD THE LOCAL DB NAME
        SALT_ROUNDS: 3,
        SECRET: 'somesecret',
        COOKIE_NAME: 'USER_SESSION',
    },
};

module.exports = config['development']
const config = {
    development: {
        PORT: 5000,
    },
    production: {
        PORT: 5005,
    }
};

module.exports = config[process.env.NODE_ENV.trim()]
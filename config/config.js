module.exports = {
    development: {
        port: process.env.PORT || 7000,
        SECRET : 'secretToken',
    },
    production: {
        port: 80,
        SECRET : 'secretToken',
    }
};
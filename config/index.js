module.exports = {
    // environment
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 5000,

    // database credentials for sequelize
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
    }
}

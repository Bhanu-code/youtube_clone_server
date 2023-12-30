const {sequelize, Model, DataTypes, Sequelize} = require('sequelize')

const dbConfig = {
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_pass: process.env.DB_PASSWORD,
    conn_type: process.env.DB_CONN_TYPE,
    port: process.env.DB_PORT
}

const sequelizeTZ = new Sequelize(dbConfig.db_name, dbConfig.db_user, dbConfig.db_pass, {
    host: dbConfig.db_host,
    dialect: dbConfig.conn_type,
    port: dbConfig.port
})

const connection = {};

connection.Sequelize = Sequelize;
connection.SequelizeTZ = sequelizeTZ;
connection.Model = Model;
connection.DataTypes = DataTypes;

module.exports = connection;

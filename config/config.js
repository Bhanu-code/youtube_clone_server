const {sequelize, Model, DataTypes, Sequelize} = require('sequelize')

const dbConfig = {
    db_name: 'defaultdb',
    db_user: 'avnadmin',
    db_host: 'mysql-29e19855-bhanuchowhan652-c2ef.a.aivencloud.com',
    db_pass: 'AVNS_nw0lYY8MM8gb7_sn9Ou',
    conn_type: 'mysql',
    port: '15778'
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

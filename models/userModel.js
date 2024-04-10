const dbConfig = require('../config/config')
const Model = dbConfig.Model;
const sequelize = dbConfig.SequelizeTZ;

const historyModel = require('./historyModel');

// const Op = dbConfig.Sequelize.Op;

class userModel extends Model{

}

userModel.init({
    id: {
        type: dbConfig.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        references: {
            model: historyModel,
            key: 'id'
          }
    },
    username:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
    },
    name:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
    },
    createdAt: {
        type: dbConfig.Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: dbConfig.Sequelize.DATE,
        allowNull: false,
    }
}, { sequelize, timestamps: true, modelName: 'user', freezeTableName: true })


module.exports = userModel;
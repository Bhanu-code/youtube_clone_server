const dbConfig = require('../config/config');
const userModel = require('./userModel');
const Model = dbConfig.Model;
const sequelize = dbConfig.SequelizeTZ;


class justModel extends Model{

}

justModel.init({
    id: {
        type: dbConfig.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    just_id:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_id:{
        type: dbConfig.Sequelize.INTEGER,
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
}, { sequelize, timestamps: true, modelName: 'just', freezeTableName: true })

module.exports = justModel;
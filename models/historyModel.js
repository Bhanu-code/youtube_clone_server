const dbConfig = require('../config/config')
const Model = dbConfig.Model;
const sequelize = dbConfig.SequelizeTZ;


class historyModel extends Model{

}

historyModel.init({
    id: {
        type: dbConfig.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    video_id:{
        type: dbConfig.Sequelize.STRING,
        allowNull: false,
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
}, { sequelize, timestamps: true, modelName: 'history', freezeTableName: true })

module.exports = historyModel;
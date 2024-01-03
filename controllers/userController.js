const userModel = require('../models/userModel');
const historyModel = require('../models/historyModel');
const watchlistModel = require('../models/watchlistModel');

const getUsers = async (req, res) =>{
    try {
        const result = await userModel.findAll()
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}


const updateUsers =  async (req, res)=>{
    const docToBeUpdated = req.body;
    try {
        const result = await userModel.update( docToBeUpdated , {where: { id: req.params.id }})
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteUsers =  async (req, res)=>{
    try {
        const result = await userModel.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

const addToHistory = async (req, res)=>{
    
    try {
        const result = await historyModel.create({
            video_id: req.body.video_id,
            user_id: req.body.user_id,
        }, { fields: ['video_id', 'user_id'] })
       
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getUsersHistory = async (req, res)=>{
    try {
        const result = await historyModel.findAll({
            where: { user_id: req.params.userId }
        })
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteHistory = async (req, res)=>{
    try {
        const result = await historyModel.destroy({
            where: { user_id: req.params.userId }
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addToWatchlist = async (req, res)=>{
    try {
        const result = await watchlistModel.create({
            where: { user_id: req.params.userId }
        })
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteWatchlist = async (req, res)=>{
    try {
        const result = await watchlistModel.destroy({
            where: { user_id: req.params.userId }
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }

}


module.exports = { getUsers, deleteUsers, updateUsers, addToHistory, getUsersHistory, deleteHistory,
addToWatchlist, deleteWatchlist }
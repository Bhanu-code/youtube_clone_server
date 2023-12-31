const router = require('express').Router();

const { getUsers, deleteUsers, updateUsers, addToHistory, getUsersHistory, deleteHistory } = require('../controllers/userController');
// const { verify } = require('../middlewares/verify');

//GET USERS
router.get("/", getUsers);

//CREATE USERS
// router.post("/", setUsers);

//UPDATE USERS
router.put("/:id", updateUsers);

//DELETE USERS
router.delete("/:id", deleteUsers);

//ADD VIDEOS TO HISTORY USERS
router.post("/history", addToHistory);

//GET USER'S HISTORY
router.get("/history/:userId", getUsersHistory);

//DELTE USER'S HISTORY
router.post("/history/:userId", deleteHistory);



module.exports = router;
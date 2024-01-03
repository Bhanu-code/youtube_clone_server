const router = require('express').Router();

const { getUsers, deleteUsers, updateUsers, addToHistory, getUsersHistory, deleteHistory,
addToWatchlist, deleteWatchlist } = require('../controllers/userController');
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

//DELETE USER'S HISTORY
router.delete("/history/:userId", deleteHistory);

//GET USER'S WATCHLIST
router.get("/watchlist/:userId", addToWatchlist);

//DELETE USER'S WATCHLIST
router.delete("/watchlist/:userId", deleteWatchlist);



module.exports = router;
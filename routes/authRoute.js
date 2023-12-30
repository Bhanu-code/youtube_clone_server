const router = require('express').Router();

const { registerUsers, loginUsers } = require('../controllers/authController');


//LOGIN USERS
router.post('/login', loginUsers);

//REGISTER USERS
router.post('/register', registerUsers);

module.exports = router;
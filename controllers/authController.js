
const userModel = require('../models/userModel')

const Cryptojs = require('crypto-js')
const jwt = require("jsonwebtoken");


//LOGIN USERS
const loginUsers = async (req, res) => {
    try {
        const user = await userModel.findOne({ where: { username: req.body.username }});

        !user && res.status(401).json("Wrong credendtials");

        const hashedPassword = Cryptojs.AES.decrypt(user.password, process.env.SECRET_PHRASE);
        const Originalpassword = hashedPassword.toString(Cryptojs.enc.Utf8);

        Originalpassword !== req.body.password &&
            res.status(401).json("Wrong credentials!");

            const accessToken = jwt.sign(
                {
                    id: user.id,
                    name: user.username
                },
                process.env.JWT_SEC,
                { expiresIn: "1d" }
            );

            const {password, ...others} = user.dataValues;

            res.status(200).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
        // console.log(err);
    }

}


//REGISTER USERS
const registerUsers = async (req, res) => {
    // const user = await userModel.findOne({where: { username: req.body.username }})
    // if(user){
    //     res.status(201).json('username already exists')
    // }
    try {
        const newUser = await userModel.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: Cryptojs.AES.encrypt(req.body.password, process.env.SECRET_PHRASE).toString()
        }, { fields: ['username', 'name', 'email', 'password'] })
        const { password, ...others } = newUser;
        res.status(200).json("registered");
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = { registerUsers, loginUsers }
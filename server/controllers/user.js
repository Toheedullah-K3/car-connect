const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db-config');
const router = express.Router();
const Token = require('../models/token')
const sendMail = require('../mail/mail')
const { User } = require('../models/User');

const secretKey = 'your_secret_key';

const verifyCode = async (req, res) => {
    const userId = req.body.email;
    const otp = req.body.OTP;
    console.log(req.body)

    try{

    
    const token = await Token.findByPk(userId);
    if(token && token.dataValues.otp == otp){
        await User.update({
            isVerified: true
        },{
            where: {
                email: userId
            }
        }
    )
        return res.status(200).send("Successfull")
    }

    return res.status(400).send("Token Verificaton Failed")
} catch( err ){
    console.log(err)
    return res.status(500).send("Internal Server Error")
}

}
const sendToken = async (req, res) => {
    const userId = req.body.email;
    const otp = Math.floor(1000 + Math.random() * 9000);
    
    try{
        const token = await Token.create({
            userId,
            otp
        })
        console.log(token.dataValues);
        
        await sendMail(userId, otp);
        return res.status(201).json({ message: 'User registered successfully!' });

    }catch(err) {
        console.log(err)
        res.status(500).json({ error: err.message });
    }
}

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(" pp", req.body);
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            isVerified: false
        });
        console.log(user);

        await sendToken(req, res);
    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: err.message });
    }
}

const login =  async (req, res) => {
    try {
        const { email, password } = req.body;

        // console.log(req.body);

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if(!user.dataValues.isVerified) {
            return res.status(403).send("Please Verify your Account")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '2h' });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllUsers = async (req,res) => {

    try {
           const users = await User.findAll();
           return res.send(users);
    } catch(err) {
        console.log(err);
        return res.status(500).send("internal server error ");
    }
}

module.exports = {
    signup,
    login,
    getAllUsers,
    verifyCode
}




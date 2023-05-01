const express = require("express")
const { UserModel } = require("../models/user.models")

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { email, pass, age, name } = req.body;
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            // Store hash in your password DB.
            if (hash) {
                const user = new UserModel({ email, age, name, pass: hash })
                await user.save()
                res.status(200).send({ "msg": "New user registered successfully" })
            }
        });

    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                // result == true

                if (result) {
                    const token = jwt.sign({ authorID: user._id, author: user.name }, "ajay");
                    res.status(200).send({ "msg": "User Login successfully", "token": token })
                } else {
                    res.status(200).send({ "error": "Invalid Credentials" })
                }
            });

        } else {
            res.status(200).send({ "error": "Invalid Credentials" })
        }
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})


module.exports = {
    userRouter
}
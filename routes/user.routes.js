

const express = require("express")
const { UserModel } = require("../models/user.models")

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    try {
        const user = UserModel(req.body)
        await user.save()
        res.status(200).send({ "msg": "New user registered successfully" })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email, pass })
        if (user) {
            res.status(200).send({ "msg": "User Login successfully" })
        } else {
            res.status(400).send({ "error": "Invalid Credentials" })
        }
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})


module.exports = {
    userRouter
}
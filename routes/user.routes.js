

const express = require("express")
const { UserModel } = require("../models/user.models")

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    console.log("notes get")
})

userRouter.post("/create", (req, res) => {
    console.log("notes post")
})

userRouter.patch("/update", (req, res) => {
    console.log("notes patch")
})

userRouter.delete("/delete", (req, res) => {
    console.log("notes delete")
})

module.exports = {
    userRouter
}
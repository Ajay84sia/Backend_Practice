
const express = require("express")
const { NoteModel } = require("../models/notes.models")

const notesRouter = express.Router()

notesRouter.get("/", (req, res) => {
    console.log("notes get")
})

notesRouter.post("/create", (req, res) => {
    console.log("notes post")
})

notesRouter.patch("/update", (req, res) => {
    console.log("notes patch")
})

notesRouter.delete("/delete", (req, res) => {
    console.log("notes delete")
})

module.exports = {
    notesRouter
}
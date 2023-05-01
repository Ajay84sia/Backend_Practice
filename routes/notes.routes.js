
const express = require("express")
const { NoteModel } = require("../models/notes.models")

const notesRouter = express.Router()

notesRouter.get("/", async (req, res) => {
    try {
        const notes = await NoteModel.find({ authorID: req.body.authorID })
        res.send(notes)

    } catch (error) {

    }

})

notesRouter.post("/create", async (req, res) => {
    try {
        const note = new NoteModel(req.body)
        await note.save()
        res.status(200).send({ "msg": "New note created successfully" })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

notesRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    const note = await NoteModel.findOne({ _id: id })
    try {
        if (req.body.authorID !== note.authorID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await NoteModel.findByIdAndUpdate({ _id: id }, req.body)
            res.status(200).send({ "msg": `Note with id:${id} updated successfully` })
        }


    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

notesRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    const note = await NoteModel.findOne({ _id: id })
    try {
        if (req.body.authorID !== note.authorID) {
            res.status(200).send({ "msg": "You are not authorized to perform this action" })
        } else {
            await NoteModel.findByIdAndUpdate({ _id: id }, req.body)
            res.status(200).send({ "msg": `Note with id:${id} deleted successfully` })
        }


    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

module.exports = {
    notesRouter
}
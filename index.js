const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { notesRouter } = require("./routes/notes.routes")
const { auth } = require("./middleware/auth.middleware")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Basic API Endpoint")
})

app.use("/user", userRouter)

app.use(auth)

app.use("/notes", notesRouter)


app.listen(process.env.port, async (req, res) => {

    try {
        await connection
        console.log("Connected to the database")

    } catch (err) {
        console.log("Unable to connect at database")

    }

    console.log("Server is running at port 8080")

})


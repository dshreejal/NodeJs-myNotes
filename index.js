const connectToMongo = require("./db")
const express = require('express');
const cors = require('cors')
connectToMongo();

const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth')) //Route for user: sigUp, logIn, getUserData
app.use('/api/notes', require('./routes/notes')) //Route for notes: addNote, fetchAllNotes, editNotes, deleteNotes 

app.listen(port, () => {
    console.log(`myNotes Backend running at  http://localhost:${port}`)
})
/* HTML Routes Needed
// Need a GET /notes that returns the notes.html

// GET * should return the index.html file

 */


/* API Routes needed 
// GET /api/notes should read the db.json file and return all saved notes as JSON

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
    // Need to find a way to give each note a unique id when it is saved (npm packages should help with this)
*/

// import modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const parser = require('./lib/parser')

// add in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

parser()

// GET route for index.html
app.get('/api/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// GET route for notes.html
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/notes.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
})

app.get('/public/assets/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/js/index.js'))
})

app.post('/notes', (req, res) => {
    console.log(req.body)
})

// add listener for server events
app.listen(PORT, () => {
    console.log(`API server is active now on PORT ${PORT}`)
})
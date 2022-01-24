// import modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const parser = require('./lib/parser')
const notes = require('./db/db.json')
const fs = require('fs');

// add in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// GET route for index.html
app.get('/api/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// GET route for notes.html
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/notes.html'))
})

app.get('/notes', (req, res) => {
    let results = notes;
    console.log(results)
    
    if(results) {
        res.json(results);
    }
})

app.get('/public/assets/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/js/index.js'))
})

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )

    // return finished code to post route for response
    return note;
}

app.post('/notes', (req, res) => {
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note)
    parser()
})

/* Potetntial code for deleting a note, not working currently
function deleteNote(queryId, notesArray) {
    const noteId = queryId;
    console.log(notesArray)
    console.log(noteId)
    notesArray.splice(noteId, 1)
    console.log(notesArray)
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )

    return notesArray
}

app.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes)
    res.json({
        message: 'Deleted',
    })
}) */

parser()

// add listener for server events
app.listen(PORT, () => {
    console.log(`API server is active now on PORT ${PORT}`)
})
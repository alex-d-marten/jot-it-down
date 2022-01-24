const fs = require('fs');
const notes = require('../../db/db.json')
const path = require('path');
const router = require('express').Router()
const parser = require('../../lib/parser')

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )

    // return finished code to post route for response
    return note;
}

router.get('/api/notes', (req, res) => {
    let results = notes;
    if(results) {
        res.json(results);
    }
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note)
    parser()
})

router.get('/public/assets/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/assets/js/index.js'))
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

module.exports = router;
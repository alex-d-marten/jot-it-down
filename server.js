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
const Note = require('./lib/Note');
const notesArray = require('./db/db.json')


// add in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

if(notesArray.length > 1) {
   console.log('multiple notes present')
   notesArray.forEach((element, index) => {
    //    console.log(element)
       const note = new Note(notesArray[index].title, notesArray[index].text)
       console.log(note)
   }) 
} else if(notesArray.length = 1) {
    const note = new Note(notesArray[0].title, notesArray[0].text)
    console.log(note)
}
else {
    console.log("No notes found")
}

// GET route for index.html
app.get('/api/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// GET route for notes.html
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})





// add listener for server events
app.listen(PORT, () => {
    console.log(`API server is active now on PORT ${PORT}`)
})
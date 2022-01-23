const Note = require('./Note');
const notesArray = require('../db/db.json')
const generateNoteList = require('../src/note-template')
const generateContent = require('../src/html-template')
const writeFile = require('../utils/generate-html')

const parser = () => {
    if(notesArray.length > 1) {
        let combineNoteString = ''
        notesArray.forEach((element) => {
         //    console.log(element)
            const note = new Note(element.title, element.text)
            // console.log(note)
            const noteString = generateNoteList(note)
            combineNoteString = combineNoteString + noteString
            // return noteString
            // console.log(noteString)
        })
        const noteHtml = generateContent(combineNoteString)
        writeFile(noteHtml)
    } else if(notesArray.length = 1) {
         const note = new Note(notesArray[0].title, notesArray[0].text)
         console.log(note)
         return note;
     }
     else {
         console.log("No notes found")
     }
}


module.exports = parser;
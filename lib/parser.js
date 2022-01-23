const Note = require('./Note');
const notesArray = require('../db/db.json')
const generateNoteList = require('../src/note-template')
const generateContent = require('../src/html-template')
const writeFile = require('../utils/generate-html')

const parser = () => {
    if(notesArray.length > 1) {
        let combineNoteString = ''
        notesArray.forEach((element) => {
            const note = new Note(element.title, element.text)
            const noteString = generateNoteList(note)
            combineNoteString = combineNoteString + noteString
            combineNoteString = combineNoteString.trim()
        })
        const noteHtml = generateContent(combineNoteString)
        writeFile(noteHtml)
    } else if(notesArray.length === 1) {
         const note = new Note(notesArray[0].title, notesArray[0].text)
         const noteString = generateNoteList(note)
         const noteHtml = generateContent(noteString)
         writeFile(noteHtml)
     }
     else {
         console.log("No notes found")
         let combineNoteString = ''
         const noteHtml = generateContent(combineNoteString)
         writeFile(noteHtml)
     }
}


module.exports = parser;
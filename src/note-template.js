const Note = require('../lib/Note');

// function to generate the note content
const generateContent = noteData => {
    const note = new Note(noteData);

    return `
    <li>
        <h1>${note.getTitle()}</h1>
        <p>${note.getText()}</p>
    </li>
    `
}
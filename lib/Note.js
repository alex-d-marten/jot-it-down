// declaration for the Note class
class Note {
    // constructor for Note input
    constructor(noteTitle, noteText, noteId) {
        this.noteTitle = noteTitle;
        this.noteText = noteText;
        this.noteId = noteId;
    }

    // get the title of the note
    getTitle() {
        return this.noteTitle
    }

    // get the text of the note
    getText() {
        return this.noteText
    }

    // get the id of the note
    getId() {
        return this.noteId
    }
}

module.exports = Note;
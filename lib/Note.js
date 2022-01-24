// declaration for the Note class
class Note {
    // constructor for Note input
    constructor(noteTitle, noteText, noteId) {
        this.title = noteTitle;
        this.text = noteText;
        this.id = noteId;
    }

    // get the title of the note
    getTitle() {
        return this.title
    }

    // get the text of the note
    getText() {
        return this.text
    }

    // get the id of the note
    getId() {
        return this.id
    }
}

module.exports = Note;
// declaration for the Note class
class Note {
    // constructor for Note input
    constructor(noteTitle, noteText) {
        this.noteTitle = noteTitle;
        this.noteText = noteText;
    }

    // get the title of the note
    getTitle() {
        return this.noteTitle
    }

    // get the text of the note
    getText() {
        return this.noteText
    }
}
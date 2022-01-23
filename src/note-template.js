// function to generate the note content
const generateNoteList = noteData => {
    return `
    <div>
        <h1>${noteData.getTitle()}</h1>
        <p>${noteData.getText()}</p>
    </div>
    `
}


module.exports = templateData => {
    return `
${generateNoteList(templateData)}
            
    `
}
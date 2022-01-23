// function to generate the note content
const generateNoteList = noteData => {
    return `
    <li>
        <h1>${noteData.getTitle()}</h1>
        <p>${noteData.getText()}</p>
    </li>
    `
}


module.exports = templateData => {
    return `
${generateNoteList(templateData)}
            
    `
}
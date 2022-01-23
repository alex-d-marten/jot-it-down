// function to generate the note content
const generateNoteList = noteData => {
    return `
    <div class="border border-dark">
        <h1 class="p-2">${noteData.getTitle()}</h1>
        <p class="p-2">${noteData.getText()}</p>
    </div>
    `
}


module.exports = templateData => {
    return `
${generateNoteList(templateData)}
            
    `
}
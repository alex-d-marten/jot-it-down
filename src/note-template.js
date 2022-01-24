// function to generate the note content
const generateNoteList = noteData => {
    return `
    <div class="border border-dark" data-note="${noteData.getId()}">
        <h3 class="p-4">${noteData.getTitle()}</h1>
    </div>
    `
}

// export the html template
module.exports = templateData => {
    return `
${generateNoteList(templateData)}
    `
}
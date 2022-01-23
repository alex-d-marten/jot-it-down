// import required modules
const fs = require('fs')

// promise to write the generate html to a file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/notes.html', fileContent, err => {
            if(err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'Note list Created!'
            })
        })
    })
}

module.exports = writeFile
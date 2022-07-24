const fs = require('fs')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

 const remove = (title) => {
const notes = loadNotes()

const notesToKeep = notes.filter((notes)=> notes.title !== title)

if (notes.length > notesToKeep.length) {
    console.log("note removed");
    saveNotes(notesToKeep)
} else {
    console.log("invalid title");
    
}


 }

 const listNotes = () =>{
const notes = loadNotes()
console.log('your notes');

notes.forEach(note => {
    console.log(note.title + ": " + note.body );
});
 } 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: remove,
    listNotes: listNotes,
    // readNote: readNote
}



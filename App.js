const fs = require('fs');

const getNotes = () =>{

    return "your notes"
}

const addNotes = (title , body) => {
  const notes = loadNotes()

notes.push({
    title: title,
    body: body
})

    Save(notes)
}

const Save = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
 
}

const loadNotes = () => {
try {
    const dataBuffer = fs.readFileSync("notes.json")
    const datajson = dataBuffer.toString()
    return JSON.parse(datajson);
    
} catch (e) {
    return []
}

}

module.exports = {
    getNote:getNotes,
    addNote:addNotes

}




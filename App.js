const fs = require('fs');

const getNotes = () =>{

    return "your notes"
}

const addNotes = (title , body) => {
  const notes = loadNotes()

  const duplicateNotes = notes.filter((notes)=>{
return notes.title ===title
  })
  if (duplicateNotes.lenght === 0) {
    
      notes.push({
          title: title,
          body: body
      })
      
          Save(notes)
console.log('note added');

} 
console.log('title taken');

}


const Save = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('./notes.json',dataJSON)
 
}

const loadNotes = () => {
try {
    const dataBuffer = fs.readFileSync("./notes.json")
    const datajson = dataBuffer.toString()
    return JSON.parse(datajson);
    
} catch (e) {
    return []
}

}

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes

}




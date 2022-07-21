
const fs = require('fs');
// const jsonData = {
//     title:"exersize scedual",
//     notes:"workout at 5pm sharp",

// } 

// const data = JSON.stringify(jsonData)

// fs.writeFileSync("ConJSON.json", data)

// const dataBuffer = fs.readFileSync('ConJSON.json')
// const dataJSON = dataBuffer.toString()
// const dataJS = JSON.parse(dataJSON)

// console.log(dataJS);


const BufferData = fs.readFileSync('ConJSON.json')
const dataJson = BufferData.toString()
const dataJs = JSON.parse(dataJson)
dataJs.name = "ahmed ali" 
dataJs.age = 36 

const user = JSON.stringify(dataJs)
fs.writeFileSync("ConJSON.json", user)

console.log(dataJs);
const fs = require('fs')

function countStudents(path) {
    try {

 const readSync = fs.readFileSync(path, 'utf-8')
 const data = readSync.split('\n')

const dataCS = data.filter(e => e.includes('CS'))
const dataSWE = data.filter(e => e.includes('SWE'))
const sum = dataCS.length + dataSWE.length
let csArr = []
let sweArr = []
for (const data of dataCS) {
    splitData = data.split(',')
    csArr.push(splitData[0])
}
for (const data of dataSWE) {
    splitData = data.split(',')
    sweArr.push(splitData[0])
}
console.log(`Number of students: ${sum}`)
console.log(`Number of students in CS: ${dataCS.length}. ${csArr.join(', ')}`)
console.log(`Number of students in SWE: ${dataSWE.length}. ${sweArr.join(', ')}`)
} catch {
    throw new Error('Cannot load the database')
}
}
module.exports = countStudents

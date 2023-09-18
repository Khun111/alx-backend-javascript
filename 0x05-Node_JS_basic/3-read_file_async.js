const fs = require('fs')

function countStudents(path) {
    const asyncData = new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                    if (err) {
                    reject(err => {
throw new Error('Cannot load the database')
                            })
                    return
                    }
                    resolve(data)
                    })
            }).then(data => {
data = data.split('\n')
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

                })
return asyncData
}
module.exports = countStudents

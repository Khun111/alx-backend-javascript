import readDatase from '../utils.js'
const path = process.argv[2]
class StudentsController {
    static getAllStudents(request, response) {
        readDatabase(path).then((data) => {
        let message = ['This is the list of our students']
        message.push(`Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}`)
        message.push(`Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}`)
        response.status(200).send(message.join('\n'))
                }).catch(() => res.status(500).send('Cannot load the database'))
    }
    static getAllStudentsByMajor(request, response) {
        major = request.params.major
        if (major !== 'CS' || major !== 'SWE') res.status(500).send('Major parameter must be CS or SWE')
        readDatabase(path).then(data = {
        res.status(200).send(`List: ${data[major].join(', ')}`)
                }).catch(() => res.status(500).send('Cannot load the database'))
    }
}

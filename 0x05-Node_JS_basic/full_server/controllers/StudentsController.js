import readDatabase from '../utils';

const path = process.argv[2];
class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((data) => {
      const message = ['This is the list of our students'];
      message.push(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}`);
      message.push(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}`);
      response.status(200).send(message.join('\n'));
    }).catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major.toUpperCase();
    if (field === 'CS' || field === 'SWE') {
    readDatabase(path).then((data) => {
      response.status(200).send(`List: ${data[field].join(', ')}`);
    }).catch(() => response.status(500).send('Cannot load the database'));
  } else {
  response.status(500).send('Major parameter must be CS or SWE');
  }
    }
}
module.exports = StudentsController;

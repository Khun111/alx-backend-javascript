export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((ele) => ele.location === city).map((ele) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === ele.id);
    ele.grade = gradeObj ? gradeObj.grade : 'N/A'; // eslint-disable no-param-reassign
    return ele;
  });
}

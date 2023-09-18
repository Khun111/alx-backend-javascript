export default function getStudentIdsSum(students) {
  return students.reduce((arr, ele) => (ele.id + arr), 0);
}

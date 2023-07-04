export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) return students.reduce((arr, ele) => (ele.id + arr), 0);
}

export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) return students.filter((ele) => (ele.location === city));
}

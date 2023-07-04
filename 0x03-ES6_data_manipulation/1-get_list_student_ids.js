export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) return [];
  return getListStudents.map((ele) => (ele.id));
}

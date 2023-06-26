export default function createEmployeesObject(departmentName, employees) {
    let employeeObj = {
        [departmentName]: employees,
        }
    return employeeObj
}

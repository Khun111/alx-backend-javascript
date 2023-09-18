interface Student {
firtsName: string;
lastName: string;
age: number;
location: string;
}

const student1: Student {
firstName: "Oluwatobiloba",
lastName: "Amure",
age: 25,
location: "Ife"
}

const student2: Student {
firstName: "Stanley",
lastName: "Ezechukwu",
age: 25,
location: "Onikolobo"
}

const studentsList: Student[] = [student1, student2];

const table: HTMLElement = document.createElement('table');
const body: HTMLElement = document.createElement('tbody');

studentsList.forEach(student => {
const row = document.createElement('tr')
const studentName = document.createElement('td')
const studentLocation = document.createElement('td')

studentName.textContent = student.firstName;
studentLocation.textContent = student.location;
row.appendChild(studentName);
row.appendChild(studentLocation);
body.appendChild(row)
})
table.appendChild(body)
document.appendChild(table)

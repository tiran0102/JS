const students = [
  { name: "Aram",   grade: 85 },
  { name: "Lilit",  grade: 42 },
  { name: "Karen",  grade: 91 },
  { name: "Nare",   grade: 55 },
  { name: "Tigran", grade: 78 },
];


const passedStudents = students.filter(function(student) {
    return student.grade >= 60;
});
console.log("Հաղթահարած ուսանողներ:", passedStudents);


const studentNames = students.map(function(student) {
    return student.name;
});
console.log("Ուսանողների անունները:", studentNames);

const totalGradeSum = students.reduce(function(total, student) {
    return total + student.grade;
}, 0);

const averageGrade = totalGradeSum / students.length;
console.log("Բոլոր ուսանողների միջին գնահատականը:", averageGrade); 

// Task #3--------------------------------
'use strict'

const students = [
    {name: "Аня", grades: [5, 4, 4, 5]},
    {name: "Петя", grades: [3, 4, 4, 3]},
    {name: "Ира", grades: [5, 5, 5, 5]},
];

// 1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.

const studentsAverageScore = students.map((student) => {
    const averageScore = student.grades.reduce((acc, currentValue) => {
        return acc + currentValue;
    })
    return {
        name: student.name,
        avScore: averageScore / student.grades.length,
    }
})

console.log(studentsAverageScore);
console.log('Students Average Score:');
studentsAverageScore.forEach((value) => console.log(`Name: ${value.name} \nAverage Score: ${value.avScore}`));

// 2. Отфильтровать тех, у кого средний балл меньше 4.5.

const filteredStudents = studentsAverageScore.filter((score) => score.avScore >= 4.5);
console.log(filteredStudents);
console.log('Filtered Students:');
filteredStudents.forEach((value) => console.log(`Name: ${value.name} \nAverage Score: ${value.avScore}`));


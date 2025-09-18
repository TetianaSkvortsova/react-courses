'use strict'
import {students} from "./init.js";

function displayStudents() {
    students.forEach((student, index) => {
        const wrapper = document.querySelector('.wrapper');
        const studentLine = document.createElement('div');
        const indexNumber = document.createElement('div');
        const studentFullName = document.createElement('div');
        const studentAge = document.createElement('div');
        const studentAverageScore = document.createElement('div');
        const studentSummary = document.createElement('div');

        studentLine.setAttribute('class', 'line');
        indexNumber.setAttribute('class', 'index-number');
        studentFullName.setAttribute('class', 'full-name');
        studentAge.setAttribute('class', 'age');
        studentAverageScore.setAttribute('class', 'average-score');
        studentSummary.setAttribute('class', 'summary');


        indexNumber.textContent = `${index + 1}`;
        studentFullName.textContent = `${student.name} ${student.lastname}`;
        studentAge.textContent = `${student.getStudentAge()} year old`;
        studentAverageScore.textContent = student.getStudentAverageScore();
        studentSummary.textContent = `${student.summary()}`;

        studentLine.appendChild(indexNumber);
        studentLine.appendChild(studentFullName);
        studentLine.appendChild(studentAge);
        studentLine.appendChild(studentAverageScore);
        studentLine.appendChild(studentSummary);
        wrapper.appendChild(studentLine);
    })
}

displayStudents();
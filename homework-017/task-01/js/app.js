'use strict'

export function Student(sName, sLastname, sBirthDate, sScores) {
    const classes = 25;
    this.name = sName;
    this.lastname = sLastname;
    this.birthDate = new Date(sBirthDate);
    this.scores = sScores;
    this.attendance = new Array(classes);

    this.getStudentAge = function () {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const monthDifference = today.getMonth() - this.birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    this.getStudentAverageScore = function () {
        const sum = this.scores.reduce((accumulator, curValue) => accumulator + curValue, 0)
        return sum / this.scores.length;
    }

    this.present = function () {
        const emptySlotIndex = this.attendance.findIndex((element) => element === undefined);
        if (emptySlotIndex < classes && emptySlotIndex >= 0) {
            this.attendance[emptySlotIndex] = true;
            return;
        }
        alert('Attendance of all classes is full');
    }

    this.absent = function () {
        const emptySlotIndex = this.attendance.findIndex(element => element === undefined);
        if (emptySlotIndex < classes && emptySlotIndex >= 0) {
            this.attendance[emptySlotIndex] = false;
            return;
        }
        alert('Attendance of all classes is full');
    }

    this.summary = function () {
        const length = this.attendance.findIndex(element => element === undefined);
        const attendedClasses = this.attendance.filter(element => element === true);
        const averageAttendance = attendedClasses.length / length;
        const averageScore = this.getStudentAverageScore();
        if (averageAttendance > 0.9 && averageScore > 90) {
            console.log(`averageAttendance: ${averageAttendance}, averageScore: ${averageScore} -> Well Done!!!`);
            return `Well Done!!!`;
        } else if ((averageAttendance <= 0.9 && averageScore >= 90) || (averageAttendance >= 0.9 && averageScore <= 90)) {
            console.log(`averageAttendance: ${averageAttendance}, averageScore: ${averageScore} -> Good but can be better`);
            return `Good but can be better`;
        } else if (averageAttendance < 0.9 && averageScore < 90) {
            console.log(`averageAttendance: ${averageAttendance}, averageScore: ${averageScore} -> Radish`);
            return `Radish`;
        }
    }
}

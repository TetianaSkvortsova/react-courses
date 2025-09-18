'use strict'
import {Student} from "./app.js";

export const students = [];

const student_1 = new Student(
    'Olivia',
    'Smith',
    '1985-09-18',
    [90, 70, 100, 90, 100]
);
const student_2 = new Student(
    'Noah',
    'Jones',
    '1990-03-10',
    [100, 95, 100, 90, 100]
);
const student_3 = new Student(
    'Oliver',
    'Williams',
    '2000-11-03',
    [50, 70, 60, 50, 30]
);

student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.absent();
student_1.absent();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.absent();
student_1.summary();
students.push(student_1);

student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.summary();
students.push(student_2);

student_3.present();
student_3.absent();
student_3.absent();
student_3.absent();
student_3.present();
student_3.summary();
students.push(student_3);

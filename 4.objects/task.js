"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    return this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marksAdd) {
    if ("marks" in this) {
        this.marks.push(...marksAdd);
    }
}

Student.prototype.getAverage = function () {
    if ("marks" in this && this.marks.length !==0) {
        return this.marks.reduce((marks, addMarks) => marks + addMarks, 0) / this.marks.length;
    }
    else {
        return 0;
    }    
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    return this.excluded = reason;
}

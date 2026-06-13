let student = {
    name : "saikumar",
    age : 23,

    study() {
        console.log("Saikumar Studies");
    }
}

console.log(student.name)
console.log(student.age)
student.study();

// class
class Student {
    name = "Abhi"
    age = 24

    study() {
        console.log("Student Studies")
    }
}

const stu = new Student();
console.log(stu.name);
console.log(stu.age);
stu.study();
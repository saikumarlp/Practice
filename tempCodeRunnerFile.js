class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    display() {
        console.log(`Name : ${this.name}\nAge : ${this.age}\nRole: ${this.role}`);
    }
}

class Developer extends Employee {
    work() {
        console.log("I do Coding\n");
    }
}

class Tester extends Employee {
    work() {
        console.log("I do debugging...");
    }
}

let dev = new Developer("saikumar", 22, "Developer")
let tester = new Tester("Raja", 22, "Tester");

dev.display()
dev.work()

tester.display()
tester.work()

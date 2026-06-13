class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    play() {
        console.log(`Student ${this.name} Playing`);
    }
}

const arr = {saikumar : 22, ramesh : 23};
Object.entries(arr).forEach(([name, age]) => {
    const boy = new Student(name, age);
    boy.play();
});

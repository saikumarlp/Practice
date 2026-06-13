let stu_age = 20;
console.log(stu_age)

let a = 10;
console.log(typeof a, a)

a = "saikumar"
console.log(typeof a,a)

//  js lossely typed

let b = 3.16;
const pi = 3.14
console.log(typeof pi)

console.log("My name is" +"saikumar")
console.log("My name is","saikumar")


name = "saikumar"
age = 21;
console.log(`My name is ${name} aged around ${age}, pi value is ${pi}`)

let isValid = false;
console.log(typeof isValid, isValid);

// undefined

let name1;

console.log(name1)

// null
let payment = null
console.log(payment)

let infin = 10 / 0
console.log(infin)


infin = -10 / 0
console.log(infin)

//bigInt

let g = 100n;
console.log(typeof g,g)


// symbol
let x = Symbol("user")
console.log(typeof x, x)

// Array

let arr = [1,2,3,4]
console.log(arr)

// Object

let person = {
    name : "Alice",
    age : 30
}

console.log(person.name)
console.log(person.age)

// keys

console.log(Object.keys(person))

// complete object

console.log(Object.entries(person))

// function

function add() {
    c = 3 + 3;
    console.log(c);
}
add()
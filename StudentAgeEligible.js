const age = 21;

if(age > 17) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote...")
}


// check whether number is positive or negative
const number = 18;
if(number > 0) {
    console.log(`${number} is Positive number`)
}
else if( number < 0) {
    console.log(`${number} is Negative number`)
}
else {
    console.log(`${number} is zero`)
}

// A student passes if marks >= 40 , If marks >= 80 show Distinction

const marks = 90;

if(marks >= 90) {
    console.log("Passed with Distiction");
}
else if(marks >= 40) {
    console.log("Pass");
}
else {
    console.log("Fail")
}

// print first 10 natural numebers
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// print number from 1 to 5
let i = 1;
while(i <= 5) {
    console.log(i++)
}

// for of
const fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    console.log(fruit)
}
// forin
const student = {name : "John", age : 22, grade : "A"}
for(let key in student) {
    console.log(`${key} is ${student[key]}`)
}
// forEach Loop
let numbers = [1,2,3,4,5]

numbers.forEach(number => console.log(number ** 2))
// function Declaration

function greet() {
    console.log('Hello Everyone...')
}

greet()

// Function Expression

let greet1 = function() {
    console.log("Hello Everyone from Function Expression!");
}

greet1();

// Arrow Function

let greet2 = () => console.log("Hello Everyone from Arrow Function")

greet2();


// IIFE - Immediately invoked function Expression
// Anonymous Function
(function() {
    console.log("Hello From Anonymous")
})();


const add = (a, b, c) => console.log(a + b + c);
add(100,200,300);


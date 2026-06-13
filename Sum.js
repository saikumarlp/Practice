const a = 10;
const b = 20;

const add = (a, b) => console.log(a + b)
add(a, b)


// check positive or negative number

const check = (a) => {
    if(a > 0) return "Given number is Positive"
    else if (a < 0) return "Given number is Negative"
    else return "Number is Zero"
}
console.log(check(10))

// write a function which accepts students marks and prints grants accordingly

// 100 - 90 - A+ 

const Grade = (marks) => {
    switch(true) {
        case marks < 100 && marks >= 90:
            console.log("A+")
            break
        case marks < 90 && marks >= 80:
            console.log("A")
            break
        case marks < 80 && marks >= 70:
            console.log("B")
            break
        case marks < 70 && marks >= 60:
            console.log("C")
            break
        default: 
            console.log("Low Marks")
    }
}

Grade(90)

// write a function which will print all numbers from 1 to 50

// for(let i = 1; i < 51; i++)
//     console.log(i)

// write a function which will print all numbers from 1 to 50
// if number is divisible by 3 print "Fizz"

for(let i = 1; i <= 50; i++) {
    if(i % 3 === 0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
}

// write function which will return reverse of given number

let number = 123

const reverseNumber = (num) => {
    let tmp = num
    let res = 0
    while (tmp > 0) {
        rem = tmp % 10
        tmp = Math.floor(tmp / 10)
        res = (res * 10) + rem
    }
    console.log(res)
}
reverseNumber(number)

// for string
const arr = "abc".split("").reverse().join("")
// const rev = arr.reverse()
console.log(arr)

const reverseString = (str) => { 
    return str.split("").reverse().join("")
}
console.log(reverseString("abc"))

const string = "abc"
let newString = ""
for(let i = string.length - 1; i > -1; i--) {
    newString += string[i]
}
console.log(newString);

// character frequency
let string1 = "Kodnest Technologies";
let char = 'n';
let count = 0;
for(let i = 0; i < string1.length; i++) {
    if(string1[i] === char) {
        count++;
    }
}

console.log(count);


const array = [20, 23, 34, 55, 67, 1]
let maxValue = array[0];
for(let i in array) {
    if (i > maxValue)
        maxValue = i
}
console.log(maxValue)


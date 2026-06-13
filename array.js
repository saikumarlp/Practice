// Array

let a = 10;
let stu_info = [102, "Saikumar", 9, true]
console.log(stu_info)

let arr = new Array(1, 2, 3, 4);
console.log(arr)

console.log(stu_info[1])

// Add elements

arr.push(5,6,7)
console.log(arr)

// insert at the begging

arr.unshift(10)
console.log(arr)

// pop at the end
arr.pop()
console.log(arr)

// beg delete

arr.shift()
console.log(arr)


// splice
// splice(start index, deleteCount, item1, item2);

let nums = [10, 20, 30, 40, 50]
// nums.splice(1,2)
console.log(nums)

// replace
nums.splice(2,1,100)
console.log(nums)

console.log(nums.slice(0,3))

// indexOf()
const fruits = ["apple", "banana", "mango" ,"cherry"];
console.log(fruits.indexOf("banana"))

// includes()
console.log(fruits.includes("apple"))
console.log(fruits.includes("mango"))


// sort
console.log(fruits.sort().reverse())

// reverse()
console.log(fruits.reverse())

// forEach

numbers = [1,2,3,4,5,6]
numbers.forEach(element => {
    console.log(element)
});

// map()
let array = [1,10,2,3,4];
const res = array.map(val => val * val);
console.log(res)              

const filter = array.filter(val => val % 2 === 0)
console.log(filter)


const numbers1 = [1,2,3,4,5,6]
console.log(numbers1.reduce((res, num) => res + num,0))


// concat
let newarr = numbers.concat(fruits)
console.log(newarr)

let narr  = newarr.concat(stu_info)
console.log(narr)

// join
const words = ["Hello " , "World"];
console.log(words.join(""))

// unpacking
let fru = ["apple", "banana", "cherry"];
const [ab, bb, cx] = fru;
console.log(ab);


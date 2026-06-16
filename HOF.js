function order(callserveCustomer) {
    console.log("1. order food...");
    return prepare(callserveCustomer);
}

function prepare(serveCustomer) {
    console.log("2. Preparatin started...");
    serveCustomer();
}

function serveCustomer() {
    console.log("3. Enjoy your food");
}

order(serveCustomer);


function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet)


const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map(num => num * 2)

const filterd = doubled.filter(num => num > 5);

const total = filterd.reduce((sum, num) => sum + num, 0);

console.log(numbers)
console.log(doubled)
console.log(filterd)
console.log(total)

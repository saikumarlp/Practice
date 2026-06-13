
function add() {
    console.log(10 + 10);
}

function add(a) {
    console.log(a + 10);
}

function add(a, b) {
    console.log(a + b);
}

function add(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum)
}
add();
add(10);
add(10, 20)
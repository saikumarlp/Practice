function outer() {
    let a = 3; 
    // console.log(a)
    // lexical scope
    return function inner() {
        let a = 10;
        console.log(a);
    }
    inner();
}

outer()

let res = outer();
res();
res();
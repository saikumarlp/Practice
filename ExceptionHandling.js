console.log("Program Started...");

try {
  let a = 10 / b;
  console.log(a);
} catch(e) {
  console.log("Program Ended", e.message);
} finally {
  console.log("I Execute Always..");
}
// throw

let age = 14
try {
if(age >= 18) {
    console.log("Eligibel to Vote.")
} 
else {
    throw new Error("Error")   
};
}
catch(Error) {
    console.log(Error.message)
}
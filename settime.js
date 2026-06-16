// Syncronous
console.log("1. Open BookMyShow");
console.log("2. Search Movie");
console.log("3. Select seats");
console.log("4. Make Payment");
console.log("5. Ticket Booked");

// setTimeout
setTimeout(() => {
  console.log("1. Open BookMyShow");
}, 8000);

console.log("Running");

setTimeout(() => {
  console.log("2. search movie.");
}, 3000);

setTimeout(() => {
  console.log("3. Select seats");
}, 5000);

setTimeout(() => {
  console.log("4. Make Payment");
}, 1000);

setTimeout(() => {
  console.log("5. Ticket Booked");
}, 2000);

// callbacks
setTimeout(() => {
  console.log("1. Open BookMyShow");
  setTimeout(() => {
    console.log("2. search movie.");
    setTimeout(() => {
      console.log("3. Select seats");
      setTimeout(() => {
        console.log("4. Make Payment");
        setTimeout(() => {
          console.log("5. Ticket Booked");
        }, 2000);
      }, 1000);
    }, 5000);
  }, 3000);
}, 8000);

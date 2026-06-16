const p = new Promise((resolve, reject) => {
    let p = "Mov";
    if(p === "re") {
        resolve();
    } else {
        reject(new Error("Mov not found.."))
    }
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open Mov - 2s");
            resolve();
        }, 2000);
    })
})

.catch((e) => {
    console.log("Error: ", e.message);
})
let promise = new Promise((resolve, reject) => {
    reject("order cancelled!");
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
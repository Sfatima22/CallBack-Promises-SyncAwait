let promise = new Promise((resolve, reject) => {
    reject("Delivery failed!");
});

promise.catch((error) => {
    console.log(error);
});
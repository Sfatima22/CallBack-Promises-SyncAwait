let order = true;

let promise = new Promise((resolve, reject) => {
    if (order) {
        resolve("order confirmed!");
    } else {
        reject("order failed!");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
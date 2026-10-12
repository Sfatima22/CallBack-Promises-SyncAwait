var ans = new Promise((resolve, reject) => {
    let n = 2;
    if (n<5) {
        return resolve();
    } else {
        return reject();
    }
});
ans
.then(function () {
    console.log("resolved");
})
.catch(function () {
    console.log("rejected");
});
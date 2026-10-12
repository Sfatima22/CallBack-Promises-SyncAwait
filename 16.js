var ans = new Promise((resolve, reject) => {
    resolve("donee");
});

ans
.then(function (data) {
    console.log(data);              // donee
    return new Promise((resolve, reject) => {
        resolve("donee2");
    });
})
.then(function (data2) {
    console.log(data2);             // donee2
});
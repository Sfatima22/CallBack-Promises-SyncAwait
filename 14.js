Promise.resolve(4)
    .then((num) => {
        return num * 3;
    })
    .then((result) => result + 2)
    .then((finalResult) => {
        console.log(finalResult);
    });
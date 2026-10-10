//  callback hell 
function bakeCake(callback) {
    setTimeout(() => {
        console.log("1. Take the bread");
        callback();
    }, 3000);
}

function prepareFrosting(callback) {
    setTimeout(() => {
        console.log("2. Apply butter on it");
        callback();
    }, 2000);
}

function decorateCake(callback) {
    setTimeout(() => {
        console.log("3. Put it in the toaster");
        callback();
    }, 1000);
}

bakeCake(() => {
    prepareFrosting(() => {
        decorateCake(() => {
            console.log("Bread toast is ready!");
        });
    });
});
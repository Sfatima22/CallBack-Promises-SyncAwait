function cakeReady() {
    console.log("Your cake is ready!");
}

function bakeCake(callback) {
    console.log("Baking the cake...");

    callback();
}

bakeCake(cakeReady);
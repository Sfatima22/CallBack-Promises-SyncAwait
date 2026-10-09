function first() {
    console.log("Apple");
}

function second() {
    console.log("Mango");
}

function third(callback) {
    console.log("Banana");

    callback();
}

third(first);
third(second);
function step2() {
    console.log("step 2");
}
function step1(callback) {
    console.log("step 1");
    callback();
    console.log("step 3");
}
step1(step2);

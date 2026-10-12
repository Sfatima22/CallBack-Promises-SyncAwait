async function getCake(){
    let cake= await Promise.resolve("Chocolate cake is ready!");
    console.log(cake);
}
getCake();
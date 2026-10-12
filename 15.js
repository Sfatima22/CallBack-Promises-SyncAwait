// async await callback function 
var ans= new Promise((resolve,reject)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})
ans
.then(function(){
    console.log("resolved");
})
.catch(function(){
    console.log("rejected");
});
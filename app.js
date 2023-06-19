//?promise SYNTAX 
// const myPromise = new Promeise((resolve,reject)=>{
//     let condition;
    
//     if(condition is met){
//         resolve("value is logged");
//     }else {
//         reject("value is not logged");
//     }
// })

//? *********************************** */
    //*JS Timing , Event ve http isteklerinde asenkron çalışıyor. Aşağıdaki örnekte de senkron çalışan kod asenkronu bekelmez. 

console.log("Ekrem");
setTimeout( ()=>{
    console.log("sanane")},2000);
console.log("Yılmaztürk");

//? ******************************** CALL BACK training

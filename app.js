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

//? ******************************** COIN APP NOTES ********************************
//+ class seçerken arada boşluk bıraknıca child seçiliyor.Çoklu seçimler için hatrılatma.. 
//+ butonun enter a da basıldıği zaman çalışmasını istediğim için "click" yerine "submit" kullanılası mantıklı olan
//+ "input.value" ile her zaman oynamak mantıklı olmayabilir. Bunun yerine yapının içinde bulunduğu form yapısıyla ilgili olarak "form.reset == e.target.reset" kullanılabilir.
//+ API key ile birden fazla işlem yapğılacağı için local e atmak mantıklı ve doğru olan. Ancak API kişiye özel bir şey olduğu için, farklı bir dosyadan çağırabilir veya encrypt ya da decrypt eden bir fonksiyon içine gizleyedebişlirz.
//+ 
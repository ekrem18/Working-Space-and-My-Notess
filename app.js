//?promise SYNTAX 
//  let check = true;
//* const myPromise = new Promise((resolve,reject)=>{
//      
//     if(check){
//         resolve("value is succeeded");       state = "fulfilled" olarak gelir
//     }else {
//         reject("value is NOT succeeded");
//     }
// })

function createPromise() {                        // createPromise adında bir func tranımladım. buna reslo ve reje. parametrelerini girdim. Aşağıda da çağırıyorum
    return new Promise((resolve, reject))=> {
            if (check) {
                resolve("value is succeeded");
                state = "fulfilled";
            } else {
                reject("value is NOT succeeded");
            }
        }};

createPromise()                     //burda çağırmamızın sebebi yularıdaki gibi oldsuğu sürece promise döner bi işe  yaramaöz. somutlaştyırıyoruz
 .then((response) => {
    clg(response);
 })
 .catch((error) => {
    clg(error)}) 
.finally(() => console.log("her zaman çalışır"));

// ---------------------------/



//* PROMISE devamı
//+ 

//? *************** SYNC & ASYNC     ******************** */
//* JS Timing , Event ve http isteklerinde asenkron çalışıyor. Aşağıdaki örnekte de senkron çalışan kod asenkronu bekelmez. 
// console.log("Ekrem");
// setTimeout( ()=>{
//     console.log("sanane")},2000);
// console.log("Yılmaztürk");



//? ******************************** COIN APP NOTES ********************************
//+ class seçerken arada boşluk bıraknıca child seçiliyor.Çoklu seçimler için hatrılatma.. 
//+ butonun enter a da basıldıği zaman çalışmasını istediğim için "click" yerine "submit" kullanılası mantıklı olan
//+ submit dediğimizde sayfanın srüekli yenilenmesini engelemek için e.preventDefault() fonksiyonunu yzmaklta fayda var
//+ "input.value" ile her zaman oynamak mantıklı olmayabilir. Bunun yerine yapının içinde bulunduğu form yapısıyla ilgili olarak "form.reset == e.target.reset" kullanılabilir.
//+ API key ile birden fazla işlem yapğılacağı için local e atmak mantıklı ve doğru olan. Ancak API kişiye özel bir şey olduğu için, farklı bir dosyadan çağırabilir veya encrypt ya da decrypt eden bir fonksiyon içine gizleyedebişlirz.
//+ AXIOS un FETCH ten farkı : axios bir library olduğu için script edemeden kullanılamıo. Fetch native bir durum. Dolayısıyla vanilla ve native bir soru varsa fetch olacak. Artısı şu; veri gönderirken ve dödndürürken JSON çevirir. 
//+ APPEND vs PREPEND : prepend dedğimde ekleme eya da arama yaptığımda son eleman başa gelir. 
//+ APPEND vs APPENCHILD : appendchild da sadece obje verebilirken append de ise inner html ve obje verebilirz
//+ 

//? ********************************* JS Object Literals ********************************
//+ inheritence işlemlerde birbirinden türeme durumu olduğu için torunda kullanmadığımız ve fakat dedede belirttiğimiz özellikleri kullanabiliyoruz.
//+ inheritence ise extends ederek elde edileblir."class Magazine extends Book{ dfdjfısdj" gibi..
//+ ***POLYMORPHISM*** Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir. Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

//? ***********************************ES6 MODULES ************************************************
//+ m1.js dosyasına ek olarak , m2.js dosyası içerisinde yazdığın fonksiyonu export ederek m1.de kullanma durumu kabaca.
//+ module async çalışan bir yapı. Module kullanmak için lişve server gerekiyor. 
//+ <script type="module">
//+ değişkenler de export-import işlemine tabi tutulabilir.
//+ import edilecek js module yapıda olmalı
//+ "export default" her module de sadece birtane olabilir. normal export istediğin kadar yapabilirsin
//+ "export default" ile gönderileni  ''' import fonksiyon from  "mymodule.js" ''' gibi yazılıyor. süsülü vs kullanılmıyor. dolayısıyla export default ile gelenin adının bir önemi yok çünkü birtane geliyor. ANCAAAK, nrmal (named) export için isimn önemli....

//? *********************************** REACT ************************************************
//+ Javascript kütüphanesidir. Developed at 2011. 
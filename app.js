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

// function createPromise() {                        // createPromise adında bir func tranımladım. buna reslo ve reje. parametrelerini girdim. Aşağıda da çağırıyorum
//     return new Promise((resolve, reject))=> {
//             if (check) {
//                 resolve("value is succeeded");
//                 state = "fulfilled";
//             } else {
//                 reject("value is NOT succeeded");
//             }
//         }};

// createPromise()                     //burda çağırmamızın sebebi yularıdaki gibi oldsuğu sürece promise döner bi işe  yaramaöz. somutlaştyırıyoruz
//  .then((response) => {
//     clg(response);
//  })
//  .catch((error) => {
//     clg(error)}) 
// .finally(() => console.log("her zaman çalışır"));

// ---------------------------/



//* PROMISE devamı
//+ 

//? *************** SYNC & ASYNC     ******************** */
//* JS Timing , Event ve http isteklerinde asenkron çalışıyor. Aşağıdaki örnekte de senkron çalışan kod asenkronu bekelmez. 
// console.log("Ekrm");
// setTimeout( ()=>{
//     console.log("sanane")},2000);
// console.log("Yılmaztrk");



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
//+  Javascript kütüphanesidir. Developed at 2011. 
//+  DOM manipulation ı azalttığı için daha hızlı ve akıcı bir sistem sağlar. VIRTUAL DOM diye bir sistem kullanıyor.
//+  Virtual DOM; DOM un kopyası. kopya alırken de 2 kopya alıyor. "Shadow DOM". Değişiklikleri Virtual DOM a yazıyor ve hemen DOM'a aktarmıyor. Bir önceki kopy av eupdate edilmiş kopya arasındaki farkı bulan bir algoritmayla farkları güncelliyor. Bunlar RAM üzerinde olduğu için hızlı oluyor. 
//+  projeye js gibi uzantılardan farklı olarak terminalden ulaşabiliyoruz.
//+  inner HTML olmadan JS içinde doğrudan JSX dediğimiz; görüntüsü func.a benzeyen baya baya fonksiyon gibi ordan aklına gelsin JS-HTML karışımı olan bir blok giriyoruz. bunların da çocukları COMPONENTS
//+  COMP. aslında özetle; JS fonksiyonu ama bir return'e sahip. ve JSX döndürüyor.
//+  COMPONENT yazılıosa baş harfi büyük olacak.
//+  Component pamaretresi PROPS tur. 
//+  Comp.ler içerisindeki kodları tek halde göndermeye çalışıyor. Alt alta h1 p vs yazınca çevirmede skntı yaşıyor. Bunu aşmak için <> </> boş fragment le sarmallıyoruz. Ya da  sekmemin etiketi div ise örneğin <div> </div> gibi.
//+  Bu arada etiketi yazdıktan sonra import etmek için öneri gelmediyse etiketi seçip Ctrl+Space yaparak öneri sorgulanabilir.
//+  Her COMP içinde bir return barındırıyor. Bu return den sonra JSX kodumuzu yazıp fonk oluşturuyoruz.
//+  JSX içerisinde JS penceresi açmak istersen {} kullanıyoruz.
//+  "export const Fonk" diye bir Comp.i export etme yöntemi NAMED export'tur. import ederken import {Fonk} diye çağırmalısın. süslü içine almazsan hata verir.
//+  "export default" yalnızca bir kere yapılabilir.
//+  çift süslü ile key-value  yapısı şeklinde inline olarak CSS ile style verilebilir
//+  yapı içeirisnde yeni bir değişken oluşturarak da istediğim yerde kullanabiliyorum. Content.jsx de parStyle örneği
//+  Dahili bir resmi eklemek yapmak için eskiden olduğu gibi yol vererek ekleme imkanımız olmuyor. JSX buna izin vermiyor. Resmi import edip süslü içerisinde bir değişken gibi çağpırıyoruz. İSTİSNASI public klasörüdür. public klasörü içerisindeki imajı import etmeden de çağırabiliriz. public kalsörü ana dizin formatında gibi. 
//+  PROPS kısaca bir react objesidir. Aynı zamanda child Component e veri gönderme işlemi de denebilir.
//+  PROPS parent tan child a tek yönlü veri akışı sağlar. Yukarıdan aşağı bir veri akışından bahsediyoruz.
//+  
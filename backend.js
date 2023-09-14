//?  *********************************** 11.09
//+  JS camelCase yazmanı bekler
//+  const içerği değşitirilemese de çalışma mantığı daha hızlıdır.
//+  {  BURASI BLOCK_SCOPE   }    dolayısıyla burada tanımladığım değişken burada çalışır.
//+  ` `  backtick kullanılınca dışardan değişken çağırmanın yanında birden fazla satırda işlem yapılabilir.
//+  Array de endeks sabitken , müdahale etmek istersem Object kullanmam gerekiyor key-value ilişkisi.
//+  JSON şeklinde teknik olarak veri tipi yoktur. Obejct ve array lerin string hali denebilir. 
 /*  let v = '  ' , v bir değişkene sahip ancak verisi yok
    v = null   da ise v bir değişkene sahipse de değişkenin verisi dahi yok manasındadır.  null False gelir.*/
//+  (şart)? "x" : "y"     şeklindekli yapı ternary  olarak geçio
//+  for ve while loops larına dair anlatım ilk ders son saat
//+  while ve do-while temlede aynı. while da döngüye girmeyebilir şart sağlanmıyorsa , do while da ise mutlaka girilir.
//+  arrow func'ta kod tek satırsa süslü ve return yazılması gerekmez.  Global ScopeTur
//?  *********************************** 13.09
//+  index.js dosyasında çalışırken projeyi açıp olanları görmek için terminale "node index.js" yazıyoruz
//+  nodemon ile çalıştırıp girdiğimde her seferinde komut girmeme gerek kalmadan otomatik olarak render yapıyo
//+  file başına "use strict" yazılırsa kod denetimi daha katı hale gelecek hata görmek olanaklı hale gelecektir.
//+  obje içinde tanımlanmış fonksiyona "method" ,
//+  obje içindeki değişkene "property" deniyor genel tanım olarak.
//*+  "this"  aslında içinde bulunduğumuz objeyi kast ediyorum demektir.  -->    return this.brand    gibi. ANCAK, arrow func içine yazılan bir this söz konusuysa, arrow func global çalıştığı için bütün sayfayı temsil eder. Yalnızca içinde bulunduğu block'u değil.   
//+  ARRAY DESTRUCTURING
/*   const testArray = [ 'value0', 'value1', 'value2', 'value3' ]
            const var0 = testArray[0]
            const var1 = testArray[1]
    Sıralama Önemli!
            const [ firstItem, secondItem ] = testArra*/
/*  REST Operator (En sonda olmak zorunda)
            let [ first, second, third, ...others ] = testArray  --> testArray içerisindekileri al; 1.endk first, 2.endk second ve kalan ne varsa others olarak değişkene at,   yeni bir array oluşuyor.
            const [ ...arr ] = testArray */
//*+  npm i express --save       ve        npm i nodemon --save-dev           komutları lazım olanlar   
//+  Rest operator geri kalanaı topalrken , spread ise dağıtmaya yarar. 
//*+  const newArr =[...testArray, 'new-value', 'new-value2' ]    burada ilk arrayi içine dağıttı yeni dğerler eklendi.    
/*   const newObj = {
        ...Car.colors,
        newKey: 'new-value'}   -->  Burada da daha önceden tanımlanan bir objeden yeni bir obje türetiliyor. Spread operatörü ile yazılarak yeni obje içerisine yeni keyve valular eklendi  */
//+  Object to JSON ------->  const json = JSON.stringify(Car)       ana komut JSON.stringify
//+  JSON to Object ------->  const newObj2 = JSON.parse( json )     ana komut JSON.parse
//+  Object to Array ------>  const arr = Object.entries(Car)
//+  const arr2 = Object.values(Car)   -----> yalnızca value değerlerini almka için
//+  const arr3 = Object.keys(Car)     -----> yalnızca key değerlerini almka için

//?  *********************************** 14.09
//+  class'lar soyut instance ise somuttur. class bir şablon-template gibidir ,instance bunu somutlaştıran hayata geçirilenm obje halidir.
/*      Class Declaration:
                class PascalNamedClassName { ... }

        Class Expression:
                const PascalNamedClassName = class {
        undefinedProperty // Onle definition ('undefined')
        extraField = 'field-value'

        methodName1() {
        return this    
}

        methodName2() {
        return this.extraField
} */
//+  INHERITANCE class'ı en tepede tanımlanan alt class'ları kapsayan bir class'tır.  vehicle -> car -> ford    gibi
//+  class Car extends Vehicle {}  dendiğinde Car Vehicle'ın tüm özelliklerine erişebilir  
//+  Public Property : heryerden ulşaılabilir, hertürlü değişkliğe açıktır.  
//+  _protected Property: oğul class'tan yani extend ettiğim class'tan erişebilirken başka erişim mümkün değil
//+  #private Property ise yalnızca Vhicle'dan erişebiliyoruz. kendi class'ı dışında erişim mümkün değildir.
/*   Override yapma lütfen:
    _protectedMethod() {
        console.log('Vehicle.protectedMethod()')
        return true
    }

    #privateMethod() {
        console.log('Vehicle.privateMethod()')
        return true
    }

    getDetails() {
        console.log('Vehicle.getDetails()')
        this.#privateMethod()
        return this.vehicleType + ' is ' + this.privateProp
        return this.vehicleType + ' is ' + this.#privateProp // Undefined.
    } */ 
//+  "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.) Direkt class ile erişmek istediklerimizi static ile işaretleriz.
//+  ABSTRACTION: Soyutlama/Modelleme (Aynı amaç için kullanılan değişken ve methodları bir class içinde yazıyor olması)
//+  ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private attre erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
//+  OOP NEDEN KULLANILMALI? CLASS NEDEN KULLANILMALI?
//+  
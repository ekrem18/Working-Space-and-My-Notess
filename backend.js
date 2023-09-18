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
//*+  fonk içinde tanımlanan var değişkeni , değeri globale taşıyabileceği için dışarda kullanmamız mümkün

//?  *********************************** 14.09
//*+  class'lar soyut instance ise somuttur. class bir şablon-template gibidir , ""instance"" bunu somutlaştıran hayata geçirilenm obje halidir.
/*      Class Declaration:
                class PascalNamedClassName { ... }

        Class Expression:
                const PascalNamedClassName = class {
                  undefinedProperty 
                  extraField = 'field-value'

                methodName1() {
                  return this    
}

                methodName2() {
                  return this.extraField } */
/*      const instance = new PascalNamedClassName('parameter-1-value', 'parameter-2-value')
                console.log( instance )
                console.log( instance.methodName2() )    --> instance ile türetilen obje içerisinde ' atanan class'ın tüm metod ve propert'lerine erişişm mümkün oluyor.
                instance.extraField = 'new-value' --------->  burada instance ile class'ın içindeki değişkenin değerini değiştiredebilirzi ancak; class içerisidne değişiklik olmaz, instance'da geçerlidir.  Class isminde bir obje türetiliyor   */
/*      "new Class" ile obje oluştururken veri göndermek için "CONSTRUCTOR" methodu kullanılır.
                constructor (parameter1, parameter2 = 'default-value') {
                        this.parameter1 = parameter1 }      */         
//+  Class bir şablon mantığıyla oluşiturulduğu için, aynı class'tan türetilen farklı değişken isimlerine atanmış objeler oluşturmamız mümkün oluyor dolayısıyla.          
//+  INHERITANCE class'ı en tepede tanımlanan alt class'ları kapsayan bir class'tır.  vehicle -> car -> ford    gibi
//+  class Car extends Vehicle {}  dendiğinde Car Vehicle'ın tüm özelliklerine erişebilir  
//+  INHERITANCE yapıda sayı sınırı yok. her zaman bir öncekine bağladığımızda tüm üst-soy yapıya dahil olur.
//*+  Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//*+  Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//*+  Overload: Üst metodla aynı isimde ama farklı yapıda (parametre adet/tip) yeni method oluşturma. (aynı anda ikiside aktif) (JS desteklemez)
/*    getDetails() {  ------->aynı isimli başka bir instancew var. inharitance özelliğinden faydalanarak üst soydan super ile oradaki bilgiye de erişiyoruz, yeni eklenmiş oluyor.
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
            vehicleType: super.getDetails(),              */  
//*  super(XClass) --> dersem parent'ın CUNSTRUCTOR'ına ulaşıyorum.
//*  super.getDetails()  -->  gibi bir kullanımda ise parent'ın özelliklerine ulaşıyorum 
//+  Public Property : heryerden ulşaılabilir, hertürlü değişkliğe açıktır.  
//+  _protected Property: oğul class'tan yani extend ettiğim class'tan erişebilirken başka erişim mümkün değil
//+  #private Property ise yalnızca Vhicle'dan erişebiliyoruz. kendi class'ı dışında erişim mümkün değildir.
/*   Override yapma lütfen:  protected olduğu için denilmekte, korumada şu an
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
//+  # ile tanımlanana bir değişken instance olarak kullanmama mümkün değlkne setter metdo ile yani , yeni oluşturacağım set xMethod ile değiştirmem mümkün hale geliyor.
//+  set ile oluşturduğumetodu get method ile okuyabilirim. Değiştirme ayrı, erişip okumak ayr ıişlemlerdir.
//+      
//+  "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.) Direkt class ile erişmek istediklerimizi static ile işaretleriz.
//+  ABSTRACTION: Soyutlama/Modelleme (Aynı amaç için kullanılan değişken ve methodları bir class içinde yazıyor olması)
//+  ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private attre erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
//+  OOP NEDEN KULLANILMALI? CLASS NEDEN KULLANILMALI?       
//?  *********************************** 16.09 NODE JS
/*      C  create -> Post
        R  read ---> Get
        U  update -> Put
        D  delete -> Delete  */ 
//+  put : komple güncelleme
//+  patch: kısmi güncelleme
//+  GET isteği, belirli bir kaynağı almak için kullanılır. Örneğin: web sayfalarını veya veriyi almak için kullanılır.
//+  POST isteği, belirli bir kaynağa yeni veri eklemek için kullanılır. Genellikle form verilerini veya JSON verilerini sunucuya göndermek için kullanılır.
//+  PATCH isteği, belirli bir kaynağı güncellemek için kullanılır, ancak yalnızca değiştirilmesi gereken verileri içerir. Diğer verileri etkilemez 
//+  PUT isteği, belirli bir kaynağı güncellemek veya değiştirmek için kullanılır.Tüm kaynak verilerini güncellemek için kullanılır ve eksik verileri sıfırlar.
/*   NODEJS
     create index.js
     create .gitignore (gitignore.io)   ---> gitignpre dosyamızı kendimiz oluşturup, içeriğini linkten alıyoruz
     $ npm init -y     */
//+  2.DERS 12.40 Kısa özet sever kurulumu 👍
//*+  response.end vermek zorundayız bu arada noktayı sonlandırmamız lazım. res. ya da ahmet ya da mehmet 2.parametere yani.
/*   ◻ const app = http.createServer( (req, res ) => {
         res.end(" sErver is runnin' ")
} ).listen (8000, ()=> clg.("server run : http://127.0.0.1:8000"))  */  
//+  req gönderdiğimizde yularıda clg yapsak gelecek 3temel bilgi :  ***header  ***URL  ***method(get)
//+  if (req.url == '/') {res.end('main page')} ---->   kullanıcı ana menüye gelmişse ana menü de gibi bi manaya geliyor burası. else if path1  mesela, else 'server is running     gibi devam ettirebilirim , aralarda ****==**** yazıyoruz.  
//*+  npm i dotenv    ---->  diyerek env ortamındaki verilere erişim sağlamamıza olanak sağlıyor. Dışarıdan içeriye okunmasını istemdiğimiz veriler bilgiler için
//*+  çalışıtğım terminalde "ENV_NAME=ENV_VALUE node index.js"  yazarak   index.js dosyası içerisine dışradan birşey göndermiş oluyorum. Gönderdiğimi yakalamak için "proccess.env.ENV_NAME"  diyorum  (uzun yol)
//+  .env klasörü açarak KEY = value olarak tanımlayıp, .env gitignore'da olduğu sürece kullanabilirz. APi işlemleri gibi hatırlatma. Ancak bunu kullanabilmem için 
//+  require("dotenv").config()  ---> bikere alışıtırğ tepeye koyuoprz keyfimize bakıorz; // $ npm i dotenv // https://www.npmjs.com/package/dotenv   
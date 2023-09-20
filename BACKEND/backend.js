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
//*+  class'lar soyut instance ise somuttur. class bir şablon-template gibidir , ""instance"" bunu somutlaştıran hayata geçiren obje halidir.
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
                instance.extraField = 'new-value' --------->  burada instance ile class'ın içindeki değişkenin değerini değiştiredebilirzi ancak; class içerisiden değişiklik olmaz, instance'da geçerlidir.  Class isminde bir obje türetiliyor   */
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
//+  Public Property : heryerden ulşılabilir, hertürlü değişkliğe açıktır.  
//+  _protected Property: oğul class'tan yani extend ettiğim class'tan erişebilirken başka erişim mümkün değil
//+  #private Property ise yalnızca Vehicle'dan erişebiliyoruz. kendi class'ı dışında erişim mümkün değildir.
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
//+  # ile tanımlanana bir değişken instance olarak kullanmam mümkün değilken setter metod ile yani , yeni oluşturacağım set xMethod ile değiştirmem mümkün hale geliyor.
//+  set ile oluşturduğumetodu get method ile okuyabilirim. Değiştirme ayrı, erişip okumak /süslemek de ayrı işlemlerdir.      
//+  "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.) Direkt class ile erişmek istediklerimizi static ile işaretleriz.
//+  Normal şartlarda bir Class'ın içine erişmem için onu bir instance'a aktarmam lazım. Static ile bunu ytapmadan erişmek mümkün oluyor işte
/*   Direkt class ile erişmek istediklerimizi static ile işaretleriz.
     Statik property veya methodlara instance ile erişilmez.  Yani Static'ler instance'a aktarılmaz. 
        static staticProp = 'static value'
     Static methodlarda this ifadesi sadece statikleri çağırır.
        static staticMethod() {
            console.log('Static Method çalıştı')
            return this    }   */
//+  ABSTRACTION: Soyutlama/Modelleme ; Aynı amaç için kullanılan değişken ve methodları bir class içinde yazıyor olması
//+  ENCAPCULLATION: Kapsülleme/Ayrıştırma Kodların gizliliği, private attre erişilemiyor olması ve birbirinden bağımsız çalışmaları.
//+  OOP NEDEN KULLANILMALI? CLASS NEDEN KULLANILMALI?
//*  MODULES : JS'de NodeJs'de bir dosya içerisine dosya çağırma komutu "require"  --->  require('./module/index.js')  --> şindex.js default bir dosya ismi olduğu için, js yazmasak ve dahi index.js yazmasak da module içerisindeki index.js'yi arar.
/*  const test = require('./module/')      
    test()    ----->    örnek kullanım.. Ancak burda da başka dosyadan import işlemi yaptığımız için kaynaktran export olmalı. komut olarak da module.exports = test */  
/*  const test1 = function() {
    console.log('test1 çalıştı.')
}
    const test2 = function() {
    console.log('test2 çalıştı.')
}
    const test3 = function() {
    console.log('test3 çalıştı.')
}
    module.exports = [
        test1,
        test2,
        test3]        ------------> birden fazla export  */    
//+   const [ test1, test2, test3 ] = require('./module/') ------> yukarıdakinin importu   
//+  module.exports = {
//     test1: test1,
//     test2: test2,
//     test3: test3, } export array olarak yapılabildiği gibi obje olarak da yapılabilir. importunun da obje yapılması lazım
//+  Göndereceğim  objedeki keyt ve value'lar aynı isimliyse test1,test2 gibi gönderevbilirzi.   
//+  module.exports.test1 = function() { } ---> alternatif export 
/*   module.exports = {
        test1: function() {
        console.log('test1 çalıştı.')
    },
        test2: function() {
        console.log('test2 çalıştı.')
    },
        test3: function() {
        console.log('test3 çalıştı.')
    },
        variable: 'new-value'
}   */   
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
     $ npm init -y
     create .gitignore (gitignore.io)   ---> gitignore dosyamızı kendimiz oluşturup, içeriğini linkten alıyoruz      */
//+  NodeJS'te server işlemlerimi yapan modulün adı http modulü. bu modulü require ile çağırıyoruz. Built-in modül olduğu için ayrıca yükleme yapmama gerek kalmıyor.
/*  const http = require('node:http')
        const app = http.createServer((request, response) => {
        response.end('<h1> Welcome to NodeJS Server </h1>') })
    app.listen(8000, () => console.log('Server Runned: http://127.0.0.1:8000'))    --------------> öncelikle http adında bir server oluşturduk. Burada göndewreceğim req ve gelecek res için paramatre tanımladım. ardından sistem işliyorsa response ile gelecek olan cevabı girdim.  localhost'ta 8000 de çalışması için listen dedim.   */       
//*+  2.DERS 12.40 Kısa özet SERVER KURULUMU 👍.
//+  res. ya da req yazımı önemli değil . ahmet ya da mehmet olabilir. Ancak indeks sırası işlev açısıdan gerekli 
//*+  response.end vermek zorundayız bu arada noktayı sonlandırmamız lazım. response end vermezsek browser sonsuz döngü enzeri bir duruma giriyor.
//+  req gönderdiğimizde yukarıda clg yapsak gelecek 3temel bilgi :  ***header  ***URL  ***method(default method ise get)
//+  if (req.url == '/') {res.end('main page')} ---->   kullanıcı ana menüye gelmişse ana menü de gibi bi manaya geliyor burası. else if path1  mesela, else 'server is running     gibi devam ettirebilirim , aralarda ****==**** yazıyoruz.
/*   http.createServer((req, res) => {
    if (req.url == '/') {

        res.statusCode = 404 // Default: 200
        res.statusMessage = 'Not Found' // Default: OK

        res.setHeader('Content-Type', 'text/html')
        res.setHeader('another-header', 'another-value')

        res.write('* Satır1')
        res.write('* Satır2')
        res.write('* Satır3')
        res.end()
        
    } else if ( req.url == '/api' ) {       */   
//*+  npm i dotenv    ---->  diyerek env ortamındaki verilere erişim sağlamamıza olanak sağlıyor. Dışarıdan içeriye okunmasını istemdiğimiz veriler bilgiler için
//*+  çalışıtğım terminalde "ENV_NAME=ENV_VALUE node index.js"  yazarak   index.js dosyası içerisine dışradan birşey göndermiş oluyorum. Gönderdiğimi yakalamak için "proccess.env.ENV_NAME"  diyorum  (uzun yol)
//+  .env klasörü açarak KEY = value olarak tanımlayıp, .env gitignore'da olduğu sürece kullanabilirz. APi işlemleri gibi hatırlatma. Ancak bunu kullanabilmem için 
//+  require("dotenv").config()  ---> bikere alışıtırıp tepeye koyuyorz keyfimize bakıorz; // $ npm i dotenv // https://www.npmjs.com/package/dotenv   
//?  *********************************** 18.09 SQL
//+  Veri tabanlarında da veri tipleri olur; Numeric , Date/Time, Character/String, Unicode Character/String, Binary, Miscellaneous
/*   Veritabanı uygulamalarında metinleri tutmak için kullanılan alanlardan iki tanesi Char ve Varchar dır.
Char veritipi, 0 ile 255 karakter içeren verileri tutabilir.
Varchar ise 65bine yakın karakterde veri saklayabilir.
Eğer bir alan için Char tanımlamış sanız, o alanda minimum değer olsa da maksimum değer saklansa da kapladığı boyut değişmez.
Varchar kullanırsanız sakladığınız verinin büyüklüğü kadar yer kaplar.
CHAR(10) ve Varchar(10) alanları farklı boyutlarda yer kaplar.
Char sabit uzunlukta veri tipi olarakta bilinir, Varchar ise değişken uzunlukta veri tipi olarak bilinir.
Devamlı benzer veya aynı verilerle çalışıyorsanız seçmeniz gereken tip Char olmalı, örneğin T.C. Kimlik numaralarının tutulduğu bir alanın tipiniz belirlemeniz gerkiyor, T.C. Kimlik numaraları 11 adet sadece sayılardan oluştuğu için Char kullanmanız uygun olacaktır. */
//+  Relation types arasında teknik olarak veritabanı oneToMany'den anlar.
//+  ORM ; OOP kodlarını SQL'e çeviren arabirim gibi. 1.ana özelliği. OOP mantığından çıkmadan data işlemi yapaibilirm
//+  2.ana özellik, proje ortamında SQLite kullanmış olabilirim. Canlıya aldğımda kodlarıma hiç dokunmadan işlem yapabiliyorum ORM sayesinde. Cross Platform
//?  *********************************** 20.09 SQL 
//+  Özel karakter kullanılmıyorsa LIKE kullanmöa
//+  SELECT * FROM Customer WHERE Address LIKE '627 Broadway'  ---> 627 Broadway bütün olarak aranacak
//+  SELECT * FROM Customer WHERE Address LIKE '1498 %'        ---> Arama yapacağım adresin tümünü hatırlamıyorum. 1498 ile başlayan bir adres ve bundan sonraki karakter sayısı herşey olabilecek şekilde arama yap diyorum.
//+  SELECT * FROM Customer WHERE Address LIKE '% langer %'    ---> Başında ne olursa olsun, sonun da kaç karakter varsa da içinde bir yerde ' langer '  geçenleri getir. İçinde aramanın tam kaşılığı
//+  SELECT * FROM Customer WHERE Address LIKE '%rue%';        ---> içinde "rue" geçen kayıtlar.
//+  SELECT * FROM Customer WHERE Address LIKE '_a_%'          ---> 2.karakteri a olan ve en az 3 karakterli olan adresleri getir.  
//+  SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'        ---> Ülke kodunu hatırlamıyorum, telefon numarası 030 ile başlayan numaraları getir. 
//+  SELECT * FROM Customer WHERE Phone LIKE '+__ 030%' AND FirstName='Niklas' ---> İsmi Niklas ve telefonu da 030 ile başlayan kimse onu getir. 
//+  ORDER BY sıralama komutu; ASC ise A-Z'ye 0-9'a, DSC tam tersi
//+  SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil') AND CustomerId > 12 AND Company NOT NULL ORDER BY Company ASC ---> Country :USA ve Brazil içinde CustomerId'si 12'den büyük olup Company bilgisi bulunan şirketleri A-Z'ye sırala diyoruz
//*+  SELECT - WHERE - ORDER BY gibi müfredat sırasına göre yazma sırası var.
/* - Piyasada standartı her satıra ayrı ayrı yazmaktır: Ana komutları her satıra dağıtıyoruz kabaca
SELECT * 
FROM Customer 
WHERE Country IN ('USA', 'Brazil') 
	AND CustomerId > 12
	AND Company NOT NULL 
ORDER BY Company ASC 
*/ 
//+  LIMIT komutu ile belli sayıda kayıt getirme komutu
//+  SELECT * FROM Customer LIMIT 0, 10                      ---> Sıfırıncı kayıttan başla 10 ADET/TANE kayıt getir. Ama sıfırdan başlatcaksam LIMIT 10'da denebilir
//+  SELECT * FROM Customer LIMIT 10, 5                      ---> İlk 10 kaydı getirme, 11den itibaren 5 Tane kayıt getir. 
//*+  Sadece JOIN yazıyorsa bu default olarak INNER JOIN'dir
//+  
//? ***********************************  promise SYNTAX  *********************************** 
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

//? *********************************** SYNC & ASYNC *********************************** 
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
//*+  COMP. aslında özetle; JS fonksiyonu ama bir return'e sahip. ve JSX döndürüyor.
//*+  COMPONENT yazılıosa baş harfi büyük olacak. Dosya adı da.
//*+  Component pamaretresi PROPS tur. 
//+  Comp.ler içerisindeki kodları tek halde göndermeye çalışıyor. Alt alta h1 p vs yazınca çevirmede skntı yaşıyor. Bunu aşmak için <> </> boş fragment le sarmallıyoruz. Ya da  sekmemin etiketi div ise örneğin <div> </div> gibi.
//*+  Bu arada etiketi yazdıktan sonra import etmek için öneri gelmediyse etiketi seçip Ctrl+Space yaparak öneri sorgulanabilir.
//+  Her COMP içinde bir return barındırıyor. Bu return den sonra JSX kodumuzu yazıp fonk oluşturuyoruz.
//+  JSX içerisinde JS penceresi açmak istersen {} kullanıyoruz.
//*+  "export const Fonk" diye bir Comp.i export etme yöntemi NAMED export'tur. import ederken import {Fonk} diye çağırmalısın. süslü içine almazsan hata verir.
//*+  "export default" yalnızca bir kere yapılabilir.
//+  Inline CSS yapıyorsak style attribute kullanılarak çift süslü ile key-value yapısı şeklinde style verilebilir. Key'ler camelCase şekline yazılırken, value lar tırnak içerisinde.
//+  inline CSS benzeri bir yapı da değişken tanımlayarak style işlemi yapmaktır. Ör: bütün p lere etki edecek bir işlem olsun istiyorum. const parStyle diyerek örneğin fontSize, textAlign gibi değerler belirledim. Sonra aşağıda p içerisinde style etiketi ile style ={parStyle} yaparak işi kolaylaştırıyorum. Bu değişkenler global olabilecğei gibi harici bir dosyadan da alınabilir.!
//+  CSS dosyaları doğrudan import edilir export edilmelerine gerek yoktur.
//+  yapı içeirisnde yeni bir değişken oluşturarak da istediğim yerde kullanabiliyorum. Content.jsx de parStyle örneği
//+  Dahili bir resmi eklemek yapmak için eskiden olduğu gibi yol vererek ekleme imkanımız olmuyor. JSX buna izin vermiyor. Dahili vübir resim eklemek için import apmak gereklidir. Ancak, public kalsöründeki resimler importsuz bir şekilde erişilebilir.
//+  PROPS kısaca bir react objesidir. Aynı zamanda child Component e veri gönderme işlemi de denebilir.
//+  PROPS parent tan child a tek yönlü veri akışı sağlar. Yukarıdan aşağı bir veri akışından bahsediyoruz.
//+  {props.name} diyerek name değişkenini atamış oluyorum.

//?  *********************************** REACT BAŞLANGIÇ KURULUM *********************************** 
//+  " yarn create react-app . "  
//+  ""yarn add react-bootstrap bootstrap""

//?  *********************************** 3.DERS Module CSS & SASS *********************************** 
//+  Aynı seviyede iki component yani sibling e import edilecek farklı props lar varsa ayrı ayrı import etmektense bir üst compt. e import edilerek oradan çekilir. "Props Drilling"
//+  JSX de etikete class vermek istiyorsam className vermeliyiz. hatırlatma
//+  CSS dosyasını hazırlayıp istediğimiz jsx dosyasına gidip impot ediyoruz.
//+  Destructure nedir peki? Kutuyu havada-karada açma? örneğin card.jsx dosyasında const Card = ({lang, btn, img}) olarak tanımlama yapıp havada açıp yakalıyorum bilgiyi.
//+  Componentler arasında props gönder-al mevzuu ile alakalı olarak, key'de yazılanın önemi yok onu biz belirliyoruz. Yeter ki gönderildiği gibi çağırılsın. lang={data} dediysem languages olarak çağırmalıyım
//+  Peki aynı kalıpları kullanırken sürekli birbirini tekrar eden kodlar mı yazıyoruz? HAyır,react mantığına aykırı. Gelen bilgi bir ARRAY olduğu için İTERASYON yapıyoruz. Ne yapmamız lazım peki? daha öncede dediğimiz şey JSX içerisinde JS yazacaksak { } açarız. ÖR: {data.map()}  For Each kullanmıyoruz. Çünkü For Eaach bünyesinde return barındırmıyor 
//+  İTERASYON KODUNU YAZIYORUM JSX İÇİNE     { data.map((id, language, img, btnName)  =>   <Card  id={id}  lang={language}  img={img}  btn={btnNsme}   />)}   data kadar dönüyoruz. Card yapısı içeriisnde gerekli olan bilgi hangisiyse onu da map ten sonraki parantezle yakalıyoruz
//+  Module CSS ile derlenmiş Javascript vari bir dosya elde ediyoruz. Objeye dönüyor diyebilirz.
//+  Class isimleirni verirken JS oratmında Kebap Case kullanmak mümkün olmadığı için ["btn-blue"] şeklinde yazılmalı.
//+  Objeleri classlara çevirirken yeniden isimlendirip, unique hale getirmek için kendi bir değer basıyor ki CSS de girdiğimiz değerler birbirine girmesin- çakışmasın. 
//+  Özetle module CSS; module.css'de derleyici CSS class'larini alarak bunlari unique olacak sekilde yeniden adlandirir. (Ornek: card_title__XaSde). Bu durumda, global scope problemi ortadan kalktigi icin stillerin baska class tarafindan ezilmesi (overriding) engellenir. CSS module Webpack, Browsify gibi tool'lar ile kullanilabilir.
//+  farklı dosyalar hatta yolda olsalar dahi index dosyasında birleştiği için bu dosyalar, birbirlerini ezme durumları her zaman mümkün. module css bu işe yarıyor özetle. Dolayısıyla düz css yerine module css ile çalışarak derlemesine izin veriyoruz
//+  Module css doğrudan kullanılabiliyorken, SASS npm i sass gibi bir komutla terminalden önce indirme yapmalıyız.  Node JS varsa yarn add sass kütüphaneisini projeye eklenecek
//+  <div className={CardStyle.container}>
//      {data.map((item) => {
//        const { id, name, job, img, comment } = item   buradaki destructure da burda olmalı return içinde olmaz.
//        return (                                       burdaki return'den sonra wrappper olarak div kullanıldı
//          <div key={id} className={CardStyle.card}>    key propu burda veriliyor. çünkü birden fazla olacak olan yapı burdaki div yapısı..
//            <h1>{name}</h1>                        
//            <h3>{job}</h3>
//            <p>{comment}</p>
//            <img src={img} alt="img" />
//            <div className={CardStyle.buttons}>
//              <button className={CardStyle.small}>Small</button>
//              <button className={CardStyle.large}>Large</button>
//            </div>
//          </div>
//        )
//      })}
//   </div> 

//?  ***********************************  5.DERS EVENTS, CLASS COMP., STATES *********************************** 
//+  ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede, React ortaminda kullanilan event'larin bilindik tarayicilarda sorunsuz calismasi saglanir.
//+  Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi takdirde event fonksiyonu event gerceklesmeden cagirilir. Örnek aşağıda
//*+  ÖR::::  < button onClick={() => alert("click me!")}>  Bu doğru kullanım.        yanlış olan ise    < button onClick{alert("click me!")}>
//+  Bir compo.'in DOMa yeniden basılmasını sağlayan 2şey var. Yukarıdan aldığı prop varsa ve propta değişiklik varsa yeniden render söz konusu olur. İkincisi; Bu comp.'in içerisinde local bir state varsa ve state'te değişiklik söz konusuysa re-render yapılır. Bunun dışında Component ilk açılışta DOMa basılır sonra basılmaz denilebilir. React mantığı bu
//+  onClick eventiyle "let message= EVENTS " değerinin console'da guncellendigini ancak DOM'da guncellenmedigini gorduk. Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri static olarak kabul etmesinden kaynaklanir.React bunu DOM islemlerini minimize etmek icin yapmaktadir. REACT'a hangi elementleri interaktif oldugu belirtilmelidir. React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir. State, elementlerin degisiklik durumlarini tutan nesnelerdir. ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir. 1. Statefull Classes (Class Components). 2. Hooks (Functional Components). Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik. Yaygin kullanim Fonksiyonel Component'lerdir.
//+  Kısaca DOMa basılacak değerlerin hangilerini olduğunu belirtmemiz gerekiyor. Buna da STATE deniyor.
//+  STATE aslında bir React objesidir. 
//*+  Hook bir array döndürüyor.  const [counter , setCounter] = useState()  dersen    counter:başlangıç değeri, ilk indis denebilir --- setCounter: ise bunu değiştiren metod..
//+  Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan ozel fonksiyonlardir. React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimi cok azaltmistir.
//*+  HOOK Kullanim KURALLARI: ****1. İlk olarak import edilmeliler.  import { useState } from "react";       *******2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde kullanilmamalidir.     *******3. Hook'lar sadece React Fonksiyonel componentleri icerisinde ve Custom hook'lar icerisinde bir hook cagrilabilir. Başka bir Hook içerisinde ya da Component içerisinde çağırıyoruz. Normal Javascript fonksiyonlari icerisinde cagrilmamalidir.
//+  Stateler-Hook RAM de tutulduğu için refresh halinde default değere geri döner.
//*+  State tanımlarken object olarak girilmesi de mümkündür. ***********  const[kisi, setKisi] = useState( {name:"Ahmet", age:"30", salary:"50000"} )
//*+  Bu obje içerisindekileri yakalarken de artık doğrudan name demiyoruz. kisi.name ,, kisi.age ,, kisi.salary yazıyoruz
//*+  Bir event tanımlarken;   
//*+  onClick={()=> setKisi({...kisi, name:"Mehmet"}) }  diyoruz. Spread ile objeyi açıyoruz. objeyi açtıktan sonra değiştirmek istediğimiz değere key-value mantığıyla da bilgiyi giriyoruz. Eğer spread ile açmazsak objenin içerisindeki değiştirmek istediğimiz değer haricinde bütün obje değişikliğe gider..
//+  Eğer objenin tamamını değişitmek ya da silmek gibi bir event içerisine girmek istiyorsak spread yapmaya gerek yok.
//+  "predeploy": "yarn run build",

//?  ***********************************  6.DERS EVENTS DEVAM ve BOOTSTRAP *********************************** 
//+  Bootstrap React ortamında 2 şekilde kullanılabilir. 1.si klaik class isimleriyle , 2.si "react bootstrap" diyoruz. 
//*+  """"yarn add npm install react-bootstrap bootstrap""""" diyerek kuruyoruz. CSS başlığı altındaki "import 'bootstrap/dist/css/bootstrap.min.css';"   linki  App veya index js ye import ediyoruz. klasik bootstrap sayfası üzerinden işlem yaparken kodu jsx ortamına çevirmemiz lazm.
//+  Form elşementi içerisidne type ı submit olan bir button varsa, default olarak formu alır gönderir ve sayfayı siler. Dolayısyla bir evevnt tetikler gibi diyebilriz. 
//+  input a yazılan texte dair her değişikliği "anlık olarak" görmek ve kullanmak için "onChange" event ini kullanıyoruz.
//*+  EventHandler tanımlarken Component içinde return ün üstünde yazıyoruz. yani input içerisinde onChange={handleUsername}  tanımladım. yukarı çıkıyorum return üstünde ancak compo. içerisinde kalarak ""const handleUsername = () => { } ""tanımını yapıyorum.
//+  Buradan gelen bilgiyi saklamak ve kullanmak için de napıyorz useState oluşturuyoruz. bunu da kullanmak için en yukarda bu stati import {useState} from "react" diyerek çağırıyoruz.
//+  OnChange event'ı input degeri her degistiginde tetiklenir. Biz de yazdıgımız event handler araciligi ile State'i guncelleyebilmis oluruz.
//+  Value propu inputlara başlangıç değeri vermemizi sağlar. ve Value'a verilen değer değişken olmalıdır. Statik değer verilirse render durumu ortaya çıkıyor. o yüzden "value = {bir state gelir genelde}"
//+  Yukarıda bahsettiğimiz submit'in default davranışı neydi? Submit ediyor bilgi görünüyor ve refresh ederek formu siliyor. Form silinince elde bir değer kalmadığı için event'in doğuştan gelen bu davranışını engellemek adına "preventDefault " kullanıyoruz.
//*+ Keyboard Clipboard Notes
//+  Mesela input'a sadece yazı girilebilsin istiyorum. input type number olsa yazı giremiyorum, text desem ne varsa girilebiliyor. KeyCode a erişmek için Keyboard Event'larını kullanmamız gerekiyor. onKeyDown eventi kullanılıyor. Napıoruz Ascii kodlarından keycode değerine bakarak numaraları devre dışı bırakabiliriz
//*+  e.keyCode ile ascii kodunu yakaladık. if ile e.keyCode aralığını girdik. Uyarı yazdırdık numara girme diye ancak gene de yazmaya devam eder. Çünkü event'in doğal davranışı budur. Bunu engellemek için e.preventDefault diyoruz. 
//*+  const handleKeyDown = (e) => {
    //if (e.keyCode >= 48 && e.keyCode <= 57) {
    //    alert("Please dont enter a number")
    //    e.preventDefault()
//*+ Mouse Events Notes   
//+  CONDITIONAL RENDERING : koşula bağlı olarak bir elementin gösterip- gösterilmemesi durumuna denir.

//?  *********************************** NBA TW NOTES *********************************** 
//+  Css ve Bootstrap i import ederken hepsinde kullanacaksak eğer kapsayıcı olan APP.JS üzerinde yapmak mantıklı olan. 
//+  Flex Wrap verirken işlemesi için genişlik tanımlanmıiş olmalı
//+  position:relative kapsayıcı div e veriyoruz ki önce ,position:absolute verdiğimizde bu div le sınırlı kalsın.
//*+  yarn.lock varsa "yarn add" , package.lock varsa "npm install"  tercih edilebilir.

//?  *********************************** APPOINTMENT APP NOTES *********************************** 
//+  Bootstrap pratik img class'ı --> "img-thumbnail" küçültmer ve border veriyor.
//+  React Bootstrap kullanıyorsam import da gerekli.
//+  onClick'deki herhngi bir değişklik "state"in değişimine, onun da değişimi aşağıdaki "prop"un değişimine, o da "render"a yol açıyor.  

//?  *********************************** LIFE CYCLE-USE EFFECT METHODS *********************************** 
//*+  LifeCycle methods -->  Mounting , Updating , Unmounting   şeklinde 3ana başlıkta toplayabiliriz
//+  Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir. Ornegin bir component olusturuldugunda, DOM'a basildiginda,guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin lifecycle metotlari kullanilabilir. 
//+  En bilindik lifecycle metodu render() metodudur.
//+  Bir component'in olusturulmasi (constructor),Bir componentin DOM agacina eklenmesinin hemen sonrasi(componentDidMount),, Bir component'in DOM'a basilmasi (render) (Optional) Bir componentin guncellenmesinin hemen sonrasi (componentDidUpdate),, Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount).
//+  componentDidMount    --> ilk render sonrası hemen çağırılan ve bir kereye mahsus yapılacak ieyler için kullanılabilir. Api'den veri çekme gibi
//+  componentDidUpdate   --> ilk render haricinde; bi component güncellendiğinde çalıştırılacak olan metod. hava durumu uygulamamda hava 40dereceyi aştığında bildirim yollaamk gibi.
//+  componentWillUnmount --> bir component kaldırıldıktan sonra yapılacak temizlik işlemleri için kullanılır. Network isteklerinin iptali/ kaldırılması gibi
//*+  BURAYA KADAR Kİ OLAN KONU ASLINDA CLASS COMPONENTS İÇN GEÇERLİ. FUNC İÇİN İSE USE EFFECT HOOK KULLANILIYOR
//?  *************USE EFFECT HOOK
//+  useEffect Hook unda snippet kullanılıdğında array içerisi dependency array  , first ksımı componentDidMount , second kısmı cleanup func. yani componentWillUnmount kısmıdır.
//*+ const UseEffectHook = () => {
   //*useEffect(() => {
       //* componentDidMount (Dependency Array bos ise)
       //* componentDidMount + componentDidUpdate (Dependency array bos degilse)
       //* Dependecny array'Deki state her degistiginde veya ilk render sonrasi bu kod blogu tekrardan calistirilir.
     //*return () => {
       //* Cleanup function (componentWillUnmount)
     //*}
     //*}, [count]) //? Dependency Array

//?  *********************************** LIFE CYCLE-USE EFFECT METHODS - Axios DWM *********************************** 
//+  GET ile bilgiyi çekiyoruz, POST ile gönderiyoruz Submit diyebilirsin, PUT-PATCH ile editliyoruz.
//*+  axios yöntemi ile bilgi çekmek için öncelikle yüklenmesi gerekiyor. "yarn add axios"  . sonrasında "import axios from "axios" "  import ediyoruz
//+  axios ile bilgi çekeceksem yöntemlerden biri de await.  await kullanıyorsam fonksiyonum async olmalı
//*+  const getTutorials = async () => {
//*+     await axios (BaseURL) }         -------> standart get işlem i için ayrıca belirtmeye gerek yok ancak POST vd için "await axios.get (BaseURL)" denmeli
//********** */
//*+  const getTutorials= async ()=> {
//*+    try{
//*+      const {data} = await axios.get(baseURL)
//*+      setTutorials(data)
//*+      } catch (error) }  
//+  axios.post(baseURL, {veriler})

//?  *********************************** ROUTER *********************************** 
//*+  yarn add react-router-dom
//+  link verileceği zaman "a href" değil de  "Link to"  olarak kullanılmalı.
//*+  <Nav />    -------> içerisde bulunan sayfaları düzenlemek için
//*     <Routes>
//*       <Route path="/" element={<Home />} />
//*       <Route path="/instructors" element={<Instructors />} />
//*       <Route path="*" element={<NotFound />} />
//*     </Routes> 
//+  routes yapoısı içinde routes impotr ediliyor
//+  "active" class için yani örneğin; home linkine bastığımda o sekmedeyken linke style vermek için "NavLink" ile yazmamız gerekiyor.  
//+  Navlink kullanıldığında aktif olan link elementine otomatik active class'ı eklenir, bu class stillendirme için kullanılabilir 
//+  useNavigate() imperative routing için elverişlidir. Yani; fonk. event veya useEffect içerisinde yönlendirme için kullanılabilir.
//+  Link, NavLink ve Navigate componentleri declarative routing gerceklestirmek icin kullanilir. Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla bir etkilesim icerisinde bulunarak yonledirme yapilan bir componentlerdir. 
//+  onclick property si ile kullanıma örnek:
//*+  onClick={()=>navigate( ` /people/${id} , {state:person} ` )}    buraya absolute path deniyor. ilgili people tıkladığımda navigate ile sayfayı yönlendiriyoruz.
//*+  Linkteki parametreyi almak icin useParams Hook'u kullanilabilir. yakalanan id'ye ait güncel veriler fetch yapılabilir  
//*+  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir. Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
//+  .then .catch yapısı içerisinde .finally yazarsak blok doğru da olsa, yanlış da olsa finally mutlaka en sonda gene çalışacaktır. ÖRNEK: "setLoading(true)" ise .then ile şunu şunu yap "false" ise şunu şunu yap diyorum. .finlyy ile de mutlaka şu durum olsun diyorum. blokta sıkıntı yoksa loading anında yükleniyor imajını gösteriyoruz örneğin eğer .finally ile durumu "false"a çevirmezsek imaj döner durur.  
//*+ Farklı örnek 
//*+  const getPerson = async () => {
//*      try {
//*      const res = await axios(`https://reqres.in/api/users/${id}`);
//*      setPerson(res.data.data);
//*      } catch (error) {
//*        setError(true)
//*        console.log(error);
//*      } finally {
//*        setLoading(false);
//*  ******* TW PROJE BAŞLANGIÇ ********    
//+  index.js içerisinde 
//+  " import {BrowserRouter} from "react-router-dom"  import ediyoruz.
//+  App yi <BrowserRouter><BrowserRouter/> içierisine alıyoruz.
//+  "Router" gibi bi comp. oluşturup sayfa yapısını oluşturuyoruz.
//+  Sonrasında da header ve navbar yapımız varsa bunları hariç tutarak "Routes" yapısı içerisine alıyorum.
//+  <Route  path="/" element={ <Home /> } />
//+  <Route  path="/about" element={ <About/> } />
//+  Sonrasında ilgili sayfaya-comp.e gidip verilen linkleri "Link to" ya da "NavLink" uzantısıyla düzenliyoruz
//+  <NavLink to="/about" >  </ NavLink>

//?  *********************************** CONTEXT - REDUCER *********************************** 
//+  Prop-Drilling component yapısını desteklediği için aslında react felsefesine uygun. Componentlerin yeniden kullanılabilmesini mümkün kılıyor. Ancak; 7-8 seviye taşınması durumu oratay çıkarsa pratiklik problemi oluyor.
//+  Buna alternatif olarak global state kullanılıyor.
//+  Context'ten veri okumak için "useContext" hookunu kullanıyoruz.
//+  Global'in dezavantajı; tekrar kullanımı azaltıyor. Gerekli gereksiz heryerde global state kullanımı; gereksiz render'lar artar.  
//+  

//?  *********************************** STYLED COMPONENT *********************************** 
//+  "yarn add style-components"   diyerek kurulum yapılıyor. 
//+  örneğin bir buton tasarlıyoruz. "Buton.styled.jsx" formatında bir file oluşturup, "import styled from "styled-components" " dedikten sonra CSS ortamındaki formatla yazıyoruz. Snrada "" <Button> </Button> ""  şeklinde App.js içerisinde alıyoruz.
//+  const DarkButton = styled(Button)   şeklinde bir butondan buton türevliyoruz.
//+  esca yazarak rafce gibi kısaltma yapabilioz. extension yüklü
//+  CSS de padding , margin vs 0 verdiğimiz değerlere karşılıö olarak " import {createGlobalStyle} from "styled-components" " diyoruz. const GlobalStyles = createGlobalStyle diyoruz.
//+  Ama dikkat edecğimiz bir diğer husus da bu bir default ayar olduğu için parent içeirinde import edilmeli. Örneğin; app.js içerisinde

//?  *********************************** CW Library Notes *********************************** 
//+  Navbar gibi elemanları; belki lazım olabilir diye browserrouter içerisine ve fakat routes dışına alıyoruz.
//+  Browser history sinden faydalkanmak için  Navigate kullanıyoruz
//*+ Aslında bir useState'in setter metodu olan fonk.u event olarak kuallanmaya örnek syntax.
//*+ """" onClick={() => setToggle(!toggle)}>{menuIcon} """" açıksa kapat-kaplıysa aç mantığı ile toggle'ın mebü açması
//*+  yarn add styled-components
//*+  style componentleri oluşturabilmek için  """""import styled from "styled-components" """""    importunu yapmak lazm
//-----------------------
//+  URL de bulunan ?'den sonraki kısım parametreleri belirtir. & ile ayırıyoruz.oluşturaln APP KEY i de key kısmına koyuorz ve postman ile devam 
//+  theme için bir şablo9n hazırlarken içeri yazılanın önemi yok ancak çağırırken aynmı şekişlde çağırlmalı. export const lighgtTheme dedikten sonra içerdeki valueların ismi
//+  dark ve light theme ler içerisindeki değişken isimleri aynı olmalı ki değişiklikler farkedilebilsin ve çalışabilsin
//+  Her yerden ulaşmak istediğim, resetleme apabileceğim theme ayarlarını best practice Global.styles.jsx comp.ine tanımlama yapıyorum. öncelikle """"import {createGlobalStyle} from "styled-components"""""   dedikten sonra componenti oluşturmaya başlıyoruz. 
//+  Linkleri kullanarak font alacaksak index.html içerisine almak da bir seçenek. link importa göre daha performanslı çalışıyor
//+  App.js içeriisndeki ThemeProvider'a vermiş olduğumuz theme object'inin dinamik olması için yapmamız gerekenler: (değişiklik footer da olacak çünkü ikona tıklandığında gerçekleşiyor.) Bunun içinde GlobalStateManagement kullanıyoruz ki her yerden ulaşabilelim Ynai contextAPİ.
//+  ThemeContext.js dosyasını oluştururken de syntax unutuldu ise de ana yapı değişmediği için eskiş projeler değerlendirilebilir.
//*+  const ThemeContext = createContext()   oluşturulurken,  bu provider'ın componentini oluşturuyoruz. """"const ThemeContextProvider = ({ children }) => """" gibi bir synatax mevcut. children propunu yakalarken, bu prop  ThemeContextProvider   ile sarmalladığımız yerdeki child'lerı yakalıoz.
//*+ const handleClick içerisine uyazdığımz ;
//*+  if(myTheme === "light"){
//*+   setMyTheme("dark")
//*+     }else{
//*+   setMyTheme("light") }     ile
//*+  setMyTheme(prev => (prev === "light" ? "dark" : "light"));  aymı işi görüyor
//+  <Route path="/detail/:id" element={<Detail/>} />   id yerine herhangi başka birşey de klullanışabilir. Önemli olan usePĞaramas kullanılırken burda yazılanın çağırılması
//*+  return user ? <Outlet/> : <Login/>    user varsa child'a git yoksa logine. Ancak burada fonksiiyon bazında değil de componenet bazında gidebileceğimiz için bu ifadeyi <Navigate to ="/login"/> olarak yazıyoruz. 
//+  Github'da göerünmesini istemediğim değerleri pack.Jsom ile aynı seviyede oluiturduüum .env  ddosyası içerisine   örneğinb REACT_APP_apiKey  ismiyle tanımlıyprum. Gönderilmemesi için d gitignore 'a .env  yi ekliyorum
//+  Consume edip kullanmak için de auth dosyama const APP_KEY = process.env.REACT_APP_apiKey;   tanımlaması yapıyorum
//+--------------------------------------------------------
//+    

//?  *********************************** TAILWIND INFO *********************************** 
//+  anasayfada Framework Guides  sekmesinden create react talimatlarını uyguluyoruz
//*+  yarn add -D tailwindcss
//*+  npx tailwindcss init      yarn ya da npm farketmio komut:npx
//*+  Add the paths to all of your template files in your tailwind.config.js file.  aağıdan devam
//+  content: ["./src/**/*.{html,js}"],
//*+  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.  
//+  @tailwind base;
//+  @tailwind components;
//+  @tailwind utilities;
//*+  Run your build process with "npm run start"  --> yarn start
//+  Tailwind.config.js dosyasına kendi tema ayarlarımızı eklemek için "  theme: extends:  {colors:  { "içine yazıyoruz
//+  dark mode yapmak için "tailwind.config.js" e  darkMode: "class" eklenecek

//?  *********************************** FIREBASE & MOVIE APP *********************************** 
//*+  Kurulum-import movieapp 1.ders 2.saat
//+  yarn add firebase    ile kuruyoruz.  Firebase sitesinden proje oluşturduk.
//+  tailwind componenets kısmından navbar'ı seçiyoruz. HTML kısmını alırsan JS kısmı yok ayarlama gerkiyor. Using React ksımını alıp kopyalşamak daha mantıklı. Bunun içinde 
//*+  """yarn add @headlessui/react @heroicons/react"""  diyerek terminalde paketi yüklüyoruz. sonrasında docs ta yazdığı şekliyel import ediyoruz
//+  className= " h-[55px]"    diyerek Tailwind'de spesifik yükseklik kullanabilirm
//+  Firebase.js dosyası oluşturuluyor. SRC içerisinde out gibi bir folder oluşturulup içerisine atabilirz
//+  İçerisine girilecek sdk kod bloğunun hub'a gitmesini istemiyorsak proje içerisinde .env dosyası oluşturuyoruz. (detay: 2.DERS 21.50 civarı) dolayısıyla firebase.js içerisinde koymuyoruz da karşığına process.env    diye uzantsını atıoz
//********** */
//+  https://fkhadra.github.io/react-toastify/introduction/    linkinden docs incelenebilir.
//+  toastify yüklemesi yapılıyor.
//+  <ToastContainer/>  ile kullanıyoruz.
//+  route yapısı içerisinde replace prop'unu Navigate içerisinde kullanmalıyız

//?  *********************************** MATERIAL UI *********************************** 
//+  h1-h6 gibi özellikleri comp.in variant'ı olarak veriyoruz
//+  "sx" prop u ile css style yapabilorz. sx {{color:"blue", backgroundColor:"black"}} gibi
//+  div elementini stack olarak değerlendirebilirz
//+  "import {createTheme}..." ardından sx prop'uyla bir rengin farklı tonları seçilebilir. "main, light, dark"

//?  *********************************** REDUX *********************************** 
//+  Akışın çok hızlı değiştiği yerlerde tercih edilebilir. e-commerce gibi
//+  Bilgiler Store'da saklanıyor
//+   Context Api                                                          Redux
//+  context(create)       -----------------------------------------   store(create)
//+  provider sarmallama ({provider} from "react-redux")  ----------   Provider sarmallama
//+  consume - useContext  -----------------------------------------   consume - useSelector
//+  Reducer -opsiyonel    -----------------------------------------   reducer/despatch - zorunlu 
//+  JS ortamları için oluştuturlan bişi aslında dolayısıyla React haricinde de kullanılabilir
//*+  yarn add redux react-redux  ----------------------------------   pnpm install redux react-redux   ile işliyourz
//+  1- Reducer oluştur. 2- index.jsx de store oluştur. 3-provider ile App içinde sarmalla 4-use selector ile statei yakala dispatch ile de ekrana bas
//+  rxreducer yazışlıdğında reducer için snippet sunuyor
//+  combineReducers({counterReducer, todoReducer}) syntaxı ile birden fazla reducer'ı birleştirmiş olduk. Bunu da bi değişkene atıyoruz. 
//*+  2.DERS
//+  pnpm install -->pnpm dev diyerek ders starter ı ayakalanacak
//+  Slice ile bir global state'in hem action type'lari , hem action creator fonksiyonlarini hem de reducer'i tek bir hamlede olusturabiliriz.
//+  Olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
//+  reducer ise sliceAdi.reducer seklinde export edilmelidir.

//?  *********************************** STOCK APP NOTES *********************************** 
//+  REDOC uzantısı admin paneli
//+  Formik pnpm paket yüklenecek
//+  {Formik} from "formik "
//+  Formik yapısı içerisinde kullanılşacak olan uyarılar, mesjalar login sayfası için vs Yup kütüphanesini kullanıyoruz. 
//+  import { object, string, number, date, InferType } from 'yup';   yapıyoruz ve hazır şemayı da customize edebilirz
//*+  FORMİK initialValues: text-fieldların(input) başlangıç statetin veriyoruz. validationSchema: third-party kütüphaneyle validaysonlar yazılıyor, onSubmit: callback func yazıp suybmit gerçekleitiğinde neler yapılacak bu yazılır
//+  form != Form ,  Form comp/elementi Formik'ten gelen FOrm
//+  loginSchema --> email: email(valid uyarısı için),,required ....password: required,,min(8) ,max(16), matches(/\d+/) ->"en az bir rakam içerimesi" mevzuu, matches(/[A-Z]/) en az bir büyük harf içermesi
//*+  matches(/[a-z]/, "en az bir küçük harf içermeli")  ÖR yazım
//+  hatırlatma: "Bir hook sadece bir  react componentte ve bir custom hook içerisinde çağrılabilir."
//*+   2.DERS ***********************************
//*+  İlk derstye aldığımız invalid hook uyarısını ortadan kaldırmak için custom hook a çevirdik.Bunun için de gerekli  şekil şartlarından biri de use kullanılmasıdr isimde.
//*+  Custom Hook'a çevirdikten sonra fonksiyon yapısı değişti. Dolayısıyla export yapısı da değişti. Export etmee şeklimizdeki farklılık ve dosya yapısında ki dğeişiklik için login jsx'te import işleminde de günce3lleme yaptık. 
//*+  Login.jsx dosyasımızda; yazdığıız custom hook'u import ettikten sonra fonk. içinde açma işlemini yapıyoruz ki aşağaıda kullanabilelim
//+  env dosyalarinda genelde tum uygulama icerisinde tekrar tekrar kullanilacak degiskenler (API sifreleri, URL'ler vb. ) saklanilir. Dolayisiyla bir kere tanimlayip tum proje icersinde erisebilmek tekrari azaltmak adina avantaj saglar. VITE ile çalıştığımız için env içerisinbde VITE ile başlıyoruz
//+  env degiskenlerine her asamada (dev,prod,test) erisilebilir. Bu dosya github'a pushlandigi icin gizli bilgiler paylasmak dogru olmaz.
//+  VITE de guvenlik nedeniyle degisken isimlerinin basina VITE_ kelimesi eklenmelidir.
//*+  bir env degiskenini okumak icin """  import.meta.env.degiskenAdi"""   seklinde erisim yapilir.
//*+  Js Uzantılı bir doya aslında js fonksiyonudur. React componenti değildir. DOlayısıyla hook kullancağım zama burada çağırmam mümkün değil. Bir Hook ya React comp.i içnde veya custom hook içerisinde çağırılabilir. UseNavigate örneğin bir hook olduğu için Js Veya JSX içeriisnde yemez
//*+  400 BAD REQUEST gibi bir hata aldığında console dan detayına bakarak response sekmesi altında gerekli bilgi görünecektir. Toastify a sığmamaaıs ihtimalinden dolayı ui bastırmadık
//+  Login olduktan sonra /sales sekmesinde hem dashboard'u görüp hem de ansayfanın işlemesi lazım. Dolaysııyla router yapısı içerisişnde private yapının içine nested olarak bir route daha yerleştirip <Home/> yapısını çağırdık ve index element olarak belirttik. index element bitane olabileceği için diğerlerinin path'ini işlyirıuz fakat bunun da kullanılabilmesi için Dashboard sayfasına <Outlet/> işlemeyi unutmuyıoruz
//*+ Dolayııs ile yularıda çift basamak/nested route yapısı kuruldu
//*+   3.DERS
//+  X[Y] == x.y  ancak köşeli kullanınca Y'bir variable olabilir. Bu yüzen stockSlice i,çindeki bazı yapılarda bu şekilde kullanıldı.  X.Y dendiğinde X'in içerisindeki key olan Y olarak arayacaktır.
//+  stock kısmından silinck işlmeler için postman DELETE isteği seçilecek öncelikle. Link yazılırken redoc kısmındaki linkler kullanılıo. Elimizdeki bilgilere göre {id} gerekiyor. 
//+  AXIOS INSTANCE: tekrarları minimize ederek sbit ayarlar mevcut ise, config'leri bi kere yazıp tekrar kullanmamıza olanak sağlıyor
//+  Instance kullancağımz yerde custom Hook olacak.
//+  Card vb yapıları MUI den alıyoruz. Tepede import ediyoruz. 
//*+  IMPORT MANTIĞI VE DEST. İŞLEMİ İÇİN ÇOK KISA ÖZET 1.33 saatte 
//*+   5.DERS
//+  Product Table örneğini MUI'dne çekiyoruz. Data x grid için pnpm ile kurulum yapıp, import ediyoruz ve elemanları kullanıyoruz. MUI dökümanlarından takip ediyoruz.
//+  renderCell'de kendi componentlerimiz yazmak iin kullanıyoruz. Gene MUI
//+  X ve Y kolonlarındaki bilgiden bir Z kolonu oluşturmk istiyorsak MUI bunun için Value Formatter' ı yapmış. Name + LastName  den FullName gibi
//*+  api'Den gelmeyen colum bilgileri icin getActions veya renderCell islevleri kullanilabilir. Bu islevler aslinda isimsiz bir fonksiyon cagirirlar ve bu fonksiyon aldigi parametre (params) ile bir cok veriye (rows,columns gibi) erisebilir. 

//*+   6.DERS
//+  Dashbosrd icon ları --> import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"   """"import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"""""import PaymentsIcon from "@mui/icons-material/Payments"""""
//+  Chart'lar için recharts sitesi üzerinden inceleme yapılabilir---> third party bi sistem. 
//+  Sıralı ama birbirine de bağlı işlemler söz konusuysa; işlemlerden birinde hata olması durumunda diğerlerini de etkileme ihitmalinden ötürü ayrıca gecikmenin gerçekleşmesi ve artması ihtimalin varlığından ötürü promise.all yapısını kullnaıyoruz.
//*+  TREMOR KURULUMU "pnpm add @tremor/react"
//+  Githuba puslayıp canlıda skntı yaşamamak içn ufak farklılıklar var. Vite ile oluşturduğumz dosya için vite.config dosyasına girip "build:{outDir: "./build"}"  yazıyorız

//?  *********************************** TYPE SCRIPT *********************************** 
//+  "npm install -g typescript"  ile kuruyoruz. " tsc --init"  ile de config dosaysını kuruyoruz.
//+  "noEmitOnError"   hata varsa çıktı vermeme ayarı
//+  TypeScript dosyasoında en sık kullanılan komutların çıktısını aldım
//+  Config dosyası içerisinde ts ve app dosyalarının yerlerini değiştmirme hususu ilk ders saat 20.56 
//+  " let num : number[] = [1] "  number tipinde bir array oluşturma syntax'ı
//+  ARR Tuples yapısına göre syntax : -sabit sayıda ve tipte içinde birden fazla türden yapı bulunduran array oluşturmaya yardımcı-
//+  ÖR: "" var employee : [number, stirng][] ""   ""employee= [[1,Steve], [2,Bill]]""
//+  Yapı içersine yeni eleman eklemek için .push kullanıyoruz
//+  string enum yazılıyorsa değer number'daki gibi boş bırakılamaz.
//+  mixed yapıda da  yazılabilir. Ancak; değer verilmediğinde number 0'dan başlayıp sırayla gitmesinde bir sıkıntı olmasa da, araya string girdiyse number için tekrar bir değer verilmeli
//*+  2.DERS
//*+  INTERSECTION yapı türü: kesişim manası olsa da aslında birleşimi ifade ediyor. Obje içine tanımladığın her key'i bildirmen gerektiği manasına geliyor. Eğer hepsini yazamk zorunda olmamalıyım diyorsan key'den sonra ? işareti kullanıyoruz. const car:{ model: string , year?: nunber}  gibi
//+  type Intersected_type = Book & Author;
  // let book1: Intersected_type = {
  //   book_id: 1234,
  //   book_name: "Lord of the Rings",
  //   Author_Id: 1892,
  //   Author_name: "J. R. R. Tolkien"};

  // let book2: Book ={
  //   book_id : 1,
  //   book_name: 'FS }
  //+  FUNCTIONS
  //+  Opsiyonel olarak göndereceğimiz bir bilgi varsa bunu ilk sıraya yazmamak gerekiyor.
  //+  Functions-Overloading : aynı ada ve aynı paramatre sayısına ve fakat farklı paramatrelere sahip fonksiyon yazmamıza yardımcı oluyor
  
//?  *********************************** NEXT JS *********************************** yarn dev vs
//+  Route yapısı oluşturulurken sayfa uzantısını dinamik hale getirmek için []  içine yazıyoruz.
//+  nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir
//+  Tailwind background property : "bg-[url('/images/hero.jpg')]"
//+  next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. 
//+  Yönlendirmede link elemanında to değil href kullanıyourz
//+  Private route yapısı için sayfa oluşturur gibi folder oluşturup (private)  ya da (public) yazarak yapıyı oluşuturuoz
//+  app dosyası içinde page.jsx bulunana her dosya route'tur
//+  layout mantığına dair:   uygulama içinde app seviyesindeki layout içine alacağımız yapı tüm sayfalmarda yer alacak demek oluyor. navbar footer gibi. Nextjs mantığında göre her seferinde bir laypout tanımlamaya gerek olmadan layout dosyası içine yapıyı hazır edersen sıkıntı yok. Alt kalsörlerde de layout hazırlanablir.
//+  rootlayout default olarak geliyor zaten ve zorulu. alt klasörlerde oluşturulacak olanlar opsiyonel
//*+  YARN RUN START dediğimizde build alınmış product ürün çalışırken,  YARN RUN DEV denildiğinde localdeki proje çalışıyor
//*+    2.DERS
//+  api yi çekereken axios değil de fetch kullanmamızın sebebi NextJS'in await i derlemesinden kaynaklı.
//+  next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir.
//+  Bir diğer fark da useParams hook una gerek kalmadan comp. içinde {params}  ieklinde bir nevi dest. işlemi yapabilirm
//+  metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
//+  aplikasyonun herhangi bir yerinde gecikme oluştuğunda otomatik loading.js dosyası render edilir
//+  Error components must be Client Components.aplikasyonun herhangi bir yerinde hata fırlatıldığında otomatik error.js dosyası render edilir


//?  *********************************** CYPRESS
//+  install konuları 11.30'da başlıyo lazımsa
//+  proje açılış "npx cypress open"
//+  import { defineConfig } from "cypress";
//export default defineConfig({
  //watchForFileChanges: false,
  //defaultCommandTimeout: 10000,
  //e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here     komutunu ana root kısmında  "cyconfig"   eklenmesiyle auto save kapanmış oluyor
 
//?  *********************************** Mix TW
//* TYPSCRIPT NOT
//+  TypeScript, JavaScript tabanlı bir programlama dilidir ve JavaScript kodunun üzerine inşa edilmiştir. TypeScript, JavaScript'e güçlü bir şekilde tip belirleme özelliği ekler. Bu, geliştiricilere kodlarını daha güvenli hale getirme, hata ayıklama ve daha iyi belgelendirme yapma yeteneği sağlar. Kısacası, TypeScript, JavaScript kodunun daha sağlam, anlaşılır ve ölçeklenebilir hale getirilmesini sağlayan bir programlama dilidir.
//+  

//?  *********************************** Proje Notlar
//+  html type=checkbox birden fazla seçim mümkğünlken radio da tek seçim
//+  bir öğenin Z-INDEX değeri, o öğenin ekranın diğer öğelerine göre ne kadar üstte veya altta görüneceğini belirler. Daha yüksek bir z-index değeri, öğenin daha üstte görünmesini sağlar. Örneğin, bir web sayfasında özel bir açılır pencere (modal) oluşturuyorsanız, z-index'i yüksek bir değere ayarlayarak bu açılır pencerenin diğer sayfa öğelerinin üzerinde görünmesini sağlayabilirsiniz.
//+  APPENDCHILD; Bir öğenin alt öğelerine bir alt öğe eklemek veya bir öğeyi tamamen başka bir öğeye taşımak için kullanılır. appendChild kullanırken, eklenen öğe, hedef öğenin sonuna eklenir. Örneğin, aşağıdaki JavaScript kodu, bir <div> öğesine yeni bir <p> öğesi eklemek için appendChild'i kullanır:
    /* Hedef div öğesini seç
              var hedefDiv = document.getElementById("myDiv");
     Eklenecek yeni p öğesini oluştur
              var yeni = document.createElement("p");
              yeni.textContent = "Bu yeni bir paragraf öğesidir.";
     Yeni p öğesini hedefDiv öğesine ekleyin
              hedefDiv.appendChild(yeni); */

//+  "container-fluid" terimi, Bootstrap adlı bir CSS çerçevesinde sıkça kullanılan bir sınıftır. Bu sınıf, bir web sayfasındaki içeriği saran bir konteyner (container) öğesine uygulanır ve içeriği sayfanın tam genişliğine dolduracak şekilde ayarlar. Yani, içeriğin kenarlardan uzaklaşarak tam sayfa genişliğini kaplamasını sağlar. Bootstrap, duyarlı (responsive) web tasarımı oluşturmayı kolaylaştıran bir araçtır. "container-fluid" sınıfı, özellikle mobil cihazlardan masaüstü tarayıcılara kadar farklı ekran boyutlarına sahip kullanıcı cihazlarına uyumlu tasarımlar oluştururken kullanışlıdır. 
//+  const filteredArray = [...coinNameSpans].filter(span => span.innerText == name);       Bu satır, coinNameSpans koleksiyonundaki her <span> öğesini dolaşır ve her birini name değişkeniyle karşılaştırır. Eşleşen öğeleri bir diziye (filteredArray) ekler. Yani, name ile aynı metni içeren <span> öğelerini bulur.
//+  setTimeout(() => { msgSpan.innerText = ""; }, 3000);:   Bu satır, <span> öğesinin içeriğini 3 saniye (3000 milisaniye) sonra boş bir dize ile değiştirir. Bu, iletiyi geçici olarak gösterdikten sonra kullanıcıya gösterilen iletiyi temizlemek için kullanılır.
/*   @media screen and (max-width: 768px) {
    .container {
      width: 95%;
  }                                         ekran genişliği 768 pikselden küçük olduğunda (yani, tipik olarak tablet veya mobil cihazlarda) .container sınıfına sahip öğelerin genişliğini %95 olarak ayarlar.  Yani, bu kurallar sadece bu ekran boyutunda veya daha küçük ekranlarda uygulanır. */
/*  3çeşit fonksiyonumuz var.     
    1-- Function Declaration --> function func1(p1, p2) { return p1+p2}   
    2-- Function Expression --> const func2 = function(p1, p2) { return p1* p2 }
    3-- Arrow Function --> const func3 = (p1,p2) => p1+p2
    4-- Recursive Function  if else */
//+  const id = e.target.parentElement.id;: Bu satır, tıklanan öğenin id değerini alır. e.target tıklanan öğeyi temsil eder ve parentElement ile bu öğenin üst öğesine (li öğesi) ulaşırız. Bu öğenin id özelliği, tıklanan görevin kimliğini temsil eder.
//+  task.id != id    Yani, tıklanan öğe (görev) ile karşılaştırılan öğe (task) aynı kimliğe sahip değilse, bu koşul ifadesi doğru olur. 

//?  *********************************** GENEL TEKRAR ***********************************
//*+  COMPONENTS
//+  Componenetleri iterasyon içeririsine alıp defalarca kullanmam mümkün. for, map, filter gibi
//+  Component parametresi PROPS tur
//+  index içeirisnde react import edildiyse, alt comp'larda yapılmasına gerek yok
//+  " yarn create react-app . "  
//+  ""yarn add react-bootstrap bootstrap""
//+  style verdiğim harici bir css dosyasyını app.js içerisine almam için export etmeme gerek yok. Path belirtip imprt etmem yeterli
//+  public klasöründe bulunan resim vs herhangi birşeye ana dizinde olduğu için doğrudan erişim mümkün olsa da; örneğin src içerisinde bulunan bir resme ulaşmam için import etmem gerekiyor.
//+  PROPS dediğimiz yapı parent --> child 'a tek yönlü gider
//*+  SASS  
//+  paket yükleniyor. _variables , _styles gibi dosyala oluturuluyor ve app.scss içerisinde birleştirilebilir.
//*+  EVENTS
//+  Event yazdık onClick={abc}   bıraktın. ancak abc(xyz) şeklinde değer vermek istersen arrow func ile yazmalısın. onClick={ () => abc(xyz)}
//+  React her türlü bilgiyi değişkliği render edip doma basmaz. Bu mantıklka çalıştığı için modüler ve hızlıdır diyebiliriz. Ancak burada çalışmasını istediğimiz alanlarda da state dediğimiz durum ortaya çıkıyor. Event düzenlenmiş değerini almış olsa dahi her zaman basılmaz state ile güncelleme ve basmasını isteyebiliriz. 
//+  State ler ve Prop lar değişirse Component ancak o zaman render olur
//*+  STATES - HOOKS
//*   Hook Kullanim Kurallari:
//+  1. İlk olarak import edilmeliler. import { useState } from "react";
//+  2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde kullanilmamalidir.
//+  3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.Normal Javascript fonksiyonlari icerisinde cagrilmamalidir. (Custom hook'lar icerisinde bir hook çağırılabilir)  
//+  




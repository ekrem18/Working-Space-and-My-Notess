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
//+  COMPONENT yazılıosa baş harfi büyük olacak. Dosya adı da.
//+  Component pamaretresi PROPS tur. 
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

//?  Proje açılış
//+  " yarn create react-app . "  
//+  ""yarn add react-bootstrap bootstrap""

//?  3.DERS Module CSS & SASS
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

//?  5.DERS EVENTS, CLASS COMP., STATES
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

//?  6.DERS EVENTS DEVAM ve BOOTSTRAP
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

//?  NBA TW NOTES
//+  Css ve Bootstrap i import ederken hepsinde kullanacaksak eğer kapsayıcı olan APP.JS üzerinde yapmak mantıklı olan. 
//+  Flex Wrap verirken işlemesi için genişlik tanımlanmıiş olmalı
//+  position:relative kapsayıcı div e veriyoruz ki önce ,position:absolute verdiğimizde bu div le sınırlı kalsın.

//?  APPOINTMENT APP NOTES
//+  Bootstrap pratik img class'ı --> "img-thumbnail" küçültmer ve border veriyor.
//+  React Bootstrap kullanıyorsam import da gerekli.
//+  onClick'deki herhngi bir değişklik "state"in değişimine, onun da değişimi aşağıdaki "prop"un değişimine, o da "render"a yol açıyor.  

//?  LIFE CYCLE-USE EFFECT METHODS
//+  Lifecycle metotlari componentlerin DOM'da varoldugu sure boyunca uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir. Ornegin bir component olusturuldugunda, DOM'a basildiginda,guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icinli fecycle metotlari kullanilabilir. 
//+  En bilindik lifecycle metodu render() metodudur.
//+  Bir component'in olusturulmasi (constructor),Bir componentin DOM agacina eklenmesinin hemen sonrasi(componentDidMount) Bir component'in DOM'a basilmasi (render) (Optional) Bir componentin guncellenmesinin hemen sonrasi (componentDidUpdate) Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount).
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

//?  LIFE CYCLE-USE EFFECT METHODS - Axios DWM
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

//?  ROUTER
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
//+  " import {rowserRouter} from "react-router-dom"  import ediyoruz.
//+  App yi <BrowserRouter><BrowserRouter/> içierisine alıyoruz.
//+  "Router" gibi bi comp. oluşturup sayfa yapısını oluşturuyoruz.
//+  Sonrasında da header ve navbar yapımız varsa bunları hariç tutarak "Routes" yapısı içerisine alıyorum.
//+  <Route  path="/" element={ <Home /> } />
//+  <Route  path="/about" element={ <About/> } />
//+  Sonrasında ilgili sayfaya-comp.e gidip verilen linkleri "Link to" ya da "NavLink" uzantısıyla düzenliyoruz
//+  <NavLink to="/about" >  </ NavLink>

//?  CONTEXT - REDUCER
//+  Prop-Drilling component yapısını desteklediği için aslında react felsefesine uygun. Componentlerin yeniden kullanılabilmesini mümkün kılıyor. Ancak; 7-8 seviye taşınması durumu oratay çıkarsa pratiklik problemi oluyor.
//+  Buna alternatif olarak global state kullanılıyor.
//+  Context'ten veri okumak için "useContext" hookunu kullanıyoruz.
//+  Global'in dezavantajı; tekrar kullanımı azaltıyor. Gerekli gereksiz heryerde global state kullanımı; gereksiz render'lar artar.  

//?  STYLED COMPONENT
//+  "yarn add style-components"   diyerek kurulum yapılıyor. 
//+  örneğin bir buton tasarlıyoruz. "Buton.styled.jsx" formatında bir file oluşturup, "import styled from "styled-components" " dedikten sonra CSS ortamındaki formatla yazıyoruz. Snrada "" <Button> </Button> ""  şeklinde App.js içerisinde alıyoruz.
//+  const DarkButton = styled(Button)   şeklinde bir butondan buton türevliyoruz.
//+  esca yazarak rafce gibi kısaltma yapabilioz. extension yüklü
//+  CSS de padding , margin vs 0 verdiğimiz değerlere karşılıö olarak " import {createGlobalStyle} from "styled-components" " diyoruz. const GlobalStyles = createGlobalStyle diyoruz.
//+  Ama dikkat edecğimiz bir diğer husus da bu bir default ayar olduğu için parent içeirinde import edilmeli. Örneğin; app.js içerisinde

//?  CW Library Notes
//+  Navbar gibi elemanları; bleki lazım olabilir diye browserrouter içerisine ve fakat routes dışına alıyoruz.
//+  Browser history sinden faydalkanmak için  Navigate kullanıyoruz
//*+ Aslında bir useState'in setter metodu olan fonk.u event olarak kuallanmaya örnek syntax.
//*+ """" onClick={() => setToggle(!toggle)}>{menuIcon} """" açıksa kapat-kaplıysa aç mantığı ile toggle'ın mebü açması
//+  style componentleri oluşturabilmek için  """""import styled from "styled-components" """""    importunu yapmak lazm
//+  URL de bulunan ?'den sonraki kısım parametreleri belirtir. & ile ayırıyoruz.oluşturaln APP KEY i de key kısmına koyuorz ve postman ile devam 

//?  TW FIREBASE
//+  
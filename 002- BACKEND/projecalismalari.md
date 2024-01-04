## Integer (Tam Sayı):
Genellikle sıralama ve matematiksel işlemler için daha uygundur.
İndeksleme ve filtreleme için daha hızlıdır.
Veri boyutu daha küçüktür, bu da daha az depolama alanı kullanılması anlamına gelir.
## String:
İnsanlar tarafından daha iyi anlaşılır ve okunabilir.
Metin tabanlı veriler için daha uygundur. Örneğin, bir kategori adı gibi.
Daha esnekdir, çünkü farklı türlerde veriyi aynı alanda saklayabilirsiniz.
Rol seçimi durumunda, eğer roller belirli ve sınırlı bir set içinde ise (örneğin, "Admin", "Editor", "Viewer"), bu rolleri temsil etmek için integer bir kodlama tercih edilebilir. Bu durumda, bir rolü temsil etmek için bir numara kullanabilir ve bu numaraları veritabanında saklayabilirsiniz.
    Ancak, roller daha esnek ve değişkense (örneğin, "Admin", "Moderatör", "Editör", "Kullanıcı"), o zaman rolleri temsil etmek için string türü daha uygundur. 
Stringler, yeni roller eklediğinizde daha esnek bir yapı sağlar ve bu rollerin insanlar tarafından daha iyi anlaşılmasını sağlar.
    Sonuç olarak, rol temsilini integer veya string olarak seçmek, uygulamanızın gereksinimlerine ve gelecekteki genişleme planlarına bağlıdır. 
Genellikle sabit ve sınırlı bir set içindeyse integer, daha geniş ve değişken ise string kullanmak daha uygundur.

## ObjectId & ref
-mongoose.Schema.Types.ObjectId türü, MongoDB veritabanındaki belgeler arasında benzersiz bir referans sağlamak için kullanılan bir türdür.
-genellikle ilişkisel veritabanlarındaki "foreign key" (yabancı anahtar) kavramına benzer bir işlevi yerine getirir.
-ObjectId ile çalışıyorsam nereden kullanacağıma dair ref vermen gerekir

## Sequelize, Node.js tabanlı bir ORM (Object-Relational Mapping) kütüphanesidir ve yaygın veri tipleri şunlardır:
-STRING:
-CHAR: Belirli bir uzunluğa sahip karakter dizileri için kullanılır.
-TEXT: Uzun metinler için kullanılır.
-INTEGER:Tamsayı değerleri için kullanılır.
-BIGINT:Büyük tamsayı değerleri için kullanılır.
-FLOAT:Kayan noktalı sayılar için kullanılır.
-BOOLEAN:
-DATE:
-ENUM:

## { paranoid: false } seçeneği, 
-"paranoid" özelliğin devre dışı bırakılmasını ifade eder. Sequelize'de "paranoid" özelliği, bir kaydın silinmesi durumunda gerçekten veritabanından silinmek yerine sadece işaretlenmesini sağlar. { paranoid: false } kullanılarak silinmiş (paranoid olarak işaretlenmiş) kayıtlar da sorguya dahil edilir.

## findAndCountAll fonksiyonu,
- belirtilen filtre koşullarına uyan kayıtları bulur ve bu kayıtların sayısını ve kendilerini içeren bir sonuç nesnesini döndürür.

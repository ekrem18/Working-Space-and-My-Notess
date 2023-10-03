
⭐Bir defa kullanmamızın yeterli olduğu komutlar
    ➖node -v ile node.js'nin yüklü olup olmadığını kontrol etmek
    ➖npm -v ile npm'in yüklü olup olmadığını kontrol etmek
    ➖npm install -g nodemon ile globalde nodemon yüklemek

⭐Her defasında kullanmamız gereken komutlar
    ➖npm init -y package.json dosyasını oluşturmamızı sağlar
    ➖npm install express express'i ve node_modules'i  yükler
    ➖nodemon index.js  index.js isimli dosyamızı nodemon çalıştırmamızı sağlar

⭐Amacını bilmemiz gereken kodlar
    ➖npm list yüklü paketleri listeler
    ➖npm i --omit=dev node_modules silinmişse package.json daki dependencies'teki bilgilere göre node_modules'i yükler. devDependencies'tekileri node_modules'e yüklemez
    ➖npm install --production  npm i --omit=dev ile benzer işleve sahiptir. Daha yaygın kullanılan komuttur.
    ➖npm install express --save bu komut express.js'i packetjson'a kaydetmek için kullanılır. Ancak npm in 5.0 sıfır sürümünden sonra otomatik olarak kaydedildiği için ayrıca    save komutuna gerek kalmamıştır.
    ➖let moduleName = require("module") Belirtilen modülü çağırır. Bu komutu çalıştırmak için terminalde "  node   " yazarak js alanına girmiş olmamız gerekir. Çıkmak için  "  .   exit" komutu yazılır.
    ➖moduleName.builtinModules  let moduleName = require("module") komutundan sonra yazdığımızda modülleri listeler. 
     ➖npm i express-async-handler  hata ayıklama/yönetme modülü


⭐ÖRNEK MODEL
sequelize.define('tableName', { columns })

const Todo = sequelize.define('todo', {
    // https://sequelize.org/docs/v7/models/data-types/

    id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false, // default: true
        field: 'custom_column_name',
        comment: 'Description',
        primaryKey: true,
        autoIncrement: true,
    },
    
    title: {
        type: DataTypes.STRING(64), // varchar(64)
        allowNull: false,
    },
    
    description: DataTypes.TEXT, // ShortHand Using.
    
    priority: { // 1: High, 0: Normal, -1: Low
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0, // set default value.
    },
    
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    
    //? Not need define "createdAt" & "updatedAt" fields.
})



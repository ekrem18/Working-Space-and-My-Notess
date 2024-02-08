-------------TEMEL KAVRAMLAR-------------
-----OOP (Object-Oriented Programming - Nesne Tabanlı Programlama): OOP, bir programın tasarımını ve organizasyonunu geliştirmek için kullanılan bir paradigma veya yaklaşımdır. OOP, gerçek dünyadaki nesneleri (örneğin arabalar, kitaplar veya kullanıcılar) programlamada temel birimler olarak kullanır. Bu nesneler, verileri (özellikler) ve bu veriler üzerinde çalışan işlevleri (metodlar) içerir. OOP, kodun daha düzenli, yeniden kullanılabilir ve anlaşılabilir olmasına yardımcı olur.

-----Node.js: Node.js, sunucu tarafı uygulamaları geliştirmek için kullanılan bir JavaScript çalıştırma ortamıdır. JavaScript'i sunucu tarafında çalıştırmak için kullanılır. Hızlı, verimli ve olay odaklı bir yapıya sahiptir ve genellikle web sunucuları, API'ler ve ağ uygulamaları oluşturmak için kullanılır.

-----Express: Express, Node.js tabanlı web uygulamaları oluşturmak için kullanılan hafif ve esnek bir web uygulama çerçevesidir. Express, HTTP isteklerini işlemek, yönlendirmek ve yanıtlamak için kullanılır. Web uygulamalarını hızlı bir şekilde oluşturmanıza yardımcı olan çeşitli araçlar ve özellikler sunar.

-----SQL (Structured Query Language): SQL, veritabanı yönetim sistemi (DBMS) ile etkileşimde bulunmak için kullanılan bir programlama dilidir. SQL, veritabanı oluşturma, veri ekleme, sorgulama, güncelleme ve silme gibi işlemleri gerçekleştirmenize olanak tanır. İlişkisel veritabanları (örneğin MySQL, PostgreSQL) için yaygın olarak kullanılır.

-----NoSQL (Not Only SQL): NoSQL, geleneksel SQL veritabanlarına alternatif olarak ortaya çıkan bir veritabanı türüdür. NoSQL veritabanları, ilişkisel olmayan ve genellikle büyük veri kümeleleri ile çalışmak için tasarlanmıştır. Bu tür veritabanları, belge tabanlı (MongoDB), sütun tabanlı (Cassandra), anahtar-değer tabanlı (Redis) veya grafik tabanlı (Neo4j) gibi çeşitli formatlarda olabilir.
---------------------------------------------------------
--MongoDB Compass, 
MongoDB veritabanlarıyla etkileşimde bulunmak ve yönetmek için kullanılan bir görsel kullanıcı arayüzüdür. MongoDB'nin yeteneklerini daha kolay ve görsel bir şekilde keşfetmenize, verilerinizi sorgulamanıza ve yönetmenize yardımcı olur. İşte MongoDB Compass'ın kullanım alanları ve faydaları:

--DB Browser (DB4S - SQLite Browser): DB Browser, SQLite veritabanları ile çalışmak için kullanılan ücretsiz ve açık kaynaklı bir görsel araçtır. SQLite, yerel dosyalara dayalı küçük ve hızlı bir veritabanı sistemidir. DB Browser, SQLite veritabanlarını oluşturmanıza, düzenlemenize ve sorgulamanıza olanak tanır.

--MySQL Workbench (MySQL): MySQL, açık kaynaklı bir ilişkisel veritabanı yönetim sistemidir. MySQL Workbench, MySQL veritabanları ile etkileşimde bulunmak ve yönetmek için kullanılır. Bu araç, veritabanları oluşturmanıza, tabloları düzenlemenize, sorgular oluşturmanıza, yedekleme almanıza ve veri akışlarını izlemenize yardımcı olur.

--pgAdmin (PostgreSQL): pgAdmin, PostgreSQL veritabanlarını yönetmek için kullanılan ücretsiz ve açık kaynaklı bir araçtır. PostgreSQL, güçlü bir açık kaynaklı ilişkisel veritabanı yönetim sistemidir. pgAdmin, PostgreSQL veritabanlarını yönetmenize, sorguları çalıştırmanıza, yedekleme almanıza ve veri modellemesi yapmanıza yardımcı olur.
---------------------------------------------------------
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");   -->express modülüün çalıştır express değişkenine ata
const app = express();  --> express server'ını çalıştır bunu app'e ata
                                                                --------------------------> maya diyebiliriz. express modülünü çalıştırıp oluşturma ve yayınlama
require("dotenv").config();
const PORT = process.env.PORT || 8000;   --> yayına aç

/* ------------------------------------------------------- */
//? Middleware functions has must be minimum three parameters. 
//? Last parameter for next().


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
---------------------------------------------------------
DOSYA KURULUMU
-- npm init -y
-- npm i express dotenv    -->  express ve dotenv modüllerini kuruyorum
-- nodemon DOSYA ADI   --> tracking active
---------------------------------------------------------
/*-----------------------------SEQUELIZE DOCS----------*/
https://sequelize.org/docs/v6/getting-started/
---------------------------------------------------------
BRANCH SİLME
-- git branch -a                     to see the branches you’ve created
-- git branch -d branch-name 
-- git branch -D branch-name.        hard delete
*******
-- git fetch -p                       senkronize etmek için kullanıyoruz
-- git push origin -d branch-name    Delete a Remote Branch
---------------------------------------------------------
DEV BRANCH ile ilişki
-- git checkout kendi_branch         kendi branch'ına geçiş 
-- git pull origin dev               dev branch'ından güncellemeleri al
---------------------------------------------------------
--  PARANOID:TRUE olarak belirtilmişse, ORM aracı silinmiş kayıtları sorgulamalarda otomatik olarak filtreleyecektir. Yani, uygulama bu kayıtları görmeyecek veya işlemeyecek şekilde davranacaktır.
--  PARANOID:FALSE olarak belirtilmişse, silinmiş kayıtlar da sorgulamalarda gözükecek ve işlenecektir.
---------------------------------------------------------
TEMEL STATUS KODLARI
-- " email required " ve " provide token "      gibi durumlar için --> 400
-- " user isn't active "                        gibi durumlar için --> 403
-- " verify e-mail " ve " invalid password "    gibi durumlar için --> 401  kullandım
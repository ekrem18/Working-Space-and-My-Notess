## userModel:
    -MongoDB'de hazırlandı, 
    -created_at ve updated_at  otomatik oluşturulduu için yorumda 
    -role hazır seçenekler arasından seçilebilsin dışına çıkılmasın diye enum olarak düzenlendi.default şekilde customer gelecek. her ne kadar integer veri tipi daha az yer kaplıyor ve hızlı olsa da , sonrasında yapılabilecek değişkliklere daha serbest yapılabilmesi için string seçildi

## authantication MW:
    -JWT kullanılacağı için , muhtemel .env dosyası içerisnde yer alacak key ile bir yapı oluşturuldu.
    -JWT var ise next ile sıralı işleme devam edilebiliyor
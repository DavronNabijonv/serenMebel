// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        haqida: "О КОМПАНИИ",
        mahsulot: "ПРОДУКЦИЯ",
        xizmat: "Услуги",
        contact: "Связь",
        p1: "«Для нас лифт – это уникальный механизм, а не просто квадратный короб, который перемещает Вас вверх-вниз. Поездка в нашем лифте – это абсолютно неповторимый опыт для любого пассажира. В основе создания лифта лежат технологии высочайшего уровня, благодаря чему меняется восприятие лифтав целом».",
        p2: "Мы компания Shamollift, предоставляющая нашим клиентам самое передовое лифтовое оборудование и полный спектр услуг от проектирования до технического обслуживания пассажирских, кухонных, строительных, автомобильных и грузовых лифтов, а также эскалаторов.",
        p3: "Компания была создана в 2008 году в Турции, с тех пор компания с каждым годом все совершенствует свою продукцию занимая достойное место на мировом рынке лифтового оборудования. Компания занимается производством лифтов, пассажирского, грузового типа, основанных на гидравлике и электрике. Благодаря накопленному опыту, лифты Shamollift отличаются надежностью, легкостью установки и удобством обслуживания. На территорию Узбекистана продукция бренда поступает уже полностью укомплектованной и готовой к установке. На территорию Узбекистана продукция бренда поступает уже полностью укомплектованной и готовой к установке.",
        b_mahsulot: "Наша продукция",
        m1: "Кухонная мебель",
        m2: "Корпусная мебель",
        m3: "Офисная мебель",
        m4: "Мягкая мебель",
        m5: "Мебель для крыльца и прихожей",
        m6: "Мебель для спальни",
        m7: "Детская мебель",
        m8: "Польки и стойки",
        m9: "Столы и стулья",
        b_xizmat: "НАШИ СЕРВИСЫ",
        x_ttl1: "Дизайн интерьера",
        x_txt1: "С помощью дизайна интерьера мы помогаем вам создать красивый и функциональный дизайн, соответствующий вашим потребностям и вкусам.  Мы используем существующие материалы и мебель, чтобы создать комфортное и гармоничное пространство в вашем доме.  Наша команда всегда готова помочь Вам в реализации Вашего проекта и обеспечить высочайшее качество работы.  Создайте интерьер своего дома по своему желанию.  Мы делаем это с помощью современного программного обеспечения.",
        x_ttl2: "Измерительные работы",
        x_txt2: "Благодаря этому у вас будет мебель нужного размера для вашего дома. Наши специалисты проконсультируют вас не выходя из дома.  Замерные работы производятся до того, как вы разместите заказ.  Наши специалисты с многолетним опытом проведут замеры и дадут свои консультации.",
        x_ttl3: "Доставка",
        x_txt3: "Наша команда сэкономит вам время и обеспечит комфорт.  Мы поможем доставить ваш заказ по городу до вашего адреса безопасно и без ущерба для его качества.  Это создает возможности получить ваш заказ, не выходя из дома.",
        x_ttl4: "Монтажные работы",
        x_txt4: "Наши высококвалифицированные специалисты качественно установят Вашу мебель, чтобы со временем она не вызывала дискомфорта в случае неправильной установки готовой мебели, и Вы могли без опасений пользоваться качественно установленной мебелью.  Монтаж будет произведен после того, как ваш заказ будет готов.",
        x_ttl5: "Использование высокоточных методов.",
        x_txt5: "Для подготовки вашего заказа «СеренМебель» использует современное и высокоточное оборудование и инструменты, которые сегодня немыслимы без технологий.Благодаря современному оборудованию мы можем изготовить мебель точных размеров и качества.  В этом нам поможет оборудование и инструменты, импортированные из Китая, Турции и России.",
        x_ttl6: " Техническая поддержка",
        x_txt6: "СеренМебель и впредь будет обеспечивать Вам удобство.  Вы можете связаться с нами и запросить техническое письмо в течение 3 месяцев после получения заказа.  В этом случае мы направим наших специалистов, которые помогут вам устранить неудобства.  Мы рады помочь нашим клиентам.",
        x_ttl7: "Выполнение заказа в срок",
        x_txt7: "Конечно, поскольку после размещения заказа важно, чтобы он был готов вовремя, мы гарантируем, что ваш заказ будет готов вовремя.  Время важно для всех нас.",
        x_ttl8: "Двусторонний договор",
        x_txt8: "Ваш заказ выполняется на основании двустороннего договора.  Вам дадут контракт, и мы сохраним его копию.  В этом контракте будет указано, сколько времени потребуется для готовности вашего заказа, согласованная цена, информация о вашем заказе и тому подобное.",
        x_ttl9: "Виды оплаты",
        x_txt9: "Виды оплаты производятся исходя из ваших возможностей и желания, Мы также предлагаем Вам возможность оплаты наличными, пластиковой картой, банковским переводом, payme, click, uzumbank и аналогичными приложениями.",
        x_ttl10: "Советы",
        x_txt10: "Вы колеблетесь, не зная, какая мебель подойдет для вашего дома?  Наши специалисты окажут вам непосредственную помощь и дадут советы по выбору мебели, которая подойдет вашему вкусу и вашему дому.",
        x_ttl11: "Высококачественные материалы",
        x_txt11: "Наша мебель изготовлена   из качественных материалов, и каждой детали уделяется особое внимание.  У вас есть возможность выбрать используемые материалы, и вам будет предоставлена   информация о цвете, толщине и стране-производителе материала. Мдф, Дсп, Акрил, Л-мдф, Л-дсп МДФ ламинируется с 1 или 2 сторон. Краски производства Турции, Китая, России.",
        tarmoq: "Подпишитесь на нашу рассылку",
        hamkor: "Те кто доверял нам",
        aloqa: "Связаться с нами",
        tel: "Номер телефона",
        sms: "Сообщение",
        btn: "ОСТАВИТЬ ЗАЯВКУ",
        tash: "© Организация СеренМебель serenmebel.uz",
        pod: "Подробное",
      },
    },
    uz: {
      translation: {
        haqida: "Haqida",
        mahsulot: "Mahsulotlar",
        xizmat: "Xizmatlar",
        contact: "Aloqa",
        p1: "Biz uchun lift sizni yuqoriga va pastga siljitadigan kvadrat quti emas, balki noyob mexanizmdir.Liftimizda chiqish har qanday yo'lovchi uchun mutlaqo noyob tajribadir.Asosiyda Liftning yaratilishi texnologiyaning eng yuqori darajasiga asoslanadi, buning natijasida lift haqidagi tasavvur butunlay oʻzgarib bormoqda.",
        p2: "Biz Shamollift kompaniyasi bo'lib, mijozlarimizga eng ilg'or lift uskunalari va yo'lovchi, oshxona, qurilish, avtomobil va yuk liftlari, shuningdek, eskalatorlarni loyihalashdan tortib to texnik xizmat ko'rsatishgacha bo'lgan to'liq xizmatlarni taqdim etamiz.",
        p3: "Kompaniya 2008 yilda Turkiyada tashkil etilgan bo'lib, o'shandan beri kompaniya har yili o'z mahsulotlarini takomillashtirib, jahon lift uskunalari bozorida munosib o'rin egallab kelmoqda.Kompaniya gidravlika va elektrotexnikaga asoslangan liftlar, yo'lovchi va yuk turlarini ishlab chiqarish bilan shug'ullanadi.To'plangan tajriba tufayli liftlar Shamollift ishonchli, o'rnatish oson va parvarish qilish oson. Brend mahsulotlari O‘zbekistonga to‘liq jihozlangan va o‘rnatishga tayyor holda yetib keladi.",
        b_mahsulot: "Bizning  maxsulotlar",
        m1: "Oshxona mebellari",
        m2: "Shkaf mebellar",
        m3: "Ofis mebellari",
        m4: "Yumshoq mebellar",
        m5: "Ayvon va zal mebellari",
        m6: "Yotoqxona mebellari",
        m7: "Bolalar mebellari",
        m8: "Polkalar va stellaj",
        m9: "Stol va Stulllar",
        b_xizmat: "BIZNING XIZMATLAR",
        x_ttl1: "Interior design",
        x_txt1:
          "Interior design orqali biz sizning ehtiyojlaringiz va didingizga mos keladigan chiroyli va funktsional dizaynni yaratishga yordam beramiz. Biz sizning uyingizda qulay va uyg'un joy yaratish uchun mavjud materiallar va mebellardan foydalanamiz. Bizning jamoasi sizga loyihada yordam berishga va ishning eng yuqori sifatini ta'minlashga doimo tayyor. Uyingizni interyerini o`z xohishingizday yarating . Bunda biz zamonaviy dasturlardan foydalangan holda amalga oshiramiz.",
        x_ttl2: "O’lchash ishlari",
        x_txt2:
          "Bu bilan siz o’z uyingizga mos o’lchamdagi mebelga ega bo’lasiz. Mutahasislarimiz sizning uyingizdan kelib chiqan holda sizga maslahatlarini berishadi . O’lchash ishlari siz buyurtma berishdan oldin qilinadigan ish hisoblanadi . O’lchash ishlarini bizning ko’p yillik tajribaga ega mutahasislarimiz amalga oshirishadi va o’z maslahatlarini aytishadi .",
        x_ttl3: "Yetkazib berish",
        x_txt3:
          "Bizning jamoamiz sizni vaqtingizni tejaydi va sizga qulayliklar yaratadi . Biz shahar bo’ylab sizning buyurtmangizni sizning manzilingizgacha xavfsiz va sifatiga zarar yetmagan holda yetkazib berishda sizga yordam berishadi . Buyurmangizni siz uydan chiqmagan holda qabul qilib oling imkoniyatlarini yaratadi .",
        x_ttl4: "O’rnatish ishlari",
        x_txt4:
          "Tayyor bo’lgan mebel yaxshi o’rnatilmasa vaqt o’tgan sayin noqulayliklar keltirib chiqarmasligi uchun bizning yuqori malakali mutahasislarimiz sizning mebelingizni sifatli qilib o’rnatib berishadi , sifatli o’rnatilgan mebeldan esa bemalol qo’rqmasdan foydalana olasiz . O’rnatish ishlari sizning buyurtmangiz tayyor bo’lgandan so’ng amalga oshiriladi .",
        x_ttl5: "Yuqori aniqlikdagi texnikalardan foydalanish",
        x_txt5:
          "Hozirgi kunda texnologiyalarsiz tassovur qilib bo’lmaganidek SerenMebel sizga zamonoviy va yuqori aniqlikda ishlaydigan texnikalar va asboblardan foydalangan holadi buyurtmangizni tayyorlab berishadi , zamonoviy texnikalar orqali biz aniq o’lchamdagi va sifatli bo’lgan mebel tayyorlash imkoniyatiga ega bolamiz . Bunda bizga Xitoy , Turkiya va Rassiya davlatlaridan olib kelingan texnika va asboblar yordam beradi.",
        x_ttl6: "Texnik yordam",
        x_txt6:
          "SerenMebel sizga qulayliklar yaratishda davom etadi . Siz buyurtmangizni qabul qilgandan so’ng 3 oy davomida bizga murojat qilib texnik yozdam so’rashingiz mumkin . Bunda sizga biz mutahasislarimizni yuborib noqulayliklarni bartaraf etishda yordam berishadi. Mijozlarmizga yordam berishdan mamnunmiz.",
        x_ttl7: "Buyurtmani o’z vaqtida bajarish",
        x_txt7:
          "Albatta buyurtma berilgandan so’ng uni o’z vaqtida tayyor bo’lish ham muhim bo’lganligi uchun biz sizlarga buyurtmangizni o’z vaqtida tayyor bolishini kafolatlaymiz. Vaqt hammamiz uchun muhim . ",
        x_ttl8: "Ikki tomonlaman shartnoma",
        x_txt8:
          "Buyurtmangiz ikki tomonlaman shartnoma asosida amalga oshiriladi . Bunda sizga shartnoma beriladi va bir nisxasi bizda qoladi. Bu shartnomada buyurtmangiz qanchada tayyor bolish vaqti , kelishilagan narx , sizning buyurtmangiz haqida ma’lumot va shunga o’xshash narsalar kiritilgan bo’ladi.",
        x_ttl9: "To’lav turlari",
        x_txt9:
          "To’lov turlari sizning imkoniyatingiz va hohshingizdan kelib chiqqan holda amalga oshiriladi, Naqt pul , plastik kartadan to’lov, hisob raqdan pul o’tkazish yo’li, payme, click, uzum bank va shunga o’xshash ilovalar orqali ham to’lov amalga oshirish imkoniyatlarini ham biz sizga taqdim etamiz.",
        x_ttl10: "Maslahatlar",
        x_txt10:
          "Uyingizga qanday mebel mos kelishini bilmasdan ikkilanyabsizmi ? Bunda sizga bizning mutahasislarimiz yaqindan yordam berishadi , sizning didingizga va uyingizga mos tushadigan mebellarni tanlashda o’z maslahatlarini berishadi.",
        x_ttl11: "Yuqori sifatli materiallar",
        x_txt11:
          "Mebellarimiz albatta sifatli materiallardan tayyorlanadi har bir detalga alohida e’tibor qaratiladi. Foydalaniladigan materiallarni siz tanlash imkoniyatiga ega bolasiz , bunda sizga material rangi , qalinligi , ishlab chiqarilgan mamlakati haqida ma’lumot beriladi. Mdf , Dsp , Akril , L-mdf , L-dsp Mdf 1 yoki 2 taraflama laminatsiyalangan Turkiya , Xitoy , Rassiya davlatlarida ishlab chiqarilgan bo’yoqlar .",
        tarmoq: "Bizning sahifalarimizga obuna bo'ling",
        hamkor: "Bizga ishonganlar",
        aloqa: "Biz bilan bog'lanish",
        tel: "Telefon raqam:",
        sms: "Xabar:",
        btn: "Jo`natish",
        tash: "© SerenMebel tashkiloti serenmebel.uz",
        pod: "Batafsil",
      },
    },
  },
  lng: "uz", // default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

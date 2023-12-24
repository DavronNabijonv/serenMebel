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
        m1: "грузовые лифты",
        m2: "больничные лифты",
        m3: "лифты для инвалидов",
        m4: "Кухонные лифты",
        m5: "Коттеджные лифты",
        b_xizmat: "НАШИ ПРЕИМУЩЕСТВА",
        x_ttl: "ПРОЕКТИРОВАНИЕ",
        x_txt:
          "Мы предоставляем услуги по проектированию шахт под определенный вид лифтов на момент начала строительства здания, а также по подбору и проектированию лифтов для уже построенных объектов и старых зданий.",
        tarmoq: "Подпишитесь на нашу рассылку",
        hamkor: "Те кто доверял нам",
        aloqa: "Связаться с нами",
        tel: "Номер телефона",
        sms: "Сообщение",
        btn: "ОСТАВИТЬ ЗАЯВКУ",
        tash: "© Организация Шамоллифт shamollift.uz",
      },
    },
    uz: {
      translation: {
        haqida: "Haqida",
        mahsulot: "Mahslotlar",
        xizmat: "Xizmatlar",
        contact: "Aloqa",
        p1: "Biz uchun lift sizni yuqoriga va pastga siljitadigan kvadrat quti emas, balki noyob mexanizmdir.Liftimizda chiqish har qanday yo'lovchi uchun mutlaqo noyob tajribadir.Asosiyda Liftning yaratilishi texnologiyaning eng yuqori darajasiga asoslanadi, buning natijasida lift haqidagi tasavvur butunlay oʻzgarib bormoqda.",
        p2: "Biz Shamollift kompaniyasi bo'lib, mijozlarimizga eng ilg'or lift uskunalari va yo'lovchi, oshxona, qurilish, avtomobil va yuk liftlari, shuningdek, eskalatorlarni loyihalashdan tortib to texnik xizmat ko'rsatishgacha bo'lgan to'liq xizmatlarni taqdim etamiz.",
        p3: "Kompaniya 2008 yilda Turkiyada tashkil etilgan bo'lib, o'shandan beri kompaniya har yili o'z mahsulotlarini takomillashtirib, jahon lift uskunalari bozorida munosib o'rin egallab kelmoqda.Kompaniya gidravlika va elektrotexnikaga asoslangan liftlar, yo'lovchi va yuk turlarini ishlab chiqarish bilan shug'ullanadi.To'plangan tajriba tufayli liftlar Shamollift ishonchli, o'rnatish oson va parvarish qilish oson. Brend mahsulotlari O‘zbekistonga to‘liq jihozlangan va o‘rnatishga tayyor holda yetib keladi.",
        b_mahsulot: "Bizning  maxsulotlar",
        m1: "Yuk liftlari",
        m2: "Shifoxona liftlari",
        m3: "Nogironlar uchun liftlar",
        m4: "Oshxona liftlari",
        m5: "Kottej liftlari",
        b_xizmat: "Bizning afzalliklarimiz",
        x_ttl: "DIZAYN",
        x_txt:
          "Biz binoning qurilishi boshlanishida ma'lum turdagi liftlar uchun shaftalarni loyihalash, shuningdek, allaqachon qurilgan ob'ektlar va eski binolar uchun liftlarni tanlash va loyihalash bo'yicha xizmatlarni taqdim etamiz.",
        tarmoq: "Bizning sahifalarimizga obuna bo'ling",
        hamkor: "Bizga ishonganlar",
        aloqa: "Biz bilan bog'lanish",
        tel: "Telefon raqam:",
        sms: "Xabar:",
        btn: "Jo`natish",
        tash: "© Shamollift tashkiloti shamollift.uz",
      },
    },
  },
  lng: "uz", // default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

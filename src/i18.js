// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  fallbackLng: "uz", // default language
  backend: {
    loadPath: '/translationWords/{{lng}}/{{ns}}.json',
  },
  detection:{
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  }
});

export default i18n;

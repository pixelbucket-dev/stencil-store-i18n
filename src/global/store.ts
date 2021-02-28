import { createStore } from "@stencil/store";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from "i18next";

const { state, onChange } = createStore({
  lang: 'en',
  t: i18next.t
});

(async () => {
  state.t = await i18next.use(LanguageDetector).init({
    lng: 'en',
    debug: true,
    fallbackLng: 'en',
    keySeparator: '+-+',
    nsSeparator: ':.:',
    resources: {
      en: {
        translation: {
          "Profile page": "Profile page",
          "Hello! My name is {{name}}. My name was passed in through a route param!": "Hello! My name is {{name}}. My name was passed in through a route param!"
        }
      },
      de: {
        translation: {
          "Profile page": "Profil-Seite",
          "Hello! My name is {{name}}. My name was passed in through a route param!": "Hallo! Ich heiße {{name}}. Mein Name wurde über den Routen-Parameter weitergegeben!"
        }
      }
    }
  });
})();

onChange('lang', async lng => {
  const t = await i18next.changeLanguage(lng);
  state.t = t;
});


export default state;


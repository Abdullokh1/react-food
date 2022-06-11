import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import transEng from './Lang/Eng.json'
import transUzb from './Lang/Uzb.json'


const resources = {
  eng: {
    translation: transEng
  },
  uz: {
    translation: transUzb
  }
};


i18n
.use(initReactI18next) 
  .init({
    resources,
    lng: "eng",
    fallbackLng: "eng",

    interpolation: {
      escapeValue: false
    }
  });
  

  export default i18n
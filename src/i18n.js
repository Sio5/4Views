import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import common_de from "./translations/locales/de/translation.json";
import common_en from "./translations/locales/en/translation.json";

const resources = {
    en: {
        translation: common_en
    },
    de: {
        translation: common_de
    }
};

var lang = window.navigator.languages
    ? window.navigator.languages[0]
    : null;
lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
if (lang.indexOf('-') !== -1) 
    lang = lang.split('-')[0];

if (lang.indexOf('_') !== -1) 
    lang = lang.split('_')[0];

i18n
    .use(detector)
    .init({
        resources, lng: lang, fallbackLng: "en_EN", // use en if detected lng is not available

        keySeparator: false, 

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
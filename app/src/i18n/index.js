import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require('./locales/en/translation.json'),
  },
  pt: {
    translation: require('./locales/pt/translation.json'),
  },
  // ...
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // Default language
  fallbackLng: "pt", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;

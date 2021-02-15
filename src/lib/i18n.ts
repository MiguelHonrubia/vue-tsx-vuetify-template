import Vue from "vue";
import VueI18n from "vue-i18n";
import es from "../helpers/locale/es.json";
import en from "../helpers/locale/en.json";
import empty from "../helpers/locale/empty.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "es",
  fallbackLocale: "empty",
  messages: {
    es: es,
    en: en,
    empty: empty
  },
});

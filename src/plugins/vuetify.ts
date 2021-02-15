import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0ea154",
        menu: "#e1faee",
        secondary: "#0ea154",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});

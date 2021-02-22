import { component } from "vue-tsx-support";
import { VToolbarTitle, VApp, VContainer, VContent } from "vuetify-tsx";
import { Menu } from "./utils/constants";
import { LateralMenu } from "./components/general/LateralMenu";
import userSession from "./modules/user-session";
import { STORAGE_USER } from "./utils/constants";

const App = component({
  name: "App",
  data() {
    return {
      drawer: null as boolean | null,
      menu: Menu,
      authenticated:
        window.localStorage.getItem("authenticated") != null
          ? Boolean(window.localStorage.getItem("authenticated"))
          : false,
      user: JSON.parse(window.localStorage.getItem(STORAGE_USER)),
    };
  },
  methods: {
    updateDrawer(value: boolean) {
      this.drawer = value;
    },

    toggleDrawer() {
      this.drawer = !this.drawer;
    },

    logout() {
      userSession.quitSession();
      this.authenticated = false;
    },
  },
  render() {
    return (
      <VApp>
        <v-app-bar app clippedLeft color="primary">
          <v-app-bar-nav-icon onClick={this.toggleDrawer}></v-app-bar-nav-icon>
          <VToolbarTitle>Vue - TSX - Vuetify - Template</VToolbarTitle>
        </v-app-bar>

        <VContent>
          <VContainer>
            <router-view />
          </VContainer>
        </VContent>

        <LateralMenu
          authenticated={this.authenticated}
          drawer={this.drawer}
          updateDrawer={this.updateDrawer}
          logout={this.logout}
          user={this.user}
        />
      </VApp>
    );
  },
});

export default App;

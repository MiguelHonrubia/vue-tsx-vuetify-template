import { component } from "vue-tsx-support";
import { Menu } from "../../utils/constants";

export const LateralMenu = component({
  name: "LateralMenu",
  data() {
    return {
      Menu: Menu,
    };
  },
  props: {
    user: {
      type: Object,
    },
    drawer: {
      type: Boolean,
    },
    authenticated: {
      type: Boolean,
    },
    updateDrawer: {
      type: Function,
    },
    logout: {
      type: Function,
    },
  },
  render() {
    return (
      <v-navigation-drawer
        App
        clipped
        color="menu"
        value={this.drawer}
        onInput={this.updateDrawer}
        temporary
      >
        {this.user && this.authenticated && (
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title class="MenuAvatar">
              {this.user && this.user.fullName}
            </v-list-item-title>

            <v-list-item-subtitle class="MenuAvatar">
              {this.user && this.user.email}
            </v-list-item-subtitle>
          </v-list-item>
        )}

        <v-divider></v-divider>

        <v-list>
          {this.Menu.map(({ icon, title, route, menu, authenticated }) =>
            menu && menu.length && this.authenticated == authenticated ? (
              <v-list-group noAction value={false}>
                <v-list-item slot="activator" to={route}>
                  <v-list-item-icon>
                    <v-icon>{icon}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{title}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                {menu.map((subMenu) => {
                  if (this.authenticated == subMenu.authenticated) {
                    return (
                      <v-list-item to={subMenu.route}>
                        <v-list-item-content>
                          <v-list-item-title>{subMenu.title}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    );
                  }
                })}
              </v-list-group>
            ) : this.authenticated == authenticated && title != "Logout" ? (
              <v-list-item to={route}>
                <v-list-item-icon>
                  <v-icon>{icon}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{title}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            ) : title == "Logout" && this.authenticated ? (
              <v-list-item onClick={this.logout}>
                <v-list-item-icon>
                  <v-icon>{icon}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{title}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            ) : null
          )}
        </v-list>
      </v-navigation-drawer>
    );
  },
});

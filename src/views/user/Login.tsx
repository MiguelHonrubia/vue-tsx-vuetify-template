import { component } from "vue-tsx-support";
import { loginUser } from "../../services/auth";
import {} from "vue-i18n";

const Login = component({
  name: "Login",
  data() {
    return {
      valid: false,
      input: {
        email: "",
        password: "",
      },
      emailRules: [
        (v: any) => !!v || "El email es obligatorio",
        (v: any) => /.+@.+\..+/.test(v) || "Debe introducir un email válido",
      ],
      passwordRules: [(v: any) => !!v || "La contraseña es obligatoria"],
    };
  },
  methods: {
    async auth() {
      if (this.input.email != "" && this.input.password != "") {
        const user = await loginUser(this.input);
        if (user) {
          this.$emit("authenticated", true);
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  render() {
    return (
      <v-container id="login" class="spacing-playground pa-8" fluid>
        <v-card class="mx-auto" width="400">
          <v-card-title>
            <v-row>
              <v-col align="center">
                <h1>{this.$t("pages.user.login.title")}</h1>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-form ref="form" v-model={this.valid} lazy-validation>
                  <v-text-field
                    type="text"
                    name="email"
                    v-model={this.input.email}
                    rules={this.emailRules}
                    placeholder={this.$t("pages.user.email")}
                    label={this.$t("pages.user.email")}
                    required
                  />
                  <v-text-field
                    type="password"
                    name="password"
                    v-model={this.input.password}
                    rules={this.passwordRules}
                    placeholder={this.$t("pages.user.password")}
                    label={this.$t("pages.user.password")}
                    required
                  />
                  <v-col>
                    <v-btn
                      disabled={!this.valid}
                      type="button"
                      onClick={this.auth}
                    >
                      {this.$t("pages.user.signin")}
                    </v-btn>
                  </v-col>
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    );
  },
});

export default Login;

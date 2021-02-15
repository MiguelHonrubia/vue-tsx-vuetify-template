import { component } from "vue-tsx-support";
import { singUp } from "../../services/auth";
import t from "vue-i18n";

const Register = component({
  name: "SignUp",
  data() {
    return {
      valid: false,
      input: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
      confirmPassword: "",
      emailRules: [
        (v: any) => !!v || "El e-mail es obligatorio",
        (v: any) => /.+@.+\..+/.test(v) || "Debe introducir un email válido",
      ],
      firstNameRules: [(v: any) => !!v || "El nombre es obligatorio"],
      lastNameRules: [(v: any) => !!v || "El apellido es obligatorio"],
      passwordRules: [
        (v: any) => !!v || "La contraseña es obligatoria",
        (v: any) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
            v
          ) ||
          "La contraseña debe tener al menos 8 carácteres, una mayúscula, una minúscula, un número y un símbolo",
      ],
    };
  },
  methods: {
    async SignUp() {
      if (
        this.input.email != "" &&
        this.input.firstName != "" &&
        this.input.lastName != "" &&
        this.input.password != ""
      ) {
        const response = await singUp(this.input);
        if (response) {
          this.$router.replace({ name: "Login" });
        }
      }
    },
  },
  render() {
    return (
      <v-container class="spacing-playground pa-8">
        <v-row align="end" no-gutters>
          <v-col align>
            <v-card class="mx-auto" width="400">
              <v-card-title>
                <v-row>
                  <v-col align="center">
                    <h1>{this.$t("pages.user.signup.title")}</h1>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text>
                <v-form ref="form" v-model={this.valid} lazy-validation>
                  <v-text-field
                    type="text"
                    name="email"
                    rules={this.emailRules}
                    v-model={this.input.email}
                    placeholder={this.$t("pages.user.email")}
                    label={this.$t("pages.user.email")}
                    required
                  />
                  <v-text-field
                    type="text"
                    name="firstName"
                    rules={this.firstNameRules}
                    v-model={this.input.firstName}
                    placeholder={this.$t("pages.user.firstname")}
                    label={this.$t("pages.user.firstname")}
                    required
                  />
                  <v-text-field
                    type="text"
                    name="lastName"
                    rules={this.lastNameRules}
                    v-model={this.input.lastName}
                    placeholder={this.$t("pages.user.lastname")}
                    label={this.$t("pages.user.lastname")}
                    required
                  />
                  <v-text-field
                    type="password"
                    name="password"
                    rules={this.passwordRules}
                    v-model={this.input.password}
                    placeholder={this.$t("pages.user.password")}
                    label={this.$t("pages.user.password")}
                    required
                  />
                  <v-text-field
                    type="password"
                    name="confirmPassword"
                    v-model={this.confirmPassword}
                    rules={[
                      this.confirmPassword != "" ||
                        "Debe confirmar la contraseña",
                      this.input.password === this.confirmPassword ||
                        "La contraseña no coincide",
                    ]}
                    placeholder={this.$t("pages.user.confirm-password")}
                    label={this.$t("pages.user.confirm-password")}
                    required
                  />

                  <v-row>
                    <v-col align="center">
                      <v-btn
                        disabled={!this.valid}
                        type="button"
                        onClick={this.SignUp()}
                      >
                        {this.$t("pages.user.signup")}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    );
  },
});

export default Register;

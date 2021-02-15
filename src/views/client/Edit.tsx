import { component } from "vue-tsx-support";
import { ClientInfoBreadScrumbs } from "../../router/breadScrumbRoutes";
import { ClientForm } from "../../components/client/ClientForm";
import { Breadscrumb } from "../../components/general/Breadscrum";

export const Edit = component({
  name: "EditClient",
  data: () => {
    return {
      client: {
        idClientType: 1,
        documentNumber: 2,
        documentScaned: true,
        firstName: "nombre prueba",
        lastName: "apellido prueba",
      },
    };
  },
  methods: {
    onSubmit(values: any) {
      //todo: request
      console.log("values", values);
    },
  },
  render() {
    return (
      <v-container fluid>
        <Breadscrumb breadscrumb={ClientInfoBreadScrumbs} />
        <v-card class="justify-space-around mx-auto pa-4" width="1100">
          <v-card-title>
            <h1>{this.$t("pages.client.form.edit.title")}</h1>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="mx-auto">
                <ClientForm
                  data={this.client}
                  SelectListValues={null}
                  handleSubmit={this.onSubmit}
                ></ClientForm>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    );
  },
});

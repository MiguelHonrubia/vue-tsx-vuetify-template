import { component } from "vue-tsx-support";
import { ClientInfoBreadScrumbs } from "../../router/breadScrumbRoutes";
import { ClientForm } from "../../components/client/ClientForm";
import { Breadscrumb } from "../../components/general/Breadscrum";

export const New = component({
  name: "NewClient",
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
            <h1>{this.$t("pages.client.form.new.title")}</h1>
          </v-card-title>
          <v-card-text>
            <v-row class="mx-auto">
              <ClientForm
                data={null}
                SelectListValues={null}
                handleSubmit={this.onSubmit}
              ></ClientForm>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    );
  },
});

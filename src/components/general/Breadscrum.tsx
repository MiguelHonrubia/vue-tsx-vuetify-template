import { component } from "vue-tsx-support";

export const Breadscrumb = component({
  name: "Breadscrum",
  props: {
    breadscrumb: {
      type: Array,
    },
  },
  render() {
    return (
      <v-container id="pageHeader" class="spacing-playground pa-8" fluid>
        <v-row>
          <v-col cols="12" xs="12" sm="8">
            <v-breadcrumbs items={this.breadscrumb}>
              <template slot="divider">
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-container>
    );
  },
});

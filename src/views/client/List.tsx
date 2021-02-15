import { component } from "vue-tsx-support";
import { getAll } from "../../services/client";
import { Breadscrumb } from "../../components/general/Breadscrum";
import { clientListKeys } from "../../keys/list/client";
import { ClientListBreadScrumbs } from "../../router/breadScrumbRoutes";
import { DataTable } from "../../components/general/DataTable";

export const List = component({
  name: "List",
  data() {
    return {
      TableItems: [],
    };
  },
  methods: {
    async getClientsList(Filters: any) {
      this.TableItems = [];
      const clientList = await getAll(Filters);
      if (clientList.status == 404) {
        this.TableItems = [];
      } else {
        this.TableItems = clientList;
      }
    },
  },
  render() {
    return (
      <v-container>
        <Breadscrumb breadscrumb={ClientListBreadScrumbs} />
        <v-row>
          <v-col>
            <DataTable headers={clientListKeys} items={this.TableItems} />
          </v-col>
        </v-row>
      </v-container>
    );
  },
});

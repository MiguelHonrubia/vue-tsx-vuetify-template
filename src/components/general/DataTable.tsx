import { component } from "vue-tsx-support";
import { listKeys } from "../../types/general/listKey";
import { DataTableTemplate } from "./DataTableTemplate";
import { VDataTable, VLayout, VFlex } from "vuetify-tsx";

export const DataTable = component({
  name: "Datatable",
  props: {
    headers: { type: Array },
    items: { type: Array },
  },
  render() {
    return (
      <VLayout>
        <VFlex>
          <VDataTable
            headers={this.headers}
            items={this.items}
            class="elevation-3"
          />
        </VFlex>
      </VLayout>
    );
  },
});

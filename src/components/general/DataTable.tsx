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
            scopedSlots={{
              items: (props: { item: any }) => {
                return (
                  <tr>
                    <td>{props.item.name}</td>
                    <td>{props.item.calories}</td>
                    <td>{props.item.fat}</td>
                    <td>{props.item.carbs}</td>
                    <td>{props.item.protein}</td>
                    {/* <td>{props.item.iron}</td> */}
                  </tr>
                );
              },
            }}
          />
        </VFlex>
      </VLayout>
    );
  },
});

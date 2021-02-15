import { component } from "vue-tsx-support";

export const DataTable = component({
  name: "Datatable",
  props: {
    headers: { type: Array },
    items: { type: Array },
  },
  data() {
    return {};
  },
  render() {
    return (
      <v-data-table
        items={this.items}
        headers={this.headers}
        class="elevation-1"
      ></v-data-table>
    );
  },
});

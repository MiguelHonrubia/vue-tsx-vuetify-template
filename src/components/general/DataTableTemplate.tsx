import { component, createComponent } from "vue-tsx-support";

export const DataTableTemplate = component({
  name: "DataTableTemplate",
  props: {
    templateType: {
      type: String,
    },
    value: {},
  },
  render() {
    switch (this.templateType) {
      case "link":
        return <p>{this.value} pruebaaa</p>;
      default:
        return <div></div>;
    }
  },
});

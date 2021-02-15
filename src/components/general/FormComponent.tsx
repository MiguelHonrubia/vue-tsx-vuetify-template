import { component } from "vue-tsx-support";

export const FormComponent = component({
  name: "FormComponent",

  data: () => {
    return {
      value: null,
    };
  },
  mounted() {
    this.value = this.defaultValue;
  },
  props: {
    defaultValue: {},
    id: String,
    input: {
      type: Object,
    },
    items: {
      type: Array || null,
    },
    fieldText: {
      type: String || null,
    },
    fieldValue: {
      type: String || null,
    },
    updateValue: Function,
  },
  render() {
    const { type, label, placeholder, readOnly, disabled } = this.input;

    switch (type) {
      case "string":
        return (
          <v-text-field
            v-model={this.value}
            label={this.$t(label)}
            placeholder={this.$t(placeholder)}
            readonly={readOnly}
            disabled={disabled}
            onChange={() => {
              this.updateValue(this.id, this.value);
            }}
            ref="form"
          />
        );
      case "checkbox":
        return (
          <v-checkbox
            v-model={this.value}
            label={this.$t(label)}
            placeholder={this.$t(placeholder)}
            readonly={readOnly}
            disabled={disabled}
            onChange={() => {
              this.updateValue(this.id, this.value);
            }}
          ></v-checkbox>
        );
      case "select":
        return (
          <v-select
            items={this.items}
            item-text={this.fieldText}
            item-value={this.fieldValue}
            v-model={this.value}
            label={this.$t(label)}
            placeholder={this.$t(placeholder)}
            readonly={readOnly}
            disabled={disabled}
            onChange={() => {
              this.updateValue(this.id, this.value);
            }}
          ></v-select>
        );
      case "datetime":
        return <div></div>;
      default:
        return <div></div>;
    }
  },
});

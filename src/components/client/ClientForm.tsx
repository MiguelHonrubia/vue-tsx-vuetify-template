import { component } from "vue-tsx-support";
import { FormComponent } from "../../components/general/FormComponent";
import { clientFormKeys } from "../../keys/form/client";
import { getFormValueByType } from "../../utils/get-form-value-by-type";

export const ClientForm = component({
  name: "ClientForm",
  data() {
    return {
      client: {
        idClientType: null,
        documentNumber: null,
        documentScaned: true,
        firstName: null,
        lastName: null,
      },
    };
  },
  props: {
    data: {
      type: Object || null,
    },
    handleSubmit: {
      type: Function,
    },
    SelectListValues: {
      type: Object || null,
    },
  },
  methods: {
    updateValue(key: any, value: any) {
      this.client[key] = value;
    },
  },
  render() {
    return (
      <v-form>
        <v-container>
          <v-row>
            {clientFormKeys.map((input, index) => {
              const element = clientFormKeys.find(
                (el) => el.position === index
              );
              const { key } = element;
              let defaultValue;

              if (this.data) {
                defaultValue = getFormValueByType(this.data, key);
              }
              return (
                <v-col xs={12} md={input.sizeGrid}>
                  <FormComponent
                    updateValue={this.updateValue}
                    id={key}
                    defaultValue={defaultValue}
                    input={input}
                    items={
                      input.type == "select" ? this.SelectListValues[key] : null
                    }
                  ></FormComponent>
                </v-col>
              );
            })}
          </v-row>
          <v-row class="justify-end">
            <v-btn
              class="btnIcon"
              depressed
              color="primary"
              onClick={() => {
                console.log("Client", this.$refs.form);
                this.handleSubmit(this.client);
              }}
            >
              {this.$t("general.save")}
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    );
  },
});

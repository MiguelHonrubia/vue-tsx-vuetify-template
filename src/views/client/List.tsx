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
      TableItems: [
        {
          nombre: "prueba",
          tipoPersona: 1,
          socio: "1234",
          codigoPostal: "123456",
          poblacion: "Alicante",
          movil: "34905794",
          email: "magarcia@lynxview.com",
        },
        {
          nombre: "prueba 2",
          tipoPersona: 2,
          socio: "1234",
          codigoPostal: "123456",
          poblacion: "Alicante",
          movil: "34905794",
          email: "magarcia@lynxview.com",
        },
      ],
    };
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

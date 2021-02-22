import { listKeys } from "../../types/general/listKey";
import { component } from "vue-tsx-support";

export const clientListKeys: listKeys[] = [
  {
    value: "nombre",
    text: "Nombre / Razón Social",
    align: "start",
    sortable: false,
  },
  { value: "tipoPersona", text: "Tipo Persona", templateType: "link" },
  { value: "socio", text: "Socio" },
  { value: "codigoPostal", text: "C. Postal" },
  { value: "poblacion", text: "Población" },
  { value: "movil", text: "Móvil" },
  { value: "email", text: "Email" },
];

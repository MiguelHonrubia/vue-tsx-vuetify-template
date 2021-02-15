import { listKeys } from "../../types/general/listKey";

export const clientListKeys: listKeys[] = [
  {
    value: "nombre",
    text: "Nombre / Razón Social",
    align: "start",
    sortable: false,
  },
  { value: "tipoPersona", text: "Tipo Persona" },
  { value: "socio", text: "Socio" },
  { value: "codigoPostal", text: "C. Postal" },
  { value: "poblacion", text: "Población" },
  { value: "movil", text: "Móvil" },
  { value: "email", text: "Email" },
];

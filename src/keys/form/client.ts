import { FormKeys } from "../../types/general/formKeys";

export const clientFormKeys: FormKeys[] = [
  {
    key: "idClientType",
    label: "pages.client.form.clientType",
    placeholder: "pages.client.form.clientType",
    type: "string",
    position: 0,
    sizeGrid: 6,
  },
  {
    key: "documentNumber",
    label: "pages.client.form.dni",
    placeholder: "pages.client.form.dni",
    type: "string",
    position: 1,
    sizeGrid: 6,
  },
  {
    key: "documentScaned",
    label: "pages.client.form.documentScaned",
    type: "checkbox",
    position: 2,
    sizeGrid: 6,
  },
  {
    key: "firstName",
    label: "pages.client.form.firstName",
    placeholder: "pages.client.form.firstName",
    type: "string",
    position: 3,
    sizeGrid: 6,
  },
  {
    key: "lastName",
    label: "pages.client.form.lastName",
    placeholder: "pages.client.form.lastName",
    type: "string",
    position: 4,
    sizeGrid: 6,
  },
];

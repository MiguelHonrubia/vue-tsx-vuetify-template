import Api from "./api";
import userSession from "../modules/user-session";
import { clientListFilters } from "../types/client";

const requestOptions = {
  baseUrl: process.env.VUE_APP_API_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const getAll = (Filters: clientListFilters) => {
  const q = new URLSearchParams();

  if (Filters.Name) q.append("Name", Filters.Name);
  if (Filters.DNI) q.append("DNI", Filters.DNI);
  if (Filters.City) q.append("City", Filters.City);
  if (Filters.PageNumber)
    q.append(
      "PageNumber",
      Filters.PageNumber != null ? Filters.PageNumber.toString() : ""
    );
  if (Filters.PageSize)
    q.append(
      "PageSize",
      Filters.PageSize != null ? Filters.PageSize.toString() : ""
    );
  if (Filters.Active) q.append("Active", Filters.Active.toString());

  return api.get(`/Client?${q}`);
};

export const getById = (id: number) => api.get(`/Client/${id}`);
export const getContactDetailByIdClient = (idClient: number) =>
  api.get(`/ContactDetail/${idClient}`);

export const getCitySelectList = () => api.get(`/City/SelectList`);
export const getClientTypeSelectList = () => api.get(`/ClientType/SelectList`);
export const getCountrySelectList = () => api.get(`/Country/SelectList`);
export const getDocumentTypeSelectList = () =>
  api.get(`/DocumentType/SelectList`);
export const getEntryReasonSelectList = () =>
  api.get(`/EntryReason/SelectList`);
export const getLicenseTypeList = () => api.get(`/LicenseType/SelectList`);
export const getProvinceSelectList = () => api.get(`/Province/SelectList`);
export const getRegionSelectList = () => api.get(`/Region/SelectList`);

export const SelectListValues = async () => {
  const idCity = await getCitySelectList();
  const idClientType = await getClientTypeSelectList();
  const idCountry = await getCountrySelectList();
  const idDocumentType = await getDocumentTypeSelectList();
  const idEntryReason = await getEntryReasonSelectList();
  const idLicenseType = await getLicenseTypeList();
  const idProvince = await getProvinceSelectList();
  const idRegion = await getRegionSelectList();

  return {
    idCity,
    idClientType,
    idCountry,
    idDocumentType,
    idEntryReason,
    idLicenseType,
    idProvince,
    idRegion,
  };
};

export type clientInfo = {
  email: string;
  firstName: string;
  lastName: string;
};

export type clientListFilters = {
  City: string;
  DNI: string;
  Name: string;
  PageNumber?: number;
  PageSize?: number;
  Active: boolean;
};

export type FormKeys = {
  position: number;
  key: string;
  type: string;
  placeholder?: string;
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  decimals?: number;
  rows?: number;
  required?: {
    value: boolean;
    message: string;
  };
  fields?: {
    text: string;
    value: string;
  };
  options?: { text: string; value?: boolean }[];
  sizeGrid?:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
};

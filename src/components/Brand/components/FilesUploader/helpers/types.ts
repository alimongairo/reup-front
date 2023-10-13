type DefaultField = {
  id: string;
  value: string;
  error: null | string;
  hasError: () => Promise<boolean>;
  reset: () => void;
};

import { FilesField } from "./useFilesFormField";
export type {FilesField, DefaultField};

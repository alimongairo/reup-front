type DefaultField = {
  id: string;
  value: string;
  error: null | string;
  hasError: () => Promise<boolean>;
  reset: () => void;
};

import { FilesField } from "@/components/Brand/components/FilesUploader/helpers/useFilesFormField";
export type {FilesField, DefaultField};

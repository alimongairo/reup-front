import React, {ChangeEvent} from 'react';
import { useContext } from "react";
import { FilesField } from "@/components/Brand/components/FilesUploader/helpers/types";

export const UploaderContext = React.createContext<
  | {
    isUpLoading: boolean;
    fileInputRef: React.RefObject<HTMLInputElement>;
    selectedFiles: FilesField; // тип FilesField объявлен в хуке 'useFilesFormField'
    handleFilesChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  | undefined
>(undefined);

// кастомный хук, который позволит удобно юзать наш контекст 
// и будет контролировать корректные условия запуска (элемент управления загрузчиком не может быть использован вне контекста загрузчика)
export const useFilesUploader = () => {
    const context = useContext(UploaderContext);

    if (!context) {
        throw new Error(
            'This component must be used within a <FileUploader> component.'
        );
    }

    return context;
};

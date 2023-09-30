import { useContext } from "react";
import { MenuContext } from "../../Menu/helpers";

// TODO: use for menu too
// кастомный хук, который позволит удобно юзать наш контекст 
// и будет контролировать корректные условия запуска (элемент управления загрузчиком не может быть использован вне контекста загрузчика)
export const useFilesUploader = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error(
            'This component must be used within a <FileUploader> component.'
        );
    }

    return context;
};

import { useContext } from "react";
import { MenuContext } from "../../Menu/helpers";

// TODO: use for menu too
export const useFilesUploader = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error(
            'This component must be used within a <FileUploader> component.'
        );
    }

    return context;
};

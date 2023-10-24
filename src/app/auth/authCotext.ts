import { createContext } from "react";
import { EPopupType } from "@/app/auth/components/AuthPopup";

 type TLogPart = {
  first: boolean,
  second: boolean,
  third: boolean,
};

 type AuthContextType = {
    isAuth: boolean,
    isPopup: TLogPart,
    onPopupOpen: (idx: number) => void;
    onPopupClose: () => void;
    onNextPart: (idx?: number) => void;
    onPopupTypeChange: (type: EPopupType) => void;
  }

export const AuthContext = createContext<AuthContextType | null>(null);
export type {TLogPart, AuthContextType};

import { createContext } from "react";

 type TLogPart = {
  first: boolean,
  second: boolean,
  third: boolean,
};

 type AuthContextType = {
    isAuth: boolean,
    isLoginPopup: TLogPart,
    isRegistrationPopup: boolean,
    onLoginPopupOpen: (idx: number) => void;
  }

export const AuthContext = createContext<AuthContextType | null>(null);
export type {TLogPart, AuthContextType};

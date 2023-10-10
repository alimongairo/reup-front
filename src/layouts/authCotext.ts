import { createContext } from "react";

export type AuthContextType = {
    isAuth: boolean,
    isLoginPopup: boolean,
    isRegistrationPopup: boolean,
    onLoginPopupOpen: () => void;
  }

export const AuthContext = createContext<AuthContextType | null>(null);

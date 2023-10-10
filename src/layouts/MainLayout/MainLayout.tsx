import { ReactNode, createContext, useState } from 'react';
import { Header, MobileToolbar } from "../../components/ui";
import cx from './index.module.scss';
import { ERoles } from '../../app/router/config';
import { AuthContextType } from "../authCotext";

interface IProps { children: ReactNode }


export default function MainLayout({ children }: IProps) {
  // TODO: mock
  const isAuth = false;

  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isRegistrationPopup, setIsRegistrationPopup] = useState(false);

const onLoginPopupOpen = () => {
  console.log("onLoginPopupOpen")
}
  const AuthContext = createContext<AuthContextType>({
    isAuth,
    isLoginPopup,
    isRegistrationPopup,
    onLoginPopupOpen,
  });



  return (
    <div className={cx.wrapper}>
      <AuthContext.Provider value={{ isAuth, isLoginPopup, isRegistrationPopup, onLoginPopupOpen }}>
        <Header type={ERoles.customer} />
        <div className={cx.container}>{children}</div>
        <MobileToolbar />
      </AuthContext.Provider>
    </div>
  )
}

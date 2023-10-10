import { ReactNode, createContext, useState, useMemo } from 'react';
import { Button, Header, MobileToolbar } from "../../components/ui";
import cx from './index.module.scss';
import { ERoles } from '../../app/router/config';
import { AuthContext, AuthContextType } from "../authCotext";
import PopUp from "../../components/ui/PopUp";

interface IProps { children: ReactNode }


export default function MainLayout({ children }: IProps) {
  // TODO: mock
  const isAuth = false;

  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isRegistrationPopup, setIsRegistrationPopup] = useState(false);

  const onLoginPopupOpen = () => {
    console.log('onLoginPopupOpen')
    setIsLoginPopup(true);
  }

  const onLoginPopupClose = () => {
    console.log("onLoginPopupClose")
  }

  const initialContextValue: AuthContextType = useMemo(() => {
    return {
      isAuth,
      isLoginPopup,
      isRegistrationPopup,
      onLoginPopupOpen,
    };
  }, [isAuth]);

  return (
    <>
      <div className={cx.wrapper}>
        <AuthContext.Provider value={initialContextValue}>
          <Header type={ERoles.customer} />
          <div className={cx.container}>{children}</div>
          <MobileToolbar />
        </AuthContext.Provider>
      </div>

      <PopUp
        visible={isLoginPopup}
        onClose={onLoginPopupClose}
        type='custom'
        customButtons={
          <>
            <Button onClick={onLoginPopupClose}>назад</Button>
            <Button onClick={() => { console.log('SAVE') }}>сохранить</Button>
          </>
        }
      >
        <div>LoginPopup</div>
      </PopUp>

    </>
  )
}

import { useState, useMemo } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router";
import '../styles/global.css';
import { AuthContext, AuthContextType } from "./auth";
import { PopUp, Typography } from "../components/ui/";
import FirstScreen from "./auth/components/FirstScreen";
import SecondScreen from "./auth/components/SecondScreen";
import ThirdScreen from "./auth/components/ThirdScreen";

function App() {
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

  const loginPopupConf = {
    title: 'вход в личный кабинет',
    parts: [
      {
        id: 0,
        content: <FirstScreen />,
      },
      {
        id: 1,
        content: <SecondScreen />,
      },
      {
        id: 2,
        content: <ThirdScreen />,
      },
    ]
  };

  const regPopupConf = {
    title: 'регистрация',
    parts: [
      {
        id: 0,
        content:  <FirstScreen />,
      },
      {
        id: 1,
        content: <SecondScreen />,
      },
      {
        id: 2,
        content: <ThirdScreen />,
      },
    ]
  };

  return (
    <>
      <AuthContext.Provider value={initialContextValue}>
        <RouterProvider router={router} />
      </AuthContext.Provider>

      {/* TODO: use fullScreen prop after merge useWindowWidth hook */}
      <PopUp
        visible={isLoginPopup}
        onClose={onLoginPopupClose}
        type='custom'
        customButtons={false}
        isSloseBtn={false} // add back btn
        isBordered={false}
      >
        <Typography variant="h3">вход в личный кабинет</Typography>
      </PopUp>
    </>
  );
}

export default App;

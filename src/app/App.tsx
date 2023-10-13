import { useState, useMemo, useEffect } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router";
import '../styles/global.css';
import { AuthContext, AuthContextType, TLogPart } from "./auth";
import { PopUp, Typography } from "../components/ui/";
import { loginPopupConf } from "./auth/config";
import { uid } from "react-uid";
function App() {
  // TODO: mock
  const isAuth = false;

  const initialIsLoginPopup = {
    first: false,
    second: false,
    third: false,
  };

  const [activeLogin, setActiveLogin] = useState<number | null>(null);
  const [isLoginPopup, setIsLoginPopup] = useState(initialIsLoginPopup);

  const [isRegistrationPopup, setIsRegistrationPopup] = useState(false);

  const onLoginPopupOpen = (id: number) => {
    setIsLoginPopup({ ...initialIsLoginPopup, [Object.keys(isLoginPopup)[id]]: true });
  }

  const onNextLoginPart = (id?: number) => {
    setActiveLogin((prev) => {
      if (id) {
        return id;
      } else if (prev !== null && prev < Object.keys(isLoginPopup).length - 1) {
        return ++prev;
      } else if (prev === null) {
        return 1;
      } else {
        onLoginPopupClose();
        return null;
      }
    });
  }

  useEffect(() => {
    activeLogin !== null && onLoginPopupOpen(activeLogin);

    return () => {
      setIsLoginPopup(initialIsLoginPopup);
    }

  }, [activeLogin])

  const onLoginPopupClose = () => {
    console.log('onLoginPopupClose')
    setIsLoginPopup(initialIsLoginPopup); return;
  }

  const initialContextValue: AuthContextType = useMemo(() => {
    return {
      isAuth,
      isLoginPopup,
      isRegistrationPopup,
      onLoginPopupOpen,
      onNextLoginPart,
    };
  }, [isAuth]);

  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

  return (
    <>
      <AuthContext.Provider value={initialContextValue}>
        <div>
          <RouterProvider router={router} />
          {
            loginPopupConf.parts.map((part, idx) => {
              return (
                <PopUp
                  key={uid(part.id)}
                  visible={getKeyValue<keyof TLogPart, TLogPart>(Object.keys(isLoginPopup)[idx] as keyof TLogPart)(isLoginPopup)}
                  type='custom'
                  customButtons={false}
                  isSloseBtn={false} // add back btn
                  isBordered={false}
                >
                  <Typography variant="h3">{loginPopupConf.title}</Typography>
                  {part.content}
                  <button onClick={() => onNextLoginPart()}>{idx}next</button>
                </PopUp>

              )
            })
          }
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;

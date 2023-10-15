import { useState, useMemo, useEffect } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router";
import '../styles/global.css';
import { AuthContext, AuthContextType, TLogPart } from "./auth";
import { PopUp, Typography } from "../components/ui/";
import { loginPopupConf, regPopupConf } from "./auth/config";
import { uid } from "react-uid";

export enum EPopupType {
  LOGIN = 'login',
  REG = 'reg',
}
function App() {
  // TODO: вынести логику попапа в хок
  // TODO: не делать на каждый раз 2 отдельные функции - сделать через условие
  // TODO: fullsreen for popup
  // TODO: mock
  const isAuth = false;

  const initialisPopup = {
    first: false,
    second: false,
    third: false,
  };

  const [activePopupType, setActivePopupType] = useState<EPopupType>(EPopupType.LOGIN);

  const [activeLogin, setActiveLogin] = useState<number | null>(null);

  const [isPopup, setisPopup] = useState(initialisPopup);

  const popupConf = activePopupType === 'login' ? loginPopupConf : regPopupConf;

  const onPopupOpen = (id: number) => {
    setisPopup({ ...initialisPopup, [Object.keys(isPopup)[id]]: true });
  }

  const onPopupClose = () => {
    setisPopup(initialisPopup);
    return;
  }

  const onNextPart = (id?: number) => {
    setActiveLogin((prev) => {
      if (id !== undefined && !isNaN(id)) {
        return id;
      } else if (prev !== null && prev < Object.keys(isPopup).length - 1) {
        return ++prev;
      } else if (prev === null) {
        return 1;
      } else {
        onPopupClose();
        return null;
      }
    });
  }

  const onBackClick = () => {
    onNextPart(0);
  };

  const onPopupTypeChange = (type: EPopupType) => {
    setActivePopupType(type);
  }

  useEffect(() => {
    if (activeLogin !== null) {
      onPopupOpen(activeLogin);
    }

  }, [activeLogin])

  useEffect(() => {
    return () => {
      setisPopup(initialisPopup);
      setActivePopupType(EPopupType.LOGIN);
    }
  }, [])

  const initialContextValue: AuthContextType = useMemo(() => {
    return {
      isAuth,
      isPopup,
      onPopupOpen,
      onPopupClose,
      onNextPart,
      onPopupTypeChange,
    };
  }, [isAuth]);

  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

  return (
    <>
      <AuthContext.Provider value={initialContextValue}>
        <div>
          <RouterProvider router={router} />
          {
            popupConf.parts.map((part, idx) => {
              return (
                <PopUp
                  key={uid(part.id)}
                  visible={getKeyValue<keyof TLogPart, TLogPart>(Object.keys(isPopup)[idx] as keyof TLogPart)(isPopup)}
                  type='custom'
                  onBackClick={onBackClick}
                  isBackBtn={part?.isBackBtn}
                  isCloseBtn={part?.isCloseBtn} // add back btn
                  isBordered={false}
                >
                  <Typography variant="h3">{part.title}</Typography>
                  {part.content}
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

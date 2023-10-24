import React, { useState, useEffect, useMemo } from 'react'
import { Typography, PopUp } from "@/components/ui";
import { AuthContext, AuthContextType, TLogPart } from "@/app/auth";
import { uid } from "react-uid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { loginPopupConf, regPopupConf } from "@/app/auth/config";
import { useWindowWidth } from "@/hooks";

interface IProps {
    children: JSX.Element,
}

export enum EPopupType {
    LOGIN = 'login',
    REG = 'reg',
}

export default function AuthPopup({ children }: IProps) {
    const windowWidth = useWindowWidth();
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

    
    const fullScreen = useMediaQuery('(max-width:758px)');

    return (
        <AuthContext.Provider value={initialContextValue}>{children}

            {
                popupConf.parts.map((part, idx) => {
                    return (
                        <PopUp
                            key={uid(part.id)}
                            visible={getKeyValue<keyof TLogPart, TLogPart>(Object.keys(isPopup)[idx] as keyof TLogPart)(isPopup)}
                            type='custom'
                            onBackClick={onBackClick}
                            isBackBtn={part?.isBackBtn}
                            isCloseBtn={part?.isCloseBtn}
                            isBordered={false}
                            fullScreen={fullScreen}
                        >
                            <Typography variant="h3" align="center" >{part.title}</Typography>
                            {part.content}
                        </PopUp>

                    )
                })
            }
        </AuthContext.Provider>
    )
}

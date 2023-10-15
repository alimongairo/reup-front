import { FirstScreen, SecondScreen, ThirdScreen } from "./components";
import { EType } from "./components/types";

const loginPopupConf = {

    parts: [
        {
            title: 'вход в личный кабинет',
            id: 0,
            content: <FirstScreen type={EType.LOGIN} />,
            isCloseBtn: false,
            isBackBtn: false,
        },
        {
            title: 'вход в личный кабинет',
            id: 1,
            content: <SecondScreen />,
            isCloseBtn: true,
            isBackBtn: true,
        },
        {
            title: 'вы успешно вошли!',
            id: 2,
            content: <ThirdScreen type={EType.LOGIN} />,
            isCloseBtn: false,
            isBackBtn: false,
        },
    ]
};

const regPopupConf = {
    parts: [
        {
            title: 'регистрация',
            id: 0,
            content: <FirstScreen type={EType.REG} />,
            isCloseBtn: false,
            isBackBtn: false,
        },
        {
            title: 'регистрация',
            id: 1,
            content: <SecondScreen />,
            isCloseBtn: true,
            isBackBtn: true,
        },
        {
            title: 'регистрация успешно завершена!',
            id: 2,
            content: <ThirdScreen type={EType.REG} />,
            isCloseBtn: false,
            isBackBtn: false,
        },
    ]
};

export { loginPopupConf, regPopupConf }

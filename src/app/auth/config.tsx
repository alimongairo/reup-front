import { FirstScreen, SecondScreen, ThirdScreen } from "./components";
import { EType } from "./components/types";

const loginPopupConf = {
    
    parts: [
        {
            title: 'вход в личный кабинет',
            id: 0,
            content: <FirstScreen type={EType.LOGIN}/>,
        },
        {
            title: 'вход в личный кабинет',
            id: 1,
            content: <SecondScreen type={EType.LOGIN}/>,
        },
        {
            title: 'вы успешно вошли!',
            id: 2,
            content: <ThirdScreen type={EType.LOGIN}/>,
        },
    ]
};

const regPopupConf = {
    parts: [
        {
            title: 'регистрация',
            id: 0,
            content: <FirstScreen type={EType.REG}/>,
        },
        {
            title: 'регистрация',
            id: 1,
            content: <SecondScreen type={EType.REG}/>,
        },
        {
            title: 'регистрация успешно завершена!',
            id: 2,
            content: <ThirdScreen type={EType.REG}/>,
        },
    ]
};

export { loginPopupConf, regPopupConf }

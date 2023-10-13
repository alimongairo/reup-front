import { FirstScreen, SecondScreen, ThirdScreen } from "./components";
import { EType } from "./components/FirstScreen";

const loginPopupConf = {
    title: 'вход в личный кабинет',
    parts: [
        {
            id: 0,
            content: <FirstScreen type={EType.LOGIN}/>,
        },
        {
            id: 1,
            content: <SecondScreen type={EType.LOGIN}/>,
        },
        {
            id: 2,
            content: <ThirdScreen type={EType.LOGIN}/>,
        },
    ]
};

const regPopupConf = {
    title: 'регистрация',
    parts: [
        {
            id: 0,
            content: <FirstScreen type={EType.REG}/>,
        },
        {
            id: 1,
            content: <SecondScreen type={EType.REG}/>,
        },
        {
            id: 2,
            content: <ThirdScreen type={EType.REG}/>,
        },
    ]
};

export { loginPopupConf, regPopupConf }

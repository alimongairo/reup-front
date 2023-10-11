import { FirstScreen, SecondScreen, ThirdScreen } from "./components";

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

export { loginPopupConf, regPopupConf }

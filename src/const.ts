import { ERoutes } from "./app/router/config";

enum EBrickAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}

interface ITabItem {
    label: string | JSX.Element,
    link?: ERoutes | string,
    align?: EBrickAlign,
    className?: string,
    id?: string,
}

const lkTabsList = [
    {
        label: 'избранное',
        link: `${ERoutes.LK}/fav`,
        align: EBrickAlign.Left,
    },
    {
        label: 'мои заказы',
        link: `${ERoutes.LK}/orders`,
        align: EBrickAlign.Center,
    },
    {
        label: 'стать продавцом',
        link: ERoutes.CrmBrandRegistration,
        align: EBrickAlign.Right,
    },
    {
        label: 'мои данные',
        link: `${ERoutes.LK}/`,
        align: EBrickAlign.Right,
        isMain: true,
    },
];

export { lkTabsList, EBrickAlign };
export type {ITabItem};

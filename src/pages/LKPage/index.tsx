import React from 'react'
import { useParams } from "react-router-dom";
import {
  LKFav,
  LKMain,
  LKOrders
} from './tabs'
import { MainLayout } from "../../layouts";
import { Bricks, EAlign, EColorType } from "../../components/ui";
import { ERoutes } from "../../app/router/config";
import cx from './index.module.scss';

type TTabParams = {
  tabName: string;
};

type TTabName = {
  fav: React.Component;
  main: React.Component;
  orders: React.Component;
};

export default function LKPage() {
  const { tabName = "main" } = useParams<keyof TTabParams>() as TTabParams ;

  const tabs = {
    fav: <LKFav key='fav' />,
    main: <LKMain key='main' />,
    orders: <LKOrders key='orders' />,
  };

  const bricksList = [
    {
      label: 'избранное',
      link: `${ERoutes.LK}/fav`,
      align: EAlign.Left,
    },
    {
      label: 'мои заказы',
      link: `${ERoutes.LK}/orders`,
      align: EAlign.Center,
    },
    {
      label: 'стать продавцом',
      link: ERoutes.CrmBrandRegistration,
      align: EAlign.Right,
    },
    {
      label: 'мои данные',
      link: `${ERoutes.LK}/`,
      align: EAlign.Right,
      isMain: true,
    },
  ]

  const currentTab = tabs[tabName as keyof TTabName];

  return (
    <MainLayout>
      <Bricks list={bricksList} colorType={EColorType.FILL} className={cx.bricks}/>
      <div>
        {currentTab}
      </div>
    </MainLayout>
  )
}

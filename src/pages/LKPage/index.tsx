import React from 'react'
import { useParams } from "react-router-dom";
import {
  LKFav,
  LKJoin,
  LKMain,
  LKOrders
} from './tabs'
import { MainLayout } from "../../layouts";
import { Bricks, EAlign } from "../../components/ui";
import { ERoutes } from "../../app/router/config";

type TTabParams = {
  tabName: string;
};

type TTabName = {
  fav: React.Component;
  join: React.Component;
  main: React.Component;
  orders: React.Component;
};

export default function LKPage() {
  const { tabName } = useParams<keyof TTabParams>() as TTabParams;

  const tabs = {
    fav: <LKFav key='fav' />,
    join: <LKJoin key='join' />,
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
      link: `${ERoutes.LK}/join`,
      align: EAlign.Right,
    },
    {
      label: 'мои данные',
      link: `${ERoutes.LK}/main`,
      align: EAlign.Right,
    },
  ]

  const currentTab = tabs[tabName as keyof TTabName];

  return (
    <MainLayout>
      <Bricks list={bricksList} />
      <div>
        {currentTab}
      </div>
    </MainLayout>
  )
}

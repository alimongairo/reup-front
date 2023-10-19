import React from 'react'
import { useParams } from "react-router-dom";
import {
  LKFav,
  LKMain,
  LKOrders
} from './tabs'
import { MainLayout } from "../../layouts";
import { Bricks, EColorType } from "../../components/ui";
import cx from './index.module.scss';
import { lkTabsList } from "../../const";

type TTabParams = {
  tabName: string;
};

type TTabName = {
  fav: React.Component;
  main: React.Component;
  orders: React.Component;
};

export default function LKPage() {
  // разводящая это попап из шапки
  // из MobileToolbar открываем попап 

  const { tabName = "main" } = useParams<keyof TTabParams>() as TTabParams;

  const tabs = {
    fav: <LKFav key='fav' />,
    main: <LKMain key='main' />,
    orders: <LKOrders key='orders' />,
  };


  const currentTab = tabs[tabName as keyof TTabName];

  return (
    <MainLayout>
      <Bricks list={lkTabsList} colorType={EColorType.FILL} className={cx.bricks} />
      <div>
        {currentTab}
      </div>
    </MainLayout>
  )
}

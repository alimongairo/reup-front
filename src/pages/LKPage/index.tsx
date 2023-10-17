import React from 'react'
import { useParams } from "react-router-dom";
import {
  LKFav,
  LKJoin,
  LKMain,
  LKOrders
} from './tabs'
import { MainLayout } from "../../layouts";

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

  const currentTab = tabs[tabName as keyof TTabName];

  return (
    <MainLayout>
      {currentTab}
    </MainLayout>
  )
}

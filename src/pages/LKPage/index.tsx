import React from 'react';
import { useParams } from 'react-router-dom';
import { LKFav, LKMain, LKOrders } from './tabs';
import { MainLayout } from '../../layouts';
import { Bricks, EColorType } from '../../components/ui';
import cx from './index.module.scss';
import { lkTabsList } from '../../const';
import { useQuery } from '@/hooks';

type TTabParams = {
    tabName: string;
};

type TTabName = {
    fav: React.Component;
    main: React.Component;
    orders: React.Component;
};

export default function LKPage() {
    const { tabName = 'main' } = useParams<keyof TTabParams>() as TTabParams;

    const query = useQuery();

    const tabs = {
        fav: <LKFav key="fav" />,
        main: <LKMain key="main" />,
        orders: (
            <LKOrders
                key="orders"
                content={query.get('id') ? 'details' : 'main'}
            />
        ),
    };

    const currentTab = tabs[tabName as keyof TTabName];

    return (
        <MainLayout>
            <Bricks
                list={lkTabsList}
                colorType={EColorType.FILL}
                className={cx.bricks}
            />
            <div>{currentTab}</div>
        </MainLayout>
    );
}

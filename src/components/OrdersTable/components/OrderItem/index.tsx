import React from 'react';
import { ERoutes } from '@/router/types';
import { createSearchParams, useNavigate } from 'react-router-dom';
import cx from './index.module.scss';
import { Button } from '@/components/ui';

export default function OrderItem() {
    const navigate = useNavigate();
    const onDetailsClick = () => {
        navigate({
            pathname: `${ERoutes.LK}/orders/`,
            search: createSearchParams({
                id: '12131333',
            }).toString(),
        });
    };
    return (
        <div className={cx.wrapper}>
            {/* <div className={cx.info}> */}
            <div className={cx.borderBlock}>
                <span className={cx.base}>
                    <span>№200493</span>
                    <span>в пути</span>
                </span>
                <span className={cx.status}>оплачено</span>
            </div>
            <span className={cx.date}>
                <span>ожидаемая дата доставки</span>
                <span className={cx.thin}>12 января</span>
            </span>
            <span className={cx.sum}>
                <span className={cx.thin}>6 товаров</span>
                <span>12000 ₽</span>
            </span>
            {/* </div> */}
            {/* 
            <div className={cx.list}> */}
            <div className={cx.itemsList}>itemsList</div>
            <div className={cx.more}>
                <Button onClick={onDetailsClick}>подробнее</Button>
            </div>

            {/* </div> */}
        </div>
    );
}

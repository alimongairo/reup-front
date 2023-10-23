import React from 'react';
import cx from './index.module.scss';
import cls from 'classnames';
import { MainLayout } from "../../layouts";
import { Breadcrumbs } from "@mui/material";
import { ERoutes } from "../../app/router/config";
import { Link } from "react-router-dom";
import { ProductInfo } from "./components";

export default function ProductPage() {
    return (
        <MainLayout>

            <div className={cx.wrapper}>

                <div className={cls(cx.breadcrumbs, "as-desktop")}>
                    <Breadcrumbs aria-label="breadcrumb" >
                        <Link to={ERoutes.Default}>главная</Link>
                        <Link to={ERoutes.Default}>каталог</Link>
                        <p>блузка женская ‘лэйди’</p>
                    </Breadcrumbs>
                </div>
                
                <ProductInfo />

            </div>

        </MainLayout>
    )
}

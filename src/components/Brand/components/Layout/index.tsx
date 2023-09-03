import React, { useState, ReactNode } from 'react';
import { Head } from "..";
import cx from './index.module.scss';
import ProductItem from "../../../ProductItem";
import { uid } from "react-uid";
import FiltersImg from '../../../../../static/images/crm/filters.png';
import { Image } from "../../../ui";

interface IProps {
    isEditable: boolean,
    component: ReactNode,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
}

export default function Layout({ isEditable, component, isEditing, setIsEditing }: IProps) {
    const productsPlug = Array(27).fill(null);

    return (
        <>
            {
                isEditable && <Head isEditable={isEditable} isEditing={isEditing} setIsEditing={setIsEditing} />
            }


            {component}

            <div id="products" className={cx.products}>
                <Image src={FiltersImg} className={cx.filters} />
                <div className={cx.list}>

                    {
                        productsPlug.map((_, index) => <ProductItem key={uid(index)} />)
                    }

                </div>
            </div>

        </>
    )
}

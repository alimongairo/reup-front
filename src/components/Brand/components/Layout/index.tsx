import React, { useState, ReactNode, useMemo } from 'react';
import { Head } from "..";
import cx from './index.module.scss';
import ProductItem from "../../../ProductItem";
import { uid } from "react-uid";
import FiltersImg from '../../../../../static/images/crm/filters.png';
import { Image } from "../../../ui";
import { IMenuContext, MenuContext, menuMaps } from "../../components/Menu/helpers";
import { useParams } from "react-router-dom";
import { EColors, EFamilies, ELabelsName, TSchemeData, TSchemeNum } from "../../components/Menu/models.ts";

interface IProps {
    isEditable: boolean,
    component: ReactNode,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
    data: TSchemeData,
}

export default function Layout({ isEditable, component, isEditing, setIsEditing, data }: IProps) {
    const productsPlug = Array(27).fill(null);
    const [activeMenu, setActiveMenu] = useState(ELabelsName.DefaultList);


    const { schemeId } = useParams();

    const toHome = () => {
        setActiveMenu(ELabelsName.DefaultList);
    };

    const updateData = (newData: TSchemeData) => {
        console.log({ newData, data });
        // TODO: add schemeData (данные заполненного поля - записывается в стэйт (мне кажется, тут достаточно контекста))
    };

    const initialContextValue: IMenuContext = useMemo(() => {
        return {
            setActiveMenu,
            toHome,
            schemeNum: Number(schemeId) as TSchemeNum,
            schemeData: data,
            updateData,
        };
    }, [schemeId]);


    return (
        <MenuContext.Provider value={initialContextValue}>
            {
                isEditable && <Head isEditable={isEditable} isEditing={isEditing} setIsEditing={setIsEditing} activeMenu={activeMenu} />
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

        </MenuContext.Provider>
    )
}

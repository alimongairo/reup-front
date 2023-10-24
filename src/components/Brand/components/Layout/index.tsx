import React, { useState, ReactNode, useMemo } from 'react';
import { Head } from "..";
import ProductItem from "@/components/ProductItem";
import { uid } from "react-uid";
import FiltersImg from 'S#/images/crm/filters.png';
import { Image } from "@/components/ui";
import { IMenuContext, MenuContext } from "@/components/Brand/components/Menu/helpers";
import { useParams } from "react-router-dom";
import { ELabelsName, TSchemeData, TSchemeNum } from "@/components/Brand/components/Menu/models.ts";
import { IScheme1Brand, IScheme2Brand, IScheme3Brand } from "@/types/brandTypes.ts";
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    component: ReactNode,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
    data: IScheme1Brand | IScheme2Brand | IScheme3Brand,
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

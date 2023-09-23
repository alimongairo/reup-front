import React, { useState, useMemo } from 'react';
import cls from 'classnames';
import cx from './index.module.scss';
import { IMenuContext, MenuContext, menuMaps } from "./helpers";
import { EColors, EFamilies, ELabelsName, TSchemeData, TSchemeNum } from "./models";
import { useParams } from "react-router-dom";

interface IProps {
  visible: boolean;
}


export default function Menu({ visible }: IProps) {
  const [activeMenu, setActiveMenu] = useState(ELabelsName.DefaultList);
  const DisplayComponent = menuMaps.get(activeMenu);

  // TODO: mock
  const schemeData = {
    editText: [{
      name: "string",
      value: "string",
      title: "string",
    }],
    bgColor: [{
      title: "string",
      name: "string",
      // value: '#A175FF',
    }],
    colorAndFamily: [{
      title: "string",
      name: "string",
      family: EFamilies.DelaGothicOne,
      size: 999,
      color: EColors.Black,
    }],
    categories: {
      value: [{
        title: "string",
        name: "string",
      }],
      allCategories: [{
        title: "string",
        name: "string",
      }],
    },
  };

  const { schemeId } = useParams();

  const toHome = () => {
    setActiveMenu(ELabelsName.DefaultList);
  };

  const updateData = (newData: TSchemeData) => {
    console.log({ newData, schemeData });
    // TODO: add schemeData (данные заполненного поля - записывается в стэйт (мне кажется, тут достаточно контекста))
  };

  const initialContextValue: IMenuContext = useMemo(() => {
    return {
      setActiveMenu,
      toHome,
      schemeNum: Number(schemeId) as TSchemeNum,
      schemeData: schemeData,
      updateData,
    };
  }, [schemeId]);
  
  return (
    <div className={cls(cx.wrapper, { [cx.visible]: visible })}>
      <MenuContext.Provider value={initialContextValue}>
        {DisplayComponent}
      </MenuContext.Provider>
    </div>
  )
}

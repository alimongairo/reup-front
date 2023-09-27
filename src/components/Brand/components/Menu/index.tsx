import React from 'react';
import { menuMaps } from "./helpers";
import { ELabelsName } from "./models";
import cls from 'classnames';
import cx from './index.module.scss';


interface IProps {
  visible: boolean;
  activeMenu: ELabelsName;
}


export default function Menu({ visible, activeMenu }: IProps) {

  const DisplayComponent = menuMaps.get(activeMenu);

  return (
    <div className={cls(cx.wrapper, { [cx.visible]: visible })}>
      {DisplayComponent}
    </div>
  )
}

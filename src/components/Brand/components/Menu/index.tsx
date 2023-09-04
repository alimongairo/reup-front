import React, {useState} from 'react';
import cls from 'classnames';
import cx from './index.module.scss';
import { menuMaps } from "./helpers";
import { ELabelsName } from "./models";

interface IProps {
  visible: boolean;
}


export default function Menu({ visible }: IProps) {
  const [activeMenu, setActiveMenu] = useState(ELabelsName.DefaultList);
  const DisplayComponent = menuMaps.get(activeMenu);

  return (
    <div className={cls(cx.wrapper, { [cx.visible]: visible })}>
      {/* <MenuContext.Provider value={initialContextValue}> */}
        {DisplayComponent}
      {/* </MenuContext.Provider> */}
    </div>
  )
}

import { ReactNode } from 'react';
import cls from 'classnames';
import cx from './index.module.scss';
import { ITabItem } from "../../../../../const";
import { uid } from "react-uid";
import { NavLink } from '../../../../ui';
import { Link } from "react-router-dom";

interface IProps {
  visible: boolean;
  setVisible?: () => void;
  overlay: ITabItem[];
  title?: ReactNode;
}

const DropDown = ({ visible = false, overlay, title, setVisible }: IProps) => {
  return (
    <>
      <div onClick={setVisible} className={cx.wrapper}>
        {title}
        <ul className={cls({ [cx.visible]: visible }, cx.menu)}>
          {overlay.map((item) => (
            <li key={uid(item.label)} className={cls(cx.menuItem, item.className || "")}>
              <p>
                {
                  item.id === 'exit' 
                  ? item.label 
                  : (<NavLink to={item.link as string}>{item.label}</NavLink>)
                }
              </p>
            </li>
          ))}
        </ul>
      </div>
      {visible && <span onClick={setVisible} className={cx.mask}></span>}
    </>
  );
};

export { DropDown };

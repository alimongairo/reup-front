import React from 'react';
import { ReactComponent as LogoIcon } from "../../../../static/images/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../../../static/images/icons/loype.svg";
import {ReactComponent as HeartIcon} from "../../../../static/images/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../../../static/images/icons/user.svg";
import { ReactComponent as BasketIcon } from "../../../../static/images/icons/basket.svg";
import { ReactComponent as CRMIcon } from "../../../../static/images/icons/crm.svg";
import { ReactComponent as MarketIcon } from "../../../../static/images/icons/market.svg";
import cx from './index.module.scss';
import cls from 'classnames';
import { confReturner } from "./constants";

interface IProps {
  type: number,
}

export default function Header({type}: IProps ) {

  const config = confReturner(type || 0);

  return (
    <div className={cx.header}>
      <div className={cx.container}>
        <LogoIcon className={cx.logo} />
        <div className={cx.main}>
        <ul className={cx.linksList}>{config?.list.map((item) => <li>{item.name}</li>)}</ul>
        {
          config?.isSearch && <SearchIcon className={cls(cx.icon, cx.search)}/>
        }
        </div>
        {
          config?.isActions && (<ul className={cx.actions}>
            <li><HeartIcon className={cx.icon} /></li>
            <li><UserIcon className={cx.icon} /></li>
            <li><BasketIcon className={cx.icon} /></li>
          </ul>)
        }
        {
          config?.typeBtn && config?.typeBtn === "CRM" 
            ? <div className={cx.typeBtn}><CRMIcon className={cx.icon} /></div>
            : <div className={cx.typeBtn}><MarketIcon className={cx.icon} /></div>
        }
      </div>
    </div>
  )
}

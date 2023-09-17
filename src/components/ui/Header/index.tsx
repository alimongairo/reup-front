import React from 'react';
import { ReactComponent as LogoIcon } from "../../../../static/images/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../../../static/images/icons/loype.svg";
import { ReactComponent as HeartIcon } from "../../../../static/images/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../../../static/images/icons/user.svg";
import { ReactComponent as BasketIcon } from "../../../../static/images/icons/basket.svg";
import { ReactComponent as CRMIcon } from "../../../../static/images/icons/crm.svg";
import { ReactComponent as MarketIcon } from "../../../../static/images/icons/market.svg";
import cx from './index.module.scss';
import cls from 'classnames';
import { confReturner } from "./constants";
import { Link } from "react-router-dom";
import { uid } from 'react-uid';
import { ERoutes } from "../../../app/router/types";
import { NavLinkIcon, NavLink } from "..";

interface IProps {
  type: number,
}

function Header({ type }: IProps) {

  const config = confReturner(type || 0);

  return (
    <div className={cx.header}>
      <div className={cx.container}>
        <Link to={ERoutes.Default} className={cx.logo}><LogoIcon  /></Link>
        <div className={cx.main}>
          <ul className={cls("as-desktop", cx.linksList)}>{config?.list.map((item) =>

            <li key={uid(item.name)}>
              <NavLink to={item.link}>
                {item.name}
              </NavLink>
            </li>)}

          </ul>
          {
            config?.isSearch && <SearchIcon className={cls(cx.icon, cx.search)} />
          }
        </div>
        {
          config?.isActions && (
            <ul className={cls("as-desktop", cx.actions)}>
              <li><NavLinkIcon to="/" isFill={true}><HeartIcon className={cx.icon} /></NavLinkIcon></li>
              <li><NavLinkIcon to="/" isFill={false}><UserIcon className={cx.icon} /></NavLinkIcon></li>
              <li><NavLinkIcon to="/" isFill={false}><BasketIcon className={cx.icon} /></NavLinkIcon></li>
            </ul>)
        }
        {
          config?.typeBtn && config?.typeBtn === "CRM"
            ? <NavLinkIcon to="/crm" className={cls("as-desktop", cx.typeBtn)}><CRMIcon className={cx.icon} /></NavLinkIcon>
            : config?.typeBtn === 'market' ? <NavLinkIcon to="/" className={cls("as-desktop", cx.typeBtn)}><MarketIcon className={cx.icon} /></NavLinkIcon>
              : null
        }
      </div>
    </div>
  )
}

import MobileToolbar from "./MobileToolbar";
export {MobileToolbar, Header}

import React from 'react'
import { ReactComponent as LogoIcon } from "../../../../../static/images/icons/logoShort.svg";
import { ReactComponent as BurgerIcon } from "../../../../../static/images/icons/burger.svg";
import { ReactComponent as BasketIcon } from "../../../../../static/images/icons/basket.svg";
import { ReactComponent as HeartIcon } from "../../../../../static/images/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../../../../static/images/icons/user.svg";

import NavLinkIcon from "../../NavLinkIcon";
import cx from './index.module.scss';

export default function MobileToolbar() {
    return (
        <div className={cx.wrapper}>
            <ul>
                <li><NavLinkIcon to="/" isFill={true}><LogoIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={true}><BurgerIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={true}><HeartIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={false}><UserIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={false}><BasketIcon className={cx.icon} /></NavLinkIcon></li>
            </ul>
        </div>
    )
}

import React, { useContext } from 'react'
import { ReactComponent as LogoIcon } from "../../../../../static/images/icons/logoShort.svg";
import { ReactComponent as BurgerIcon } from "../../../../../static/images/icons/burger.svg";
import { ReactComponent as BasketIcon } from "../../../../../static/images/icons/basket.svg";
import { ReactComponent as HeartIcon } from "../../../../../static/images/icons/heart.svg";
import { ReactComponent as UserIcon } from "../../../../../static/images/icons/user.svg";
import { NavLinkIcon } from "../..";
import cx from './index.module.scss';
import { AuthContext } from "../../../../app/auth";

export default function MobileToolbar() {
    
    const authContextValue = useContext(AuthContext)
    return (
        <div className={cx.wrapper}>
            <ul>
                <li><NavLinkIcon to="/" isFill={true}><LogoIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={true}><BurgerIcon className={cx.icon} /></NavLinkIcon></li>
                <li><NavLinkIcon to="/" isFill={false}><HeartIcon className={cx.icon} /></NavLinkIcon></li>
                <li onClick={!authContextValue?.isAuth ? (() => authContextValue?.onPopupOpen(0)) : undefined} style={{ cursor: 'pointer' }}>
                    <NavLinkIcon style={{ pointerEvents: (authContextValue?.isAuth ? 'all' : 'none') }} to="/" isFill={false}>
                        <UserIcon className={cx.icon} />
                    </NavLinkIcon>
                </li>
                <li><NavLinkIcon to="/" isFill={false}><BasketIcon className={cx.icon} /></NavLinkIcon></li>
            </ul>
        </div>
    )
}

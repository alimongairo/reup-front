import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from 'S#/images/icons/logoShort.svg';
import { ReactComponent as BurgerIcon } from 'S#/images/icons/burger.svg';
import { ReactComponent as BasketIcon } from 'S#/images/icons/basket.svg';
import { ReactComponent as HeartIcon } from 'S#/images/icons/heart.svg';
import { ReactComponent as UserIcon } from 'S#/images/icons/user.svg';
import { NavLinkIcon } from '../..';
import cx from './index.module.scss';
import { strokeColorReturner } from '../../../../helpers';

export default function MobileToolbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const onDropdownClick = () => {
        setDropdownVisible((state) => !state);
    };
    return (
        <div className={cx.wrapper}>
            <ul>
                <li>
                    <NavLinkIcon to="/" isFill={true}>
                        <LogoIcon className={cx.icon} />
                    </NavLinkIcon>
                </li>
                <li>
                    <NavLinkIcon to="/" isFill={true}>
                        <BurgerIcon className={cx.icon} />
                    </NavLinkIcon>
                </li>
                <li>
                    <NavLinkIcon to="/" isFill={false}>
                        <HeartIcon className={cx.icon} />
                    </NavLinkIcon>
                </li>
                {/* <li onClick={!authContextValue?.isAuth ? (() => authContextValue?.onPopupOpen(0)) : undefined} style={{ cursor: 'pointer' }}>
                    <NavLinkIcon style={{ pointerEvents: (authContextValue?.isAuth ? 'all' : 'none') }} to="/" isFill={false}>
                        <UserIcon className={cx.icon} />
                    </NavLinkIcon>
                </li> */}
                <li>
                    <button onClick={onDropdownClick}>
                        <UserIcon
                            className={cx.icon}
                            stroke={strokeColorReturner(dropdownVisible)}
                        />
                    </button>
                </li>
                <li>
                    <NavLinkIcon to="/" isFill={false}>
                        <BasketIcon className={cx.icon} />
                    </NavLinkIcon>
                </li>
            </ul>
        </div>
    );
}

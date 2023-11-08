import React from 'react';
import { strokeColorReturner } from '@/helpers';
import { NavLink } from '..';

interface IPropsNavLinkIcon {
    to: string;
    isFill?: boolean;
    children: JSX.Element;
    style?: React.CSSProperties;
    [x: string]: any;
}

// TODO: create NavLink with coloring svg

// component for color icons in active NavLink
const NavLinkIcon = ({
    to,
    isFill = true,
    children,
    style,
    ...props
}: IPropsNavLinkIcon) => {
    return (
        <NavLink to={to} {...props} style={style}>
            {({ isActive }) =>
                React.cloneElement(children, {
                    fill: isFill ? strokeColorReturner(isActive) : 'none',
                    stroke: strokeColorReturner(isActive),
                })
            }
        </NavLink>
    );
};

export default NavLinkIcon;

import React from 'react';
import { NavLink } from "react-router-dom"
import { strokeColorReturner } from "../../../../helpers";

interface IPropsNavLinkIcon {
    to: string,
    isFill?: boolean,
    children: JSX.Element,
    [x: string]: any,
}


// component for color icons in active NavLink
const NavLinkIcon = ({ to, isFill = true, children, ...props }: IPropsNavLinkIcon) => {
    return (
        <NavLink to={to} {...props}>
            {({ isActive }) => (
                React.cloneElement(children, {
                    fill: isFill ? strokeColorReturner(isActive) : "none",
                    stroke: strokeColorReturner(isActive),
                })
            )}
        </NavLink>
    )
}

export default NavLinkIcon;

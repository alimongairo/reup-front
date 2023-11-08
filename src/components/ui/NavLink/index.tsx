import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps extends NavLinkProps {
    isFill?: boolean;
}

export default function MyNavLink(props: IProps) {
    const { to, children, className, isFill = true, style } = props;

    return (
        <NavLink
            to={to}
            style={style}
            className={({ isActive }) =>
                cls({ [cx.active]: isActive }, className as string, {
                    [cx.isFill]: isFill,
                })
            }
        >
            {children}
        </NavLink>
    );
}

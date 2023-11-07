import { ReactNode } from 'react';
import cls from 'classnames';
import cx from './index.module.scss';
import { ITabItem } from '../../../../../const';
import { uid } from 'react-uid';
import { NavLink } from '../../../../ui';
import { IHeaderLink } from "@/router/config";

interface IProps {
    visible: boolean;
    setVisible?: () => void;
    overlay: ITabItem[] | IHeaderLink[];
    title?: ReactNode;
    type: "lk" | "default";
}

const DropDown = ({ visible = false, overlay, title, setVisible, type }: IProps) => {
    return (
        <>
            <div
                onClick={setVisible}
                className={cx.wrapper}
                onKeyDown={setVisible}
                role="button"
                tabIndex={0}
            >
                {title}
                <ul className={cls({ [cx.visible]: visible }, cx.menu)}>
                    {
                        type === "lk" ?
                            (overlay as ITabItem[]).map((item) => (
                                <li
                                    key={uid(item.label)}
                                    className={cls(cx.menuItem, item.className || '')}
                                >
                                    <p>
                                        {item.id === 'exit' ? (
                                            item.label
                                        ) : (
                                            <NavLink to={item.link as string}>
                                                {item.label}
                                            </NavLink>
                                        )}
                                    </p>
                                </li>
                            )) :
                            (overlay as IHeaderLink[]).map((item) => (
                                <li
                                    key={uid(item.name)}
                                    className={cls(cx.menuItem || '')}
                                >
                                    <p>
                                        <NavLink to={item.link as string}>
                                            {item.name}
                                        </NavLink>
                                    </p>
                                </li>
                            ))
                    }

                </ul>
            </div>
            {visible && (
                <span
                    onClick={setVisible}
                    className={cx.mask}
                    onKeyDown={setVisible}
                    role="button"
                    tabIndex={0}
                ></span>
            )}
        </>
    );
};

export { DropDown };

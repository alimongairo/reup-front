import { ReactNode } from 'react';

import { ReactComponent as ArrowIcon } from 'S#/images/icons/arrows/default.svg';

import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
    onBack?: () => void;
    title: string;
    children: ReactNode;
    className?: string;
}

const Container = ({ onBack, title, children, className }: IProps) => {
    return (
        <div className={cx.wrapper}>
            <div className={cx.header}>
                <div
                    className={cx.back}
                    onClick={() => onBack && onBack()}
                    onKeyDown={() => onBack && onBack()}
                    role="button"
                    tabIndex={0}
                >
                    {onBack && <ArrowIcon fill="#000000" stroke="#000000" />}
                </div>
                <p className={cx.title}>{title}</p>
            </div>
            <div className={cls(className, cx.content)}>{children}</div>
        </div>
    );
};

export default Container;

import React, { useContext } from 'react';
import { EType } from '../types';
import { Button } from '@/components/ui';
import { AuthContext } from '../..';
import cx from './index.module.scss';
import { Link } from 'react-router-dom';
import { ERoutes } from '@/router/config';

interface IProps {
    type?: EType;
}

export default function ThirdScreen({ type = EType.LOGIN }: IProps) {
    const authContextValue = useContext(AuthContext);

    return (
        <div className={cx.wrapper}>
            {type === EType.LOGIN ? (
                <Button onClick={authContextValue?.onPopupClose as () => void}>
                    к покупкам
                </Button>
            ) : (
                <p>
                    <span className={cx.note}>добавили информацию в</span>
                    <span>
                        <Link to={ERoutes.Default} className={cx.link}>
                            {' '}
                            личный кабинет{' '}
                        </Link>
                    </span>
                </p>
            )}
        </div>
    );
}

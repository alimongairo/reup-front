import { useState } from 'react';
import { Button, EBtnColor } from '@/components/ui';
import cls from 'classnames';
import cx from './index.module.scss';
import { uid } from 'react-uid';

const list = [
    {
        name: 'активные',
    },
    {
        name: 'завершенные',
    },
];

interface IProps {
    content: JSX.Element;
}

export default function TabsWithBricks({ content }: IProps) {
    const [active, setActive] = useState(0);

    const changeActive = (id: number) => {
        setActive(id);
    };
    return (
        <div className={cx.wrapper}>
            <div className={cx.tabs}>
                {list.map((item, idx) => (
                    <Button
                        className={cls({ [cx.active]: active === idx })}
                        key={uid(item.name)}
                        onClick={() => changeActive(idx)}
                        isActive={active === idx}
                        colorM={EBtnColor.TAB}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
            <div className={cx.content}>
                <div className={cx.contentInner}>{content}</div>
            </div>
        </div>
    );
}

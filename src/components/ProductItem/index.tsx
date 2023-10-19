import React, { useState } from 'react'
import cx from './index.module.scss';
import cls from 'classnames';
import { Image, Button, Fav } from "../ui";

interface IProps {
    className?: string;
    size?: 'default' | 'apativeSize';
}

export default function ProductItem({className, size = "default"}: IProps) {
    const [isFav, setIsFav] = useState(false);

    const onFavClick = () => {
        setIsFav(prev => !prev);
    }

    return (
        <div className={cls(cx.product, cx[size], className)}>
            <div className={cx.image}>
                <Fav isActive={isFav} onClick={onFavClick} className={cx.fav} />
                <Image className={cx.img}/>
            </div>
            <div className={cx.info}>
                <p className={cx.title}>Название</p>
                <p className={cx.sub}>Бренд</p>
                <div className={cx.ftr}>
                    <Button>в корзину</Button>
                    <p>7 500&nbsp;₽</p>
                </div>
            </div>
        </div>
    )
}

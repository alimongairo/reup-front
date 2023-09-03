import React, { useState } from 'react'
import cx from './index.module.scss';
import { Image, Button, Fav } from "../ui";

export default function ProductItem() {
    const [isFav, setIsFav] = useState(false);

    const onFavClick = () => {
        setIsFav(prev => !prev);
    }

    return (
        <div className={cx.product}>
            <div className={cx.image}>
                <Fav isActive={isFav} onClick={onFavClick} className={cx.fav} />
                <Image className={cx.img}/>
            </div>
            <div className={cx.info}>
                <p className={cx.title}>Название</p>
                <p className={cx.sub}>Бренд</p>
                <div className={cx.ftr}>
                    <Button colorM="black">в корзину</Button>
                    <p>7 500 ₽</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cls from "classnames";
import cx from './index.module.scss';

interface IProps {
    alt: string,
    src: string | undefined,
    className?: string ,
}

// TODO: we can create trackWindowScroll in Gallery (visible on load)
export default function Image(props: IProps) {
    const { alt, src = "", className } = props;

    return (
        <div className={cls(cx.image, className)}>
            <LazyLoadImage
                alt={alt}
                src={src} // use normal <img> attributes as props
                effect="blur"

            />
        </div>
    )
}

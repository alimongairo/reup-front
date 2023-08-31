import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cx from './index.module.scss';

interface IProps  {
    alt: string,
    height: number,
    width: number,
    src: string | undefined,
}

// TODO: we can create trackWindowScroll in Gallery (visible on load)
export default function Image(props: IProps) {
    const { alt, height, width, src="" } = props;

    return (
        <LazyLoadImage
            alt={alt}
            height={height}
            width={width}
            src={src} // use normal <img> attributes as props
            effect="blur"
        />
    )
}

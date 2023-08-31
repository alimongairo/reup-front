import React from 'react';
import { LazyLoadComponentProps, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import cx from './index.module.scss';

interface IProps extends LazyLoadComponentProps {
    alt: string,
    height: number,
    width: number,
    src: string,
}

// TODO: create trackWindowScroll in Gallery 
export default function Image(props: IProps) {
    const { alt, height, width, src } = props;

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

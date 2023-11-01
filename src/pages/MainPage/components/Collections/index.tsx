import CollectionCard from './CollectionCard';
import img1 from 'S#/images/hardcode/main/collections1.png';
import img2 from 'S#/images/hardcode/main/collections2.png';
import img3 from 'S#/images/hardcode/main/collections3.png';
import img4 from 'S#/images/hardcode/main/collections4.png';
import cx from './index.module.scss';
import { Typography } from '@mui/material';
import { uid } from 'react-uid';

const collectionCardProps = [
    {
        title: 'название коллекции',
        brand: 'бренд',
        img: img1,
    },
    {
        title: 'название коллекции',
        brand: 'бренд',
        img: img2,
    },
    {
        title: 'название коллекции',
        brand: 'бренд',
        img: img3,
    },
    {
        title: 'название коллекции',
        brand: 'бренд',
        img: img4,
    },
];

const Collections = () => {
    return (
        <div className={cx.collections}>
            <Typography variant="h1">коллекции</Typography>
            <div className={cx.wrapper}>
                {collectionCardProps.map((item, index) => {
                    return (
                        <CollectionCard key={uid(index)} id={index} {...item} />
                    );
                })}
            </div>
        </div>
    );
};

export default Collections;

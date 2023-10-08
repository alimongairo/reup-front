import CollectionCard from './CollectionCard';


import cx from './index.module.scss';
import { Typography } from "@mui/material";

const collectionCardProps = {
  title: 'название коллекции',
  brand: 'бренд',
};

const Collections = () => {
  return (
    <div className={cx.collections}>
      <Typography variant="h1">коллекции</Typography>
      <div className={cx.wrapper}>
        <CollectionCard id={1} {...collectionCardProps} />
        <CollectionCard id={2} {...collectionCardProps} />
        <CollectionCard id={3} {...collectionCardProps} />
        <CollectionCard id={4} {...collectionCardProps} />
      </div>
    </div>
  );
};

export default Collections;

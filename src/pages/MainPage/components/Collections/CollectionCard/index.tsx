import { Image } from "@/components/ui";
import cx from './index.module.scss';

interface IProps {
  id: number;
  img?: string,
  title: string;
  brand: string;
}

const CollectionCard = ({ id, img = process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE, title, brand }: IProps) => {
  return (
    <div className={cx.wrapper} >
      <Image src={img} alt="img" className={cx.image}/>
      <div className={cx.text}>
        <p>{title}</p>
        <p >{brand}</p>
      </div>
    </div>
  );
};

export default CollectionCard;

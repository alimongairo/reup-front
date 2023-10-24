import {Image} from '@/components/ui';
import { EFamilies } from "../../../../../../models";
import DelaGothicOne from './DelaGothicOne.svg';
import Roboto from './Roboto.svg';
import cx from './index.module.scss';

const previews = {
  [EFamilies.DelaGothicOne]: (
    <Image src={DelaGothicOne} alt={'preview Dela Gothic One'} />
  ),
  [EFamilies.Gilroy]: (
    <Image src={DelaGothicOne} alt={'preview Dela Gothic One'} />
  ),
  [EFamilies.Poppins]: (
    <Image src={DelaGothicOne} alt={'preview Dela Gothic One'} />
  ),
  [EFamilies.Roboto]: <Image src={Roboto} alt={'preview Roboto'} />,
  [EFamilies.Comfortaa]: (
    <Image src={DelaGothicOne} alt={'preview Dela Gothic One'} />
  ),
};

const PreviewFamily = ({ family }: { family: EFamilies }) => {
  return (
    <div className={cx.wrapper}>
      <p>шрифт</p>
      <div className={cx.imgWrapper}>{previews[family]}</div>
    </div>
  );
};

export default PreviewFamily;

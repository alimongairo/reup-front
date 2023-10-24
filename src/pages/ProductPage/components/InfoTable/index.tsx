import { Typography } from "@/components/ui";
import cx from './index.module.scss';

const InfoTable = () => {
  return (
    <div>
      <div className={cx.row}>
        <Typography variant="h6" className={cx.title}>состав</Typography>
        <p>какой-то состав</p>
      </div>
      <div className={cx.row}>
        <Typography variant="h6" className={cx.title}>сезон</Typography>
        <p>зима-лето</p>
      </div>
      <div className={cx.row}>
        <Typography variant="h6" className={cx.title}>узор</Typography>
        <p>зебра</p>
      </div>
      <div className={cx.row}>
        <Typography variant="h6" className={cx.title}>стиль</Typography>
        <p>постмодерн</p>
      </div>
      <div className={cx.row}>
        <Typography variant="h6" className={cx.title}>цвет</Typography>
        <p>белый</p>
      </div>
    </div>
  );
};

export default InfoTable;

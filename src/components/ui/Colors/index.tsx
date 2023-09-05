import classNames from 'classnames';

import cx from './index.module.scss';
import MyTypography from "../Typography";

export enum EColors {
  Pink = '#A175FF',
  Blue = '#7991F5',
  Green = '#BDDA63',
  White = '#FFFFFF',
  Grey = '#D3D0C8',
  Black = '#000000',
}

const defaultColors: IColor[] = Object.entries(EColors).map(
  ([name, value]) => ({
    name,
    value,
  }),
);

export interface IColor {
  name: string;
  value?: EColors;
}

interface IColorsProps {
  colors?: IColor[];
  value?: EColors;
  onChange?: (color: EColors) => void;
}

export const Colors = ({ colors, onChange, value }: IColorsProps) => {
  return (
    <div>
      <MyTypography variant="h3">цвет</MyTypography>
      <div className={cx.colorList}>
        {(colors || defaultColors).map((color) => (
          <div
            className={classNames(cx.colorItem, {
              [cx.active]: color.value === value,
            })}
            key={color.value}
            onClick={() => {
              onChange?.(color.value || EColors.Black);
            }}
            style={{ backgroundColor: color.value }}
          ></div>
        ))}
      </div>
    </div>
  );
};
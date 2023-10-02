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
  value?: string | null;
}

interface IColorsProps {
  colors?: IColor[];
  value?: string | null;
  onChange?: (color: string) => void;
}

export const Colors = ({ colors, onChange, value }: IColorsProps) => {
  return (
    <div className={cx.colorList}>
      {(colors || defaultColors).map((color) => (
        <div
          className={classNames(cx.colorItem, {
            [cx.active]: color.value === value,
          })}
          key={color.value}
          onClick={() => {
            onChange?.(color.value || '#000000');
          }}
          style={{ backgroundColor: color.value || "FFFFFF"}}
        ></div>
      ))}
    </div>
  );
};

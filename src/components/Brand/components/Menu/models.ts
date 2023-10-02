// import { EColors } from '@/components/common/Colors';
export enum EColors {
  Pink = '#A175FF',
  Blue = '#7991F5',
  Green = '#BDDA63',
  White = '#FFFFFF',
  Grey = '#D3D0C8',
  Black = '#000000',
}


export enum ELabelsName {
  DefaultList = 'defaultList',
  AddCategory = 'addCategory',
  ColorAndFamily = 'colorAndFamily',
  EditText = 'editText',
  BgColor = 'BgColor',
}

export enum EFamilies {
  DelaGothicOne = 'Dela Gothic One',
  Gilroy = 'Gilroy',
  Poppins = 'Poppins',
  Roboto = 'Roboto',
  Comfortaa = 'Comfortaa',
}

export type TSchemeNum = 0 | 1 | 2;

export type TEditText = {
  name: string;
  value: string | null;
  title: string;
};

export type TBgColor = {
  title: string;
  name: string;
  value?: EColors;
};

export type TColorAndFamily = {
  title: string; // имя изменяемого текста
  name: string; // ключ изменяемого текста
  family: EFamilies | string | null; // familyName
  size: string | null;
  color: string | null;
};

export type TCategory = {
  title: string;
  name: string;
};

export type TCategories = {
  value: TCategory[];
  allCategories: TCategory[];
};

export type TSchemeData = {
  editText: TEditText[];
  bgColor: TBgColor[];
  colorAndFamily: TColorAndFamily[];
  categories: TCategories;
  images: any;
};

import { ChangeEvent, createContext, ReactNode } from 'react';

import DefaultMenu from './components/options/HomeMenu';
// import Categories from '@/components/Brands/Menu/Categories';
// import ColorAndFamily from '@/components/Brands/Menu/ColorAndFamily';
// import EditText from '@/components/Brands/Menu/EditText';
// import BgColor from '@/components/Brands/Menu/BgColor';
import {
  ELabelsName,
  TSchemeData,
  TSchemeNum,
} from './models';
import { AddCategory, ColorAndFamily, EditText, BgColor } from "./components/options";
import { FilesField } from "../FilesUploader/logic/useFilesFormField";


export const menuMaps = new Map<ELabelsName, ReactNode>([
  [ELabelsName.DefaultList, <DefaultMenu key={1} />],
  [ELabelsName.AddCategory, <AddCategory key={2} />],
  [ELabelsName.ColorAndFamily, <ColorAndFamily key={3} />],
  [ELabelsName.EditText, <EditText key={4} />],
  [ELabelsName.BgColor, <BgColor key={5} />],
]);

export interface IMenuContext {
  setActiveMenu: (activeMenu: ELabelsName) => void;
  toHome: () => void;
  schemeNum: TSchemeNum;
  schemeData: TSchemeData;
  updateData: (data: TSchemeData) => void;
  // files uploader
  isUpLoading: boolean;
  selectedFiles: FilesField; // тип FilesField объявлен в хуке 'useFilesFormField'
  handleFilesChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

// В контекст записывается активное окно
// Сами данные тоже нужно как-то собирать и где-то хранить, чтобы отправлять готовый объект по кнопочке "сохранить" или же ничего не отправлять по кнопочке "отмена"
export const MenuContext = createContext<IMenuContext | null>(null);

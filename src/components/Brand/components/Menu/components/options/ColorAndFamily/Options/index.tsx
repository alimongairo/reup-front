import { Collapse, Colors, Divider } from '../../../../../../../ui';
import { SelectFamily, PreviewFamily, Size } from './components';
import { EColors, EFamilies, TColorAndFamily } from "../../../../models";

// import { setBrandSettingsByField } from '@/store/brandSetting/slice';
// import {
//   brandSettingsColorAndFamilySelector,
//   brandSettingsSelector,
// } from '@/store/brandSetting/selectors';
// import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';


const ColorOption = ({ title, color, name, family, size }: TColorAndFamily) => {
  // const dispatch = useAppDispatch();

  // const brandSettings = useAppSelector(brandSettingsSelector);

  const onChange = (newValue: any, fieldName: string) => {
    // if (brandSettings) {
    //   dispatch(
    //     setBrandSettingsByField({
    //       field: 'colorAndFamily',
    //       newData: brandSettings.colorAndFamily.map((item) => {
    //         if (item.name === name) {
    //           return {
    //             ...item,
    //             [fieldName]: newValue,
    //           };
    //         }
    //         return item;
    //       }),
    //     }),
    //   );
    // }
    console.log("onChange")
  };

  return (
    <Collapse
      title={title}
      content={
        <div className={cx.content}>
          <PreviewFamily family={family} />
          <SelectFamily family={family} onChange={onChange} />
          <Size value={size} onChange={onChange} />
          <Colors
            value={color}
            onChange={(value) => onChange(value, 'color')}
          />
        </div>
      }
    />
  );
};

const Options = () => {
  //const colorAndFamily = useAppSelector(brandSettingsColorAndFamilySelector);
  // TODO: mock
  const colorAndFamily = [
    {
      title: "string", // имя изменяемого текста
      name: "string", // ключ изменяемого текста
      family: EFamilies.Gilroy, // familyName
      size: 999,
      color: EColors.Black,
    }
  ]
  return (
    <div>
      {colorAndFamily.map((field) => {
        return (
          <>
            <ColorOption
              title={field.title}
              color={field.color}
              family={field.family}
              name={field.name}
              size={field.size}
            />
            <Divider direction={'horizontal'} />
          </>
        );
      })}
    </div>
  );
};

export default Options;

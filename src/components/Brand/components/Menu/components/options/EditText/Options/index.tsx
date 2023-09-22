import { useContext } from 'react';

import { Collapse, Input, Divider } from '../../../../../../../ui';



// import { brandSettingsTextSelector } from '@/store/brandSetting/selectors';
// import { setBrandSettingsByField } from '@/store/brandSetting/slice';
// import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';
import { useTypedDispatch, useTypedSelector } from "../../../../../../../../hooks";
import { setBrandSettingsByField } from "../../../../../../../../redux/features/brandSetting/slice";
import { brandSettingsTextSelector } from "../../../../../../../../redux/features/brandSetting/selectors";

interface IEditTextOption {
  title: string;
  value: string;
  name: string;
}

const EditTextOption = ({ title, name, value }: IEditTextOption) => {
  const dispatch = useTypedDispatch();
  const editText = useTypedSelector(brandSettingsTextSelector);

  const onChange = (newValue: string) => {
    // TODO: fix any
    const newData = editText.map((item: any) => {
      if (item.name === name) {
        return {
          ...item,
          value: newValue,
        };
      }
      return item;
    });
    dispatch(setBrandSettingsByField({ field: 'editText', newData }));
    console.log("onChange")
  };

  return (
    <Collapse
      title={title}
      content={
        <Input
          name={name}
          defaultValue={value}
          isTextArea
          className={cx.textarea}
          onChange={(e) => onChange(e.target.value)}
        />
      }
    />
  );
};

const Options = () => {
  //   const dispatch = useAppDispatch();
  //   const editText = useAppSelector(brandSettingsTextSelector);
  // TODO: mock
  const editText = [{
    name: "string",
    value: "string",
    title: "string",
  }]

  return (
    <div>
      {editText?.map((field) => {
        return (
          <div key={field.name}>
            <EditTextOption
              title={field.title}
              name={field.name}
              value={field.value}
            />
            <Divider direction={'horizontal'} />
          </div>
        );
      })}
    </div>
  );
};

export default Options;


import { Collapse, Input, Divider } from '@/components/ui';
import { useTypedDispatch, useTypedSelector } from "@/hooks";
import { setBrandSettingsByField } from "../../../../../../../../redux/features/brandSetting/slice";
import { brandSettingsTextSelector } from "../../../../../../../../redux/features/brandSetting/selectors";
import cx from './index.module.scss';
import { uid } from "react-uid";
import { TEditText } from "../../../../models";

interface IEditTextOption {
  title: string;
  value: string;
  name: string;
}

const EditTextOption = ({ title, name, value }: IEditTextOption) => {
  const dispatch = useTypedDispatch();
  const editText = useTypedSelector(brandSettingsTextSelector);

  const onChange = (newValue: string) => {
    const newData = editText.map((item: TEditText) => {
      if (item.name === name) {
        return {
          ...item,
          value: newValue,
        };
      }
      return item;
    });
    dispatch(setBrandSettingsByField({ field: 'editText', newData }));
  };


  return (
    <Collapse
      title={title}
      content={
        <Input
          name={name}
          defaultValue={value}
          className={cx.textarea}
          onChange={(e) => onChange(e.target.value)}
        />
      }
    />
  );
};

const Options = () => {
  const editText = useTypedSelector(brandSettingsTextSelector);

  return (
    <>
      {editText?.map((field) => {
        return (
          <span key={uid(field.name)}>
            <EditTextOption
              title={field.title}
              name={field.name}
              value={field.value as string}
            />
            <Divider direction={'horizontal'} color="grey" />
          </span>
        );
      })}
    </>
  );
};

export default Options;

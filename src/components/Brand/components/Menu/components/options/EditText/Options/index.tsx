
import { Collapse, Input, Divider } from '../../../../../../../ui';
import { useTypedDispatch, useTypedSelector } from "../../../../../../../../hooks";
import { setBrandSettingsByField } from "../../../../../../../../redux/features/brandSetting/slice";
import { brandSettingsTextSelector } from "../../../../../../../../redux/features/brandSetting/selectors";
import cx from './index.module.scss';

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
  const editText = useTypedSelector(brandSettingsTextSelector);

  return (
    <>
      {editText?.map((field) => {
        return (
          <span key={field.name}>
            <EditTextOption
              title={field.title}
              name={field.name}
              value={field.value}
            />
            <Divider direction={'horizontal'} color="grey"/>
          </span>
        );
      })}
    </>
  );
};

export default Options;

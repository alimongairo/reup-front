import { Collapse, Colors, Divider } from '@/components/ui';
import { useTypedDispatch, useTypedSelector } from '@/hooks';
import { SelectFamily, PreviewFamily, Size } from './components';
import { EFamilies, TColorAndFamily } from '../../../../models';
import { setBrandSettingsByField } from '../../../../../../../../redux/features/brandSetting/slice';
import {
    brandSettingsColorAndFamilySelector,
    brandSettingsSelector,
} from '../../../../../../../../redux/features/brandSetting/selectors';
import { uid } from 'react-uid';
import cx from './index.module.scss';

const ColorOption = ({ title, color, name, family, size }: TColorAndFamily) => {
    const dispatch = useTypedDispatch();

    const brandSettings = useTypedSelector(brandSettingsSelector);

    const onChange = (newValue: any, fieldName: string) => {
        if (brandSettings) {
            dispatch(
                setBrandSettingsByField({
                    field: 'colorAndFamily',
                    newData: brandSettings.colorAndFamily.map((item) => {
                        if (item.name === name) {
                            return {
                                ...item,
                                [fieldName]: newValue,
                            };
                        }
                        return item;
                    }),
                })
            );
        }
    };

    return (
        <Collapse
            title={title}
            content={
                <div className={cx.content}>
                    <PreviewFamily family={family as EFamilies} />
                    <SelectFamily
                        family={family as EFamilies}
                        onChange={onChange}
                    />
                    <Size value={size as string} onChange={onChange} />
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
    const colorAndFamily = useTypedSelector(
        brandSettingsColorAndFamilySelector
    );

    return (
        <>
            {colorAndFamily.map((field) => {
                return (
                    <div key={uid(field.name)}>
                        <ColorOption
                            title={field.title}
                            color={field.color}
                            family={field.family}
                            name={field.name}
                            size={field.size}
                        />
                        <Divider direction={'horizontal'} color="grey" />
                    </div>
                );
            })}
        </>
    );
};

export default Options;

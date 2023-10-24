import { Collapse, IColor, Colors } from '@/components/ui';
import { useTypedDispatch, useTypedSelector } from "@/hooks";
import { setBrandSettingsByField } from "@/redux/features/brandSetting/slice";
import { brandSettingsBgColorsSelector } from "@/redux/features/brandSetting/selectors";
import { uid } from "react-uid";

const BgColorOption = ({ title, value, name }: IColor & { title: string }) => {
    const dispatch = useTypedDispatch();
    const bgColors = useTypedSelector(brandSettingsBgColorsSelector);

    const onChange = (color: string) => {
        const newData = bgColors.map((item) => {
            if (item.name === name) {
                return {
                    ...item,
                    value: color,
                };
            }
            return item;
        });

        dispatch(setBrandSettingsByField({ field: 'bgColor', newData: newData }));
    };

    return (
        <Collapse
            title={title}
            content={<Colors value={value} onChange={onChange} />}
        />
    );
};

const Options = () => {
    const bgColors = useTypedSelector(brandSettingsBgColorsSelector);

    return (
        <>
            {bgColors?.map((color, index) => (
                <span key={uid(index)}>
                    <BgColorOption
                        key={color.name}
                        title={color.title}
                        name={color.name}
                        value={color.value}
                    />
                </span>
            ))}
        </>
    );
};

export default Options;

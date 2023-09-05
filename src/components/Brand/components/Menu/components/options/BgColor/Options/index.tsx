import { Collapse, Divider, EColors, IColor, Colors } from '../../../../../../../ui';


// import { useAppDispatch, useAppSelector } from '@/hooks/store';
// import { setBrandSettingsByField } from '@/store/brandSetting/slice';
// import { brandSettingsBgColorsSelector } from '@/store/brandSetting/selectors';

const BgColorOption = ({ title, value, name }: IColor & { title: string }) => {
    //   const dispatch = useAppDispatch();
    //   const bgColors = useAppSelector(brandSettingsBgColorsSelector);

    const onChange = (color: EColors) => {
        // const newData = bgColors.map((item) => {
        //   if (item.name === name) {
        //     return {
        //       ...item,
        //       value: color,
        //     };
        //   }
        //   return item;
        // });

        // dispatch(setBrandSettingsByField({ field: 'bgColor', newData: newData }));
        console.log("onChange")
    };

    return (
        <Collapse
            title={title}
            content={<Colors value={value} onChange={onChange} />}
        />
    );
};

const Options = () => {
    //   const bgColors = useAppSelector(brandSettingsBgColorsSelector);

    // TODO: mock
    const bgColors = [
        {

            title: "string",
            name: "string",
            value: EColors.Black
        }
    ]
    return (
        <div>
            {bgColors?.map((color, index) => (
                <>
                    <BgColorOption
                        key={color.name}
                        title={color.title}
                        name={color.name}
                        value={color.value}
                    />
                    <Divider key={color.name} direction={'horizontal'} />
                </>
            ))}
        </div>
    );
};

export default Options;

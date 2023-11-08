import { Typography, IRadioProps, RadioGroup } from '@/components/ui';
import { EFamilies } from '../../../../../../models';

const families: IRadioProps[] = [
    {
        label: 'Dela Gothic One',
        value: EFamilies.DelaGothicOne,
        labelPlacement: 'left',
    },
    { label: 'Gilroy', value: EFamilies.Gilroy, labelPlacement: 'left' },
    { label: 'Poppins', value: EFamilies.Poppins, labelPlacement: 'left' },
    { label: 'Roboto', value: EFamilies.Roboto, labelPlacement: 'left' },
    { label: 'Comfortaa', value: EFamilies.Comfortaa, labelPlacement: 'left' },
];

interface IProps {
    family?: EFamilies;
    onChange: (value: IRadioProps['value'], fieldName: string) => void;
}

const SelectFamily = ({ family, onChange }: IProps) => {
    const onChangeGroup = (newValue: IRadioProps['value']) => {
        onChange(newValue, 'family');
    };

    return (
        <div>
            <Typography variant="h3" style={{ marginBottom: '1rem' }}>
                шрифт
            </Typography>
            <RadioGroup
                value={family}
                radioList={families}
                direction={'vertical'}
                groupName={'family'}
                onChangeGroup={onChangeGroup}
            />
        </div>
    );
};

export default SelectFamily;

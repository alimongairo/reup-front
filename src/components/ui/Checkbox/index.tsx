import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

interface Props {
    value?: boolean;
    label?: string;
    className?: string;
    isReverse?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Checkbox = ({label, value, onChange, disabled} : Props) => {
    if (label) {
    return (
        <FormControlLabel
        control={<MuiCheckbox checked={value} onChange={onChange} />}
        disabled={disabled}
        label={label}
        />
    );
    } else {
    return <MuiCheckbox checked={value} onChange={onChange} />;
    }
}

export default Checkbox;


// const handleCheckbox = useCallback(() => {
//     setValue(!value);
//   }, [value]);
//
// <Checkbox value={value} onChange={handleCheckbox} label='test'/>

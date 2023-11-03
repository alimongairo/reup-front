import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

interface Props {
    value?: boolean;
    label?: string;
    className?: string;
    isReverse?: boolean;
    disabled?: boolean;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) => void;
    name?: string;
}

const Checkbox = ({ label, value, onChange, disabled, name }: Props) => {
    if (label) {
        return (
            <FormControlLabel
                control={
                    <MuiCheckbox
                        checked={value}
                        onChange={onChange}
                        name={name}
                    />
                }
                disabled={disabled}
                label={label}
            />
        );
    } else {
        return <MuiCheckbox checked={value} onChange={onChange} />;
    }
};

export default Checkbox;

// const handleCheckbox = useCallback(() => {
//     setValue(!value);
//   }, [value]);
//
// <Checkbox value={value} onChange={handleCheckbox} label='test'/>

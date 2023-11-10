import { useCallback, useState } from 'react';
import cx from './index.module.scss';
import { ReactComponent as DeleteIcon } from '../../../../../static/images/icons/close.svg';
import { ISelectOption } from '../../Select/interface';
import { Input } from '../..';
import { InputAdornment } from '@mui/material';

interface Props {
    option: ISelectOption | undefined;
    value: string | string[];
    onChange: any;
    withPercentage?: boolean;
}

const SelectedOption = ({ option, value, onChange, withPercentage }: Props) => {
    const [val, setVal] = useState(''); // TODO: form field control

    const handleDelete = useCallback(() => {
        onChange(
            Array.isArray(value)
                ? value.filter((el) => el !== option?.value)
                : ''
        );
    }, [onChange, option?.value, value]);

    if (option) {
        return (
            <div className={cx.option}>
                {option.label}

                {withPercentage && ( // TODO: fix padding
                    <Input
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        className={cx.percentageInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    %
                                </InputAdornment>
                            ),
                        }}
                    />
                )}

                <DeleteIcon
                    onClick={handleDelete}
                    className={cx.icon}
                    fill="#fff"
                    width="14px"
                    height="14px"
                />
            </div>
        );
    }
    return null;
};

export default SelectedOption;

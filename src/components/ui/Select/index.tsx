import { InputAdornment, MenuItem } from "@mui/material";

import { Props, SelectValue } from "./interface";
import { useCallback, useMemo } from "react";
import { Input } from "..";
import { Close as CloseIcon } from '@mui/icons-material';

// import cx from './index.module.scss';
// import cls from 'classnames';

const Select = <Multiple extends boolean | undefined = false>({
    options,
    onChange,
    multiple,
    disabled,
    value = (multiple ? [] : '') as SelectValue<Multiple>,
    isDisabledClearable = false,
    ...restProps
  }: Props<Multiple>) => {
    const handleClear = useCallback(() => {
      //@ts-ignore
      if (onChange) onChange(multiple ? [''] : '');
    }, [onChange, multiple]);
  
    const isVisibleIconClear = useMemo(
      () => !isDisabledClearable && value && (!Array.isArray(value) || Boolean(value.length)),
      [isDisabledClearable, value],
    );
  
    return (
      <Input
        {...restProps}
        fullWidth
        select
        SelectProps={{ 
            multiple,
            disabled,
            MenuProps: { sx: { maxHeight: '400px' } } 
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end' onClick={handleClear}>
              {isVisibleIconClear && !disabled && <CloseIcon />}
            </InputAdornment>
          ),
        }}
        value={value}
        onChange={(event) => onChange(event.target.value as SelectValue<Multiple>)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Input>
    );
  };
  export default Select;
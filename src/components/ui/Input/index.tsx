import { InputAdornment, TextFieldProps } from '@mui/material';
import { LimitBlock, StyledSearchIcon, StyledSearchInput, StyledTextField } from './InputStyled';

type Props = TextFieldProps & {
    search?: boolean;
    limit?: number;
}

const Input = ({search, limit, ...props}: Props) => {
  const len = String(props.value).length || 0;

  if (search) {
    return (
      <StyledSearchInput
        {...props}
        placeholder='поиск'
        InputProps={{
          endAdornment:
            <InputAdornment position='end'>
              <StyledSearchIcon />
            </InputAdornment>
        }}
      />
    );
  }

  return (
    <div>
      <StyledTextField {...props}/>
      {limit && <LimitBlock className={len > limit - 11  ? 'warning' : ''}>{len}/{limit}</LimitBlock>}
    </div>
  );
};

export default Input;

import { InputAdornment, TextFieldProps } from '@mui/material';
import { LimitBlock, StyledSearchIcon, StyledSearchInput, StyledTextField } from './InputStyled';

type Props = TextFieldProps & {
    search?: boolean;
    limit?: number;
}

const Input = ({search, limit, ...props}: Props) => {
  //@ts-ignore
  const len = props.value.length;

  if (search) {
    return (
      <StyledSearchInput
        {...props}
        placeholder='поиск'
        style={{}}
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
      <StyledTextField {...props} textarea={Boolean(props.multiline)}/>
      {limit && <LimitBlock className={len > limit - 11  ? 'warning' : ''}>{len}/{limit}</LimitBlock>}
    </div>
  );
};

export default Input;

import { InputAdornment, TextFieldProps } from '@mui/material';
import { StyledSearchIcon, StyledSearchInput, StyledTextField } from './InputStyled';

type Props = TextFieldProps & {
    search?: boolean;
}

const Input = ({search, ...props} : Props) => {
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

  return <StyledTextField {...props} />;
};

export default Input;

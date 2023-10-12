import { TextField, styled } from "@mui/material";
import { ReactComponent as SearchIcon } from '../../../../static/images/icons/search.svg';

export const StyledTextField = styled(TextField)`
  fieldset {
    border: 1px solid black;
    border-radius: 0px;
  }

  input {
    height: 100%;
    padding: 16px 14px;
  }

  input::placeholder {
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
  }

  & .MuiInputBase-root {
    height: 100%;
  }

  & .MuiFormControl-root {
    height: '100%';
  }

  & .MuiOutlinedInput-root {
    max-height: 240px;
    padding-right: 20px;
  }

  & .MuiFormLabel-root {
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
    position: absolute;
    top: -2px;
  }
`;

export const StyledSearchInput = styled(TextField)`
  fieldset {
    border: 1px solid black;
    border-radius: 0px;
  }

  input::placeholder {
    position: absolute;
    right: 4px;
    top: 19px;
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
  }

  & .MuiOutlinedInput-root {
    height: 50px;
    padding-right: 20px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 12px;
  height: 12px;
`;

export const LimitBlock = styled('div')`
  display: flex;
  justify-content: right;
  margin-top: 6px;
  color: #828282;
  font-size: 14px;

  &.warning {
    color: #e30613;
  }
`;

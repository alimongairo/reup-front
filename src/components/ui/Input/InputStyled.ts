import { TextField, styled } from "@mui/material";
import { ReactComponent as SearchIcon } from '../../../../static/images/icons/search.svg';

export const StyledTextField = styled(TextField)`
  fieldset {
    border: 1px solid black;
    border-radius: 0px;
    padding: 0;
  }

  input{
    box-sizing:border-box;
    height: 100%;
    width: 100%
  }

  input::placeholder {
    font-family: 'Gilroy', sans-serif;
    font-size: 16px;
  }

  & .MuiOutlinedInput-root {
    height: 50px;
    padding-right: 20px;
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

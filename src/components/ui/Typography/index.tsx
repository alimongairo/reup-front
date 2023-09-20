import {Typography as MuiTypography, TypographyProps} from '@mui/material';
import './index.scss';

const Typography = function ({children, ...props}: TypographyProps) {
  return (
    <MuiTypography {...props}>{children}</MuiTypography>
  )
}

export default Typography;

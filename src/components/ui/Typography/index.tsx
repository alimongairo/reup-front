import {Typography, TypographyProps} from '@mui/material';
import './index.scss';

const MyTypography = function ({children, ...props}: TypographyProps) {
  return (
    <Typography {...props}>{children}</Typography>
  )
}

export default MyTypography;

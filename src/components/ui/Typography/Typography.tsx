import {Typography, TypographyProps} from '@mui/material';
import cx from './index.module.scss';

const MyTypography = function ({children, ...props}: TypographyProps) {
  return (
    <Typography {...props} className={cx.typography}>{children}</Typography>
  )
}

export default MyTypography;

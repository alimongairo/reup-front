import {Typography, TypographyProps} from '@mui/material';
import './index.scss';

export enum ETypographyWeight {
  NORMAL = 'normal',
  BOLD = 'bold',
}

interface MyTypographyProps extends TypographyProps{
  weight?: ETypographyWeight;
}

const MyTypography = function ({children, weight = ETypographyWeight.BOLD, ...props}: MyTypographyProps) {
  return (
    <Typography style={{fontWeight: weight}} {...props}>{children}</Typography>
  )
}

export default MyTypography;

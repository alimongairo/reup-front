import { Typography, TypographyProps } from '@mui/material';
import './index.scss';
import { useMemo } from "react";

export enum EFontFamily {
  GOTHIC = '"Dela Gothic One", sans-serif',
  GILROY = '"Gilroy", sans-serif',
}

interface MyTypographyProps extends TypographyProps {
  fontFamily?: EFontFamily,
}

const fontFamilyReturner = (variant: string) => {
  if (variant !== "h6") return EFontFamily.GOTHIC;
  return EFontFamily.GILROY
}

const MyTypography = function ({ children, fontFamily = EFontFamily.GOTHIC, ...props }: MyTypographyProps) {

  const fontFamilyRes = useMemo(() => fontFamilyReturner(props.variant as string), [props.variant]);

  return (
    <Typography style={{ fontFamily: fontFamilyRes }} {...props}>{children}{ }</Typography>
  )
}

export default MyTypography;

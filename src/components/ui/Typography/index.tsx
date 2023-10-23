import { Typography, TypographyProps } from '@mui/material';
import './index.scss';
import { useMemo } from "react";

enum EFontFamily {
  DEFAULT = '"Dela Gothic One", sans-serif',
  GILROY = '"Gilroy", sans-serif',
}

interface MyTypographyProps extends TypographyProps {
  fontFamily?: EFontFamily,
}

const fontFamilyReturner = (variant: string) => {
  if (variant !== "h6") return EFontFamily.DEFAULT;
  return EFontFamily.GILROY
}

const MyTypography = function ({ children, fontFamily, ...props }: MyTypographyProps) {

  const fontFamilyRes = useMemo(() => !!fontFamily ? fontFamily : fontFamilyReturner(props.variant as string), [props.variant]);
  
  return (
    <Typography style={{ fontFamily: fontFamilyRes }} {...props}>{children}{ }</Typography>
  )
}

export {MyTypography as Typography, EFontFamily};

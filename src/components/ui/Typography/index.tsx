import { Typography, TypographyProps } from '@mui/material';
import './index.scss';
import { useMemo } from 'react';

enum EFontFamily {
    DEFAULT = '"Dela Gothic One", sans-serif',
    GILROY = '"Gilroy", sans-serif',
}

enum ETypographyWeight {
    NORMAL = 'normal',
    BOLD = 'bold',
}

interface MyTypographyProps extends TypographyProps {
    fontFamily?: EFontFamily;
    weight?: ETypographyWeight;
}

const fontFamilyReturner = (variant: string) => {
    if (variant !== 'h6') return EFontFamily.DEFAULT;
    return EFontFamily.GILROY;
};

const MyTypography = function ({
    children,
    weight = ETypographyWeight.BOLD,
    fontFamily,
    ...props
}: MyTypographyProps) {
    const fontFamilyRes = useMemo(
        () =>
            fontFamily
                ? fontFamily
                : fontFamilyReturner(props.variant as string),
        [props.variant, fontFamily]
    );

    return (
        <Typography
            style={{ fontFamily: fontFamilyRes, fontWeight: weight }}
            {...props}
        >
            {children}
            {}
        </Typography>
    );
};

export { MyTypography as Typography, EFontFamily, ETypographyWeight };

import { Button as MuiButton, ButtonProps } from '@mui/material';
import cls from 'classnames';
import './index.scss';
import { ERoutes } from '@/router/types';

enum EBtnColor {
    NOTE = 'note black',
    WHITE = 'white',
    BLACK = 'black',
    DEFAULT = '',
    TAB = 'black tab',
}

interface IProps extends ButtonProps {
    viewType?: 'default' | 'iconBtn';
    colorM?: EBtnColor;
    iconName?: string;
    isActive?: boolean;
    to?: ERoutes;
}

const Button = ({
    children,
    viewType = 'default',
    colorM = EBtnColor.BLACK,
    iconName,
    isActive = false,
    ...props
}: IProps) => {
    const { variant = 'outlined', size = 'medium' } = props;

    return (
        <MuiButton
            {...props}
            className={cls(
                props.className,
                'button',
                colorM,
                {
                    icon: viewType === 'iconBtn',
                    [`icon-${iconName}`]: iconName,
                    ['active']: isActive,
                },
                props.className
            )}
            variant={variant}
            size={size}
        >
            {children}
        </MuiButton>
    );
};

export { Button, EBtnColor };

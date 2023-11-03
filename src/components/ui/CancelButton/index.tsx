
import { Button as MuiButton, ButtonProps, Stack } from '@mui/material';
import { ReactComponent as ArrowBack } from '../../../../static/images/icons/navigateArrowLeft.svg';

import cx from './index.module.scss';
import cls from 'classnames';

const CancelButton = (props: ButtonProps) => {
    return (
        <MuiButton {...props} variant='text' className={cls(props.className, cx.button)}>
            <Stack>
                <div className={cx.label}>отмена</div>
                <ArrowBack />
            </Stack>
        </MuiButton>
    );
};

export default CancelButton;
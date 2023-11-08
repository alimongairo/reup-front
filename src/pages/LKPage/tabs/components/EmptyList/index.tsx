import { Button, Typography } from '../../../../../components/ui';
import { Link } from 'react-router-dom';
import cx from './index.module.scss';
import { ERoutes } from '@/router/types';

interface IProps {
    text: string | JSX.Element;
    btnText: string;
    link: ERoutes;
}

export default function EmptyList({ text, btnText, link }: IProps) {
    return (
        <>
            <Typography variant="h6" className={cx.text}>
                {text}
            </Typography>
            <Button component={Link} className={cx.btn} to={link}>
                {btnText}
            </Button>
        </>
    );
}

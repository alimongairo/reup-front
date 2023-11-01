import { useContext } from 'react';
import { ReactComponent as ArrowIcon } from 'S#/images/icons/arrows/default.svg';
import Container from '../../Container';
import { Button } from '@/components/ui';
import cx from './index.module.scss';
import { ELabelsName } from '../../../models';
import { uid } from 'react-uid';
import { MenuContext } from '../../../helpers';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '@/router/config';

const HomeMenu = () => {
    const contextValue = useContext(MenuContext);

    const navigate = useNavigate();

    const toChangeScheme = () => {
        navigate(ERoutes.CrmSchemesMain);
    };

    const links = [
        {
            title: 'добавить текст',
            onClick: () => contextValue?.setActiveMenu(ELabelsName.EditText),
        },
        {
            title: 'изменить цвет фона',
            onClick: () => contextValue?.setActiveMenu(ELabelsName.BgColor),
        },
        {
            title: 'изменить шрифт и цвет текста',
            onClick: () =>
                contextValue?.setActiveMenu(ELabelsName.ColorAndFamily),
        },
        {
            title: 'добавить категории',
            onClick: () => contextValue?.setActiveMenu(ELabelsName.AddCategory),
        },
        {
            title: 'изменить шаблон',
            onClick: toChangeScheme,
        },
    ];

    return (
        <Container title={'окно редактирования'} className={cx.wrapper}>
            {links.map((link, index) => (
                <Button
                    key={uid(link.title, index)}
                    variant="contained"
                    endIcon={<ArrowIcon />}
                    className={cx.link}
                    onClick={link.onClick}
                >
                    {link.title}
                </Button>
            ))}
        </Container>
    );
};

export default HomeMenu;

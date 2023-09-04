import { useContext } from 'react';
// import { useRouter } from 'next/router';
import { ReactComponent as ArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import Container from '../Container';
import { Button } from "../../../../../components/ui";
// import LinkWithArrow from '@/components/common/LinkWithArrow';
// import Text from '@/components/common/Text';
// import { MenuContext } from '@/components/Brands/Menu/helpers';
// import { ELabelsName } from '@/components/Brands/Menu/models';
import cx from './index.module.scss';
import { ELabelsName } from "../models";
import { uid } from "react-uid";
// import cx from '@/components/Brands/Menu/index.module.scss';
// import { EPagesRoutes } from '@/constants/router';

const links = [
    {
        title: "добавить текст",
        // component: ELabelsName.EditText,
    },
    {
        title: "изменить цвет фона и кнопок",
        // component: ELabelsName.EditText,
    },
    {
        title: "изменить шрифт и цвет текста",
        // component: ELabelsName.EditText,
    },
    {
        title: "добавить категории",
        // component: ELabelsName.EditText,
    },
    {
        title: "изменить шаблон",
        // component: ELabelsName.EditText,
    },
]
const HomeMenu = () => {
    //   const router = useRouter();
    //   const contextValue = useContext(MenuContext);

    const toChangeScheme = () => {
        // router.push(EPagesRoute);
    };

    return (
        <Container title={'окно редактирования'} className={cx.wrapper}>
            {
                links.map((link, index) =>
                    <Button
                        key={uid(link.title, index)}
                        variant="contained"
                        colorM="black"
                        endIcon={<ArrowIcon />}
                        className={cx.link}
                    // onClick={() => contextValue?.setActiveMenu(link.component)}
                    >
                        {link.title}
                    </Button>)
            }
        </Container>
    );
};

export default HomeMenu;

import { useContext } from 'react';
import { MenuContext } from '../../../helpers';
import { Container } from '..';
import Options from './Options';

const ColorAndFamily = () => {
    const contextMenu = useContext(MenuContext);
    return (
        <Container
            title={'изменить цвет и шрифт текста'}
            onBack={contextMenu?.toHome}
        >
            <Options />
        </Container>
    );
};
export default ColorAndFamily;

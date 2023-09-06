import { useContext } from 'react';

import Container from '../../Container';
import Options from './Options';
import { MenuContext } from "../../../helpers";

const BgColor = () => {
  const menuContext = useContext(MenuContext);
  return (
    <Container
      title={'изменить цвет фона и кнопок'}
      onBack={menuContext?.toHome}
    >
      <Options />
    </Container>
  );
};

export default BgColor;

import { useContext } from 'react';

import Container from '@/components/Brand/components/Menu/components/Container';
import Options from '@/components/Brand/components/Menu/components/options/BgColor/Options';
import { MenuContext } from "@/components/Brand/components/Menu/helpers";

const BgColor = () => {
  const menuContext = useContext(MenuContext);
  return (
    <Container
      title={'изменить цвет фона'}
      onBack={menuContext?.toHome}
    >
      <Options />
    </Container>
  );
};

export default BgColor;

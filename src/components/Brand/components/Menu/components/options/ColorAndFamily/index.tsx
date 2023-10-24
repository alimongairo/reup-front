import { useContext } from 'react';
import { MenuContext } from "@/components/Brand/components/Menu/helpers";
import { Container } from "@/components/Brand/components/Menu/components/options";
import Options from "@/components/Brand/components/Menu/components/options/BgColor/Options";


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

import { MenuContext } from "../../../helpers";
import Container from '../../Container';
import Options from './Options';
import { useContext } from 'react';

const EditText = () => {
  const menuContext = useContext(MenuContext);

  return (
    <Container title="добавить текст" onBack={menuContext?.toHome}>
      <Options />
    </Container>
  );
};

export default EditText;

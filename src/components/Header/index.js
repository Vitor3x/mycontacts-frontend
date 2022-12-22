import logo from 'assets/images/logo.svg';
import { Container, InputSearcherContainer } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <InputSearcherContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearcherContainer>
    </Container>
  );
}

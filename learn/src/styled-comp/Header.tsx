import { Logo, Nav, Wrapper } from './components/styles/Header.styled';
import Button from './components/styles/button.styled';
import { Container } from './components/styles/container.styled';
import logo from './images/logo.svg';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Logo src={logo} alt=""></Logo>
          <Button>Log in</Button>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;

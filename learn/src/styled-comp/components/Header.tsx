import Button from './styles/Button.styled';
import { Wrapper } from './styles/Wrapper.styled';
import { Description, Image, Logo, Nav, Wrapper as HeaderWrapper } from './styles/Header.styled';
import logo from '../images/logo.svg'
import c from '../images/c.svg'

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Nav>
          <Logo src={logo} alt=""></Logo>
          <Button>Try It Free</Button>
        </Nav>
        <Description>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>
          <Image src={c} alt="" />
        </Description>
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;

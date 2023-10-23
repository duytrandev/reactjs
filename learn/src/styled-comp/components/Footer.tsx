import {
  FooterContainer,
  Wrapper as FooterWrapper
} from './styles/Footer.styled';
import { Wrapper } from './styles/Wrapper.styled';
const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <FooterContainer>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </FooterContainer>
        <p>&copy; 2023 Huddle. All rights reserved</p>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

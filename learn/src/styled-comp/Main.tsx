import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';
import Container from './components/Container';
import Footer from './components/Footer';
import { StyledGlobal } from './components/styles/Global.styled';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
      <Container />
      <Footer />
    </ThemeProvider>
  );
};

export default Main;

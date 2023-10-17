import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';
import { StyledGlobal } from './components/styles/Global.styled';
import Container from './components/Container';
import Footer from './components/Footer';



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

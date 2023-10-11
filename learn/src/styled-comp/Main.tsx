import { ThemeProvider } from 'styled-components';
import Header from './Header';
import { StyledGlobal } from './components/styles/global.styled';
import theme from './theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
    </ThemeProvider>
  );
};

export default Main;

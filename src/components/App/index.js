import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/global';
import defaultTheme from 'assets/styles/themes/default';

import Routes from 'Routes';

import { Header } from 'components/Header/index';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

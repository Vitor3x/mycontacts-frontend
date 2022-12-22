import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/global';
import defaultTheme from 'assets/styles/themes/default';

import { Header } from 'components/Header/index';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
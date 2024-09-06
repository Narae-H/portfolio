import './App.css';
import 'normalize.css';

import { GlobalStyle } from './theme/GlobalStyle'
import { ThemeProvider } from 'styled-components';

import { useLocalStorage } from './hooks/localStorage';

import Layout from './components/Layout';

function App() {
  // 1. Selected Theme
  const [localThemeObj] = useLocalStorage();

  return (
    <>
      <ThemeProvider theme={localThemeObj}>
        <GlobalStyle />
        <Layout/>
      </ThemeProvider>
    </>
  );
}

export default App;

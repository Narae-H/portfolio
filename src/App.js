import './App.css';
import 'normalize.css';

import { GlobalStyle } from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTheme } from './hooks/useTheme';

function App() {
  // 1. Selected Theme
  const [, currentThemeObject] = useTheme();

  // 2. QueryClient
  const queryClient = new QueryClient(); 

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={currentThemeObject}>
        <GlobalStyle />
        <Layout/>
      </ThemeProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;

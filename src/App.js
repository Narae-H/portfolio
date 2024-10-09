import './App.css';
import 'normalize.css';

import { GlobalStyle } from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { useLocalStorage } from './hooks/localStorage';

import Layout from './components/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';

function App() {
  // 1. Selected Theme
  const [currentThemeName, currentThemeObject] = useLocalStorage();
  useEffect(() => {
    console.log(currentThemeName);
   }, [currentThemeName]);
  

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

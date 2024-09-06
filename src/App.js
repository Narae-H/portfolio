import './App.css';
import 'normalize.css';

import {GlobalStyle} from './theme/GlobalStyle'
import { ThemeProvider } from 'styled-components';
import { defaultTheme, tokyoNightTheme } from "./theme/theme";
import { useState } from 'react';

import Layout from './components/Layout';

function App() {
  // 1. Setting theme
  const localTheme = window.localStorage.getItem('theme') || 'default';
  const [themeMode, setThemeMode] = useState(localTheme);
  const themeObject = themeMode === 'default' ? defaultTheme : tokyoNightTheme;

  return (
    <>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        <Layout/>
      </ThemeProvider>
    </>
  );
}

export default App;

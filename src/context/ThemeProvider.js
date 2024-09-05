import { useState, useContext, useCallback, createContext } from "react";
import { defaultTheme, tokyoNightTheme } from "../theme/theme";
import { ThemeProvider as StyledProvider, ThemeContext } from 'styled-components';

const themeContext = createContext({});

const ThemeProvider = ({children}) => {
  
  const localTheme = window.localStorage.getItem('theme') || 'default';
  const [themeMode, setThemeMode] = useState(localTheme);
  const themeObject = themeMode === 'default' ? defaultTheme : tokyoNightTheme;

  return(
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>
        { children }
      </StyledProvider>      
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(themeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === "default") {
      setThemeMode("defaultTheme");
      window.localStorage.setItem('theme', 'defaultTheme');
    }
    else {
      setThemeMode("tokyoNightTheme")
      window.localStorage.setItem('theme', 'tokyoNightTheme');
    };
  }, [themeMode]);
  
  return [ themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };

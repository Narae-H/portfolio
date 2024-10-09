import { useCallback, useMemo } from "react";
import { theme } from "../theme/theme";
import { useLocalStorage } from "./useLocalStorage";

// Constant variables
const THEME_KEY = 'theme';
export const DARK_THEME    = 'darkTheme';
export const LIGHT_THEME   = 'lightTheme';
export const DEFAULT_THEME = DARK_THEME;

export function useTheme() {
  // 1. Manage local storage 
  const {store, setStorage} = useLocalStorage(THEME_KEY);

  // 2. Declare function to get valid themes
  const validThemes = useMemo(() => Object.keys(theme), []);
  const getValidThemeName = useCallback((themeName) => {
    return validThemes.includes(themeName)? themeName : DEFAULT_THEME;
  }, [validThemes]);
  
  // 3. Declare function to set theme
  const setTheme = useCallback((newTheme) => {
    setStorage(getValidThemeName(newTheme));
  }, [getValidThemeName, setStorage]);

  // 4. Get Current theme's Object
  const currentThemeObject = useMemo(() => theme[store], [store]);

  // return [store, currentThemeObject, setTheme];
  return [store, currentThemeObject, setTheme];
}


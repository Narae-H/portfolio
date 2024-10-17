import { theme } from "../theme/theme";

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

// Constant variables
const THEME_KEY = 'theme';
export const DARK_THEME    = 'darkTheme';
export const LIGHT_THEME   = 'lightTheme';
export const DEFAULT_THEME = DARK_THEME;

export function useTheme() {
  // 1. Get store
  const {store, setStorage} = useLocalStorage(THEME_KEY);
  
  // 2. Declare necessary functions
  // 2-1) Get valid themes
  const validThemes = useMemo(() => Object.keys(theme), []);
  const getValidThemeName = useCallback((themeName) => {
    return validThemes.includes(themeName)? themeName : DEFAULT_THEME;
  }, [validThemes]);
  
  // 2-2) Set theme
  const setTheme = useCallback((newTheme) => {
    setStorage(getValidThemeName(newTheme));
  }, [getValidThemeName, setStorage]);

  // 3. Get details related to theme
  // 3-1) Get a valid theme
  const validThemeName = getValidThemeName(store);

  // 3-2) Get Current theme's Object
  const currentThemeObject = useMemo(() => theme[validThemeName], [validThemeName]);

  return [validThemeName, currentThemeObject, setTheme];
}


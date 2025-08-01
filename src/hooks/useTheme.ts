
import { useCallback } from "react";
import { DEFAULT_THEME, THEME_KEY } from "../types/theme";
import { getThemeObject, getValidThemeName } from "../utils/themeUtil";
import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
  // 1. Get store
  const {store, setStorage, removeStorage} = useLocalStorage(THEME_KEY);

  // 2. Declare necessary functions
  const currentThemeName = getValidThemeName(store || DEFAULT_THEME);
  const currentThemeObject = getThemeObject(currentThemeName);
  
  const setTheme = (newTheme: string) => {
    setStorage(getValidThemeName(newTheme));
  };

  const removeTheme = useCallback(() => {
    removeStorage();
  }, [removeStorage]);
  
  return {currentThemeName, currentThemeObject, setTheme, removeTheme};
}


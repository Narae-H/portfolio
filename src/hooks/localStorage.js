import { useEffect } from "react";
import { theme } from "./../theme/theme";

function getValidStorageName(currentThemeName) {
  const validStorageThemes  = ['defaultTheme', 'tokyoNightTheme'];
  let   validStorageTheme   = validStorageThemes[0];

  if( currentThemeName != null && validStorageThemes.includes(currentThemeName) ) {
    validStorageTheme = currentThemeName;
  }

  return validStorageTheme;
}

export function useLocalStorage(value) {
  // 1. Initializing values
  const key = 'theme'; 
  let   localThemeObj = theme.defaultTheme;

  // 2. Geting a local storage
  const currThemeName = JSON.parse(localStorage.getItem(key)); 
  let localTheme = getValidStorageName(currThemeName);
  localThemeObj = theme[localTheme];
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify( localTheme ));
  }, [key, localTheme]);
  
  // 3. Setting a local storage
  function setLocalTheme() {
    const validStorageName = getValidStorageName(value);
    localStorage.setItem(key, JSON.stringify( validStorageName(value) ));
    localThemeObj = theme[validStorageName];
  }

  return [localThemeObj, setLocalTheme]
}
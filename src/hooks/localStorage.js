import { useState, useEffect, useCallback, useMemo } from "react";
import { theme } from "./../theme/theme";


// Constant variables
const THEME_KEY = 'theme';
export const DARK_THEME    = 'darkTheme';
export const LIGHT_THEME   = 'lightTheme';
export const DEFAULT_THEME = DARK_THEME;


// local storage 로 상태관리하기
React에서의 리렌더링 조건
- state가 변경 된 경우
- props가 변경 된 경우
- 부모 컴포넌트가 리렌더링 된 경우

=> localstorage와 sessionstorage는 web APIs로, react의 내부 상태가 아닌 외부상태로 평가
=> useSyncExternalStore(React 18+)를 사용하여, localStorage / sessionStorage를 상태처럼 관리할 수 있음.
// https://medium.com/hal-ang/react-18-storage%EB%A5%BC-%EC%83%81%ED%83%9C%EB%A1%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-usesyncexternalstore-181e6d5778d3

export function useLocalStorage() {
  // 1. Get the vaild themes
  const validThemes = useMemo(() => Object.keys(theme), []);
  const getValidThemeName = useCallback((themeName) => {
    return validThemes.includes(themeName)? themeName : DEFAULT_THEME;
  }, [validThemes]);

  // 2. Get the current theme name
  const [currentThemeName, setCurrentThemeName] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return getValidThemeName(storedTheme);
  });

  // 3. Save the vaild theme name in local storage
  useEffect(() => {
    localStorage.setItem(THEME_KEY, currentThemeName);
  }, [currentThemeName]);

  // 4. Set theme
  const setTheme = (newTheme) => {
    const validTheme = getValidThemeName(newTheme);
    setCurrentThemeName(validTheme);
  };
  // const setTheme = useCallback((newTheme) => {
  //   const validTheme = getValidThemeName(newTheme);
  //   setCurrentThemeName(validTheme);
  // }, [getValidThemeName]);

  const currentThemeObject = useMemo(() => theme[currentThemeName], [currentThemeName]);

  return [currentThemeName, currentThemeObject, setTheme];
}

// export { useLocalStorage };

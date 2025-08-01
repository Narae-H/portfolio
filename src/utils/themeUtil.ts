import { theme } from "../theme/theme";
import { DEFAULT_THEME } from "../types/theme";

export function getValidThemes(): (keyof typeof theme)[] {
  return Object.keys(theme) as (keyof typeof theme)[];
}

export function getValidThemeName(themeName: string): keyof typeof theme {
  const validThemes = getValidThemes();
  return validThemes.includes(themeName as keyof typeof theme) ? themeName as keyof typeof theme : DEFAULT_THEME;
}

export function getThemeObject(themeName: string): {} {
  const validName = getValidThemeName(themeName);
  return theme[validName];
}
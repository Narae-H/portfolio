import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../theme/GlobalStyle";
import { useTheme } from "../../hooks/useTheme";

type Props = {
  children: React.ReactNode;
};

export function ThemeManager ({ children }: Props) {
  const { currentThemeObject } = useTheme();

  return (
    <ThemeProvider theme={currentThemeObject}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};


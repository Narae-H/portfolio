import { createGlobalStyle } from "styled-components";
import  ibmFlexMono  from "./../fonts/IBMPlexMono-Regular.ttf"
import  monoSpaceNeon  from "./../fonts/MonaspaceNeon-Regular.otf"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color   : ${ ({theme}) => theme.base.background };
    --inactive-text-color: ${ ({theme}) => theme.base.inactiveTextColor };
    --active-text-color  : ${ ({theme}) => theme.base.activeTextColor };

    --activitybar-background         : ${ ({theme}) => theme.activitybar.background };
    --activitybar-text-color         : ${ ({theme}) => theme.activitybar.foreground };
    --activitybar-inactive-text-color: ${ ({theme}) => theme.activitybar.inactiveForeground };
    --activitybar-active-border      : ${ ({theme}) => theme.activitybar.activeBorder };

    --list-inactive-selection-background: ${ ({theme}) => theme.list.inactiveSelectionBackground };
    --list-inactive-selection-text-color: ${ ({theme}) => theme.list.inactiveSelectionForeground };
    --list-inactive-hover-text-color    : ${ ({theme}) => theme.list.hoverForeground };
    --list-inactive-hover-background    : ${ ({theme}) => theme.list.hoverBackground };
    
    --editor-background: ${ ({theme}) => theme.editor.background };
    --editor-text-color: ${ ({theme}) => theme.editor.foreground };
    }
  @font-face {
    font-family: 'mono-space-neon';
    font-weight: 300;
    font-style: normal;
    src: url(${monoSpaceNeon}) format('truetype');
  }
  body {
    font-family: 'mono-space-neon', monospace;
  }
`;
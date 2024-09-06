import { createGlobalStyle } from "styled-components";
import monoSpaceNeon from './../assets/fonts/MonaspaceNeon-Regular.otf';

export const GlobalStyle = createGlobalStyle`
  :root {
  // Width/Hieght
  --header-height     : 40px;
  --footer-height     : 30px;
  --activity-bar-width: 55px;

    // Font size
    --fs-large : 1.2rem;
    --fs-medium: 1rem;
    --fs-small : 0.8rem;

    // Colour
    --c-red  : #e81123;
    --c-white: #ffffff;
    --c-blue : #0078d4;


    // Theme color
    --background-color   : ${ ({theme}) => theme.base.background };
    --inactive-text-color: ${ ({theme}) => theme.base.inactiveTextColor };
    --active-text-color  : ${ ({theme}) => theme.base.activeTextColor };
    --border-color       : ${ ({theme}) => theme.base.border };

    --activitybar-background         : ${ ({theme}) => theme.activitybar.background };
    --activitybar-text-color         : ${ ({theme}) => theme.activitybar.foreground };
    --activitybar-inactive-text-color: ${ ({theme}) => theme.activitybar.inactiveForeground };
    --activitybar-active-border      : ${ ({theme}) => theme.activitybar.activeBorder };

    --list-inactive-selection-background: ${ ({theme}) => theme.list.inactiveSelectionBackground };
    --list-inactive-selection-text-color: ${ ({theme}) => theme.list.inactiveSelectionForeground };
    --list-hover-text-color             : ${ ({theme}) => theme.list.hoverForeground };
    --list-hover-background             : ${ ({theme}) => theme.list.hoverBackground };
    
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
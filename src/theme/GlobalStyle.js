import { createGlobalStyle } from "styled-components";
import monoSpaceNeon from './../assets/fonts/MonaspaceNeon-Regular.woff';
import monoSpaceNeonLight from './../assets/fonts/MonaspaceNeon-Light.woff';
import monoSpaceNeonExtraLight from './../assets/fonts/MonaspaceNeon-ExtraLight.woff';
import monoSpaceNeonBold from './../assets/fonts/MonaspaceNeon-SemiBold.woff';

export const GlobalStyle = createGlobalStyle`
  :root {
    // Breakpoints: The values cannot be directly used in media query values in CSS, but they can be written down to display the breakpoint.
    // For this website, I only use the 768px 
    // --bp-sm : 576px;
    // --bp-md : 768px;
    // --bp-lg : 992px; 
    // --bp-xl : 1200px;

    // Width/Hieght
    --header-height     : 40px;
    --footer-height     : 25px;
    --activity-bar-width: 55px;

    // Font size
    --fs-large : 20px;
    --fs-medium: 14px;
    --fs-small : 12px;
    --fs-xsmall: 10px;
    // --fs-large : 1.2rem;
    // --fs-medium: 1rem;
    // --fs-small : 0.8rem;
    // --fs-xsmall: 0.7rem;

    // Colour
    --c-red  : #e81123;
    --c-white: #ffffff;
    --c-blue : #0078d4;

    // border
    --border-width: 1px;

    // Theme color
    --background-color   : ${ ({theme}) => theme.base.background };
    --inactive-text-color: ${ ({theme}) => theme.base.inactiveTextColor };
    --active-text-color  : ${ ({theme}) => theme.base.activeTextColor };
    --border-color       : ${ ({theme}) => theme.base.border };
    --active-border-color: ${ ({theme}) => theme.base.activeborder };
    --point-color        : ${ ({theme}) => theme.base.pointColor };

    --activitybar-background         : ${ ({theme}) => theme.activitybar.background };
    --activitybar-text-color         : ${ ({theme}) => theme.activitybar.foreground };
    --activitybar-inactive-text-color: ${ ({theme}) => theme.activitybar.inactiveForeground };
    --activitybar-active-border      : ${ ({theme}) => theme.activitybar.activeBorder };

    --list-inactive-selection-background: ${ ({theme}) => theme.list.inactiveSelectionBackground };
    --list-inactive-selection-text-color: ${ ({theme}) => theme.list.inactiveSelectionForeground };
    --list-hover-text-color             : ${ ({theme}) => theme.list.hoverForeground };
    --list-hover-background             : ${ ({theme}) => theme.list.hoverBackground };
    --list-search-area-background       : ${ ({theme}) => theme.list.searchAreaBackground };
    --list-search-area-foreground       : ${ ({theme}) => theme.list.searchAreaForeground };
    --list-search-area-active-border    : ${ ({theme}) => theme.list.searchAreaActiveBorder };
    
    --editor-tab-background: ${ ({theme}) => theme.editor.tabBackground };
    --editor-background    : ${ ({theme}) => theme.editor.background };
    --editor-text-color    : ${ ({theme}) => theme.editor.foreground };

    --scrollbar-track-color: ${({theme}) => theme.scrollbar.trackColor};
    --scrollbar-thumb-color: ${({theme}) => theme.scrollbar.thumbColor};
    --scrollbar-thumb-hover-color: ${({theme}) => theme.scrollbar.thumbHoverColor};

    --tooltip-background: ${({theme}) => theme.tooltip.background};
    --tooltip-text      : ${({theme}) => theme.tooltip.foreground};
    --tooltip-border    : ${({theme}) => theme.tooltip.border};

    --dropdown-background: ${({theme}) => theme.dropdown.background};
    --dropdown-text      : ${({theme}) => theme.dropdown.foreground};
    --dropdown-hover     : ${({theme}) => theme.dropdown.hover};
  }

  @font-face {
    font-family: 'mono-space-neon';
    font-weight: 400;
    font-style: normal;
    src: url(${monoSpaceNeon}) format('truetype');
  }
  @font-face {
    font-family: 'mono-space-neon-light';
    font-weight: 300;
    font-style: normal;
    src: url(${monoSpaceNeonLight}) format('truetype');
  }
  @font-face {
    font-family: 'mono-space-neon-extralight';
    font-weight: 100;
    font-style: normal;
    src: url(${monoSpaceNeonExtraLight}) format('truetype');
  }
  @font-face {
    font-family: 'mono-space-neon-bold';
    font-style: normal;
    src: url(${monoSpaceNeonBold}) format('truetype');
  }
  body {
    font-family: 'mono-space-neon-light', monospace;
  }
`;
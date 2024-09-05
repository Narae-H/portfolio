import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${ ({theme}) => theme.base.background };
    color: ${ ({theme}) => theme.base.inactiveTextColor };
  }
`;
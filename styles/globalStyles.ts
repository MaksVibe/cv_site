import { createGlobalStyle, css } from 'styled-components';
import { resetCSS } from './reset';
import theme, { fonts } from './theme';

const style = css`
  html {
    ${fonts.spec.body}

    @media screen and (${theme.media.mobile}) {
      font-size: 12px;
    }
  }

  h1 {
    ${fonts.spec.heading1}
  }
`;

export default createGlobalStyle`
${resetCSS}
${style}
`;

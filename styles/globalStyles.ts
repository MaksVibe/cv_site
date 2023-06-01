import { createGlobalStyle, css } from 'styled-components';
import { resetCSS } from './reset';
import { fonts } from './theme';

const style = css`
  body {
    ${fonts.spec.body}
  }

  h1 {
    ${fonts.spec.heading1}
  }
`;

export default createGlobalStyle`
${resetCSS}
${style}
`;

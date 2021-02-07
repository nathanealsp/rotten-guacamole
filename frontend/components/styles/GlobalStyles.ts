import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  html {
    font-size: 16px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    word-break: break-word;
    overflow-wrap: break-word;
    position: relative;
    background: #fff;
    line-height: 1.57143;
    color: #191919;
    font-family: 'XfinityStandard', helvetica, arial, sans-serif;
    font-weight: 400;
    letter-spacing: 0.2;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: underline;
  }
`;

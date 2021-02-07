import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { GlobalStyles } from './styles/GlobalStyles';

interface IProps {
  children: ReactNode;
}

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1rem;
`;

const HeaderStyles = styled.header`
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  place-content: center;
  color: white;
  z-index: 1;
  padding: 20px;
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: red;
  }

  span {
    font-size: 2.5rem;
    background: red;
    padding: 5px 10px 5px 2px;
    display: inline-block;
    transform: skewX(-12deg);
  }
`;

const Header: FC = () => (
  <Link href="/">
    <HeaderStyles>
      <h1>
        Rotten <span>Guacamole</span>
      </h1>
    </HeaderStyles>
  </Link>
);

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </LayoutStyles>
  );
};

// CSS
const LayoutStyles = styled.div``;

export default Layout;

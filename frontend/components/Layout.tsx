import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { GlobalStyles } from './styles/GlobalStyles';

interface IProps {
  children: ReactNode;
}

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Header: FC = () => (
  <header>
    <Link href="/">Rotten Guacamole</Link>
  </header>
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
const LayoutStyles = styled.div`
  background: blue;
`;

export default Layout;

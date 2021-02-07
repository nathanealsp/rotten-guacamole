import React, { FC, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

interface IProps {
  children: ReactNode;
}

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1rem;
`;

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </LayoutStyles>
  );
};

// CSS
const LayoutStyles = styled.div`
  margin: 0;
`;

export default Layout;

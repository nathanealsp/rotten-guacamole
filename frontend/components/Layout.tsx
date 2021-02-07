import React, { FC, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

interface IProps {
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout">{children}</div>
    </div>
  );
};

// CSS

export default Layout;

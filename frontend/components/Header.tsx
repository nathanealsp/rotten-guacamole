import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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

  & .logo-ish {
    font-size: 2rem;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: red;
    cursor: pointer;
  }

  & span {
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
      <h1 className="logo-ish">
        Rotten <span>Guacamole</span>
      </h1>
    </HeaderStyles>
  </Link>
);

export default Header;

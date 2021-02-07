import styled, { css } from 'styled-components';

export const CardStyles = styled.div`
  max-width: 400px;
  float: left;
  width: 100%;

  .menu-content {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .menu-content::before,
  .menu-content::after {
    content: '';
    display: table;
  }
  .menu-content::after {
    clear: both;
  }
  .menu-content li {
    display: inline-block;
  }
  .menu-content a {
    color: #fff;
  }

  .menu-content span {
    position: absolute;
    left: 50%;
    top: 0;
    font-size: 10px;
    font-weight: 700;
    font-family: 'Open Sans';
    transform: translate(-50%, 0);
  }

  .wrapper {
    background-color: #fff;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
  }

  .wrapper:hover .data {
    transform: translateY(0);
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    color: white;
    opacity: 10;
  }

  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(calc(70px + 1em));
    transition: transform 0.3s;
  }

  .data .content {
    padding: 1em;
    position: relative;
    z-index: 1;
  }

  .author {
    font-size: 12px;
  }

  .title {
    margin-top: 10px;
    font-weight: 300;
    text-align: center;
  }

  .wrapper:hover .menu-content span {
    transform: translate(-50%, -10px);
    opacity: 1;
  }
  .header {
    color: #fff;
    padding: 1em;
  }
  .header::before,
  .header::after {
    content: '';
    display: table;
  }
  .header::after {
    clear: both;
  }
  .header .date {
    float: left;
    font-size: 12px;
  }
  .menu-content {
    float: right;
  }
  .menu-content li {
    margin: 0 5px;
    position: relative;
  }
  .menu-content span {
    transition: all 0.3s;
    opacity: 0;
  }

  .data {
    transform: translateY(calc(200px + 4em));
    background-color: red;
    color: rgba(255, 255, 255, 0.6);
    opacity: 0;
  }

  .button {
    width: 200px;
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1;
    position: relative;
    font-weight: 500;
    cursor: pointer;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(20px);
    font-family: 'XfinityStandard', helvetica, arial, sans-serif;
    padding: 14px;
    margin: 0.6rem 0 0 7rem;
    border: 0.1px solid rgba(255, 255, 255, 1);
    border-radius: 0;
    overflow: hidden;
    z-index: 1;
    transition: color 150ms ease-in-out;
  }

  .button:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  .button:hover {
    color: #fff;
  }
`;

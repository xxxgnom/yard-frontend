import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
//import ReactDOM from 'react-dom'
//import React, {Component} from 'react';
const Header = styled.header`
padding-top: 1.25rem;
padding-bottom: 1.25rem;
background-color: #ffffff;
font-family: 'Fira Sans', sans-serif;
font-size: 16px;
line-height: 1;
color: #3e4247;
text-rendering: optimizeLegibility !important;
-webkit-font-smoothing: antialiased;
-webkit-line-break: after-white-space;
`;
const Navigations = styled.nav`
text-align: right;
`;
const Navigation = styled(Link)`
margin-right: 1.5rem;
font-size: 1rem;
color: #3e4247;
text-decoration: none;
`;

function Headershow(props) {
    return (
    <Header>
      <div className="container">
        <div className="row middle-xs between-xs">
          <img src="compass-logo.svg" className="header-logo" />
          <Navigations>
          <Navigation to="/">{props.first}</Navigation>
          <Navigation to="/">{props.second}</Navigation>
          <Navigation to="/">{props.third}</Navigation>
          </Navigations>
        </div>
      </div>
    </Header>
  );
}
export default Headershow;

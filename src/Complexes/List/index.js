//import React from 'react';
import React, {Component} from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Cards from './Cards';
import styled from "styled-components";

const Main = styled.div`
  background-image: url(background-1.png);
  background-repeat: repeat;
  padding-bottom: 2.8rem;
`;

export default () => {
  return (
    <div>
    <Banner/>
      <Main>
        <Contact/>
        <Cards/>
      </Main>
      </div>
  );
};

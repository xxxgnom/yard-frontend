import React from 'react';
import styled from "styled-components";

const Intro = styled.section`
padding-top: 5rem;
padding-bottom: 5rem;
text-align: center;
background-color: #161616;
`;

function Bannershow(props) {
    return (
      <Intro>
        <img src="compass-development-logo.svg" alt="compass development logo"/>
      </Intro>
  );
}
export default Bannershow;

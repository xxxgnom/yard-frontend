import React from "react";
import styled from "styled-components";
import compassDevLogo from "../../img/compass-development-logo.png";

const Intro = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  text-align: center;
  background-color: #161616;
`;

function Bannershow(props) {
  return (
    <Intro>
      <img src={compassDevLogo} alt="compass development logo" />
    </Intro>
  );
}
export default Bannershow;

//import React from 'react';
import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Title from "./Title";
import Gallery from "./Gallery";
import Features from "./Features";
import Description from "./Description";
import Characteristics from "./Characteristics";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Guide from "./Guide";

const TitleStripe = styled.div`border-top: solid 1px #eaebf0;`;

export default () => {
  return (
    <main>
      <TitleStripe>
        <Grid>
          <Row between="xs">
            <Title />
          </Row>
        </Grid>
      </TitleStripe>
      <Gallery />
      <Features />
      <Characteristics />
      <Description />
      <Infrastructure />
      <Offers />
      <Guide />
    </main>
  );
};

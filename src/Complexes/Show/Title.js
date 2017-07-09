//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Name = styled.h1`
  margin: 0;
  padding-top: 1.5rem;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
  line-height: 1;
`;
const Adress = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1;
`;
const BtnFav = styled.button`
  padding: 7px 15px;
  margin-top: 1.5rem;
  align-self: flex-start;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  background-color: transparent;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 10px;
  color: #00779a;
`;
function TitleShow(props) {
  return (
    <Grid>
      <Row between="md">
        <article>
          <Name>Жилой комплекс «Полянка/44»</Name>
          <Adress>
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </Adress>
        </article>
        <BtnFav>В избранное</BtnFav>
      </Row>
    </Grid>
  );
}
export default TitleShow;

//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Services = styled.section`padding-bottom: 3.5rem;`;
const Title = styled.h3`
  margin: 0;
  margin-bottom: 0.9rem;
  padding-top: 2.15rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  border-top: solid 1px #eaebf0;
`;
const Item = styled.div`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;
function InfrastructureShow(props) {
  return (
    <Services>
      <Grid>
        <Title>Инфраструктура</Title>
        <Row>
          <Col md={2}>
            <Item>Бассейн</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col md={2}>
            <Item>Детский сад</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col md={2}>
            <Item>Частная школа</Item>
            <Item>Частная школа</Item>
          </Col>
          <Col md={2}>
            <Item>Бассейн</Item>
          </Col>
          <Col md={2}>
            <Item>Детский сад</Item>
          </Col>
          <Col md={2}>
            <Item>Частная школа</Item>
          </Col>
        </Row>
      </Grid>
    </Services>
  );
}
export default InfrastructureShow;

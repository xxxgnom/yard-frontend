//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexServices = styled.section`padding-bottom: 3.5rem;`;
const ComplexServicesTitle = styled.h3`
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
const ComplexServicesItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;
function InfrastructureShow(props) {
  return (
    <ComplexServices>
      <Grid>
        <ComplexServicesTitle>Инфраструктура</ComplexServicesTitle>
        <Row>
          <Col md={2}>
            <ComplexServicesItem>Бассейн</ComplexServicesItem>
            <ComplexServicesItem>Частная школа</ComplexServicesItem>
          </Col>
          <Col md={2}>
            <ComplexServicesItem>Детский сад</ComplexServicesItem>
            <ComplexServicesItem>Частная школа</ComplexServicesItem>
          </Col>
          <Col md={2}>
            <ComplexServicesItem>Частная школа</ComplexServicesItem>
            <ComplexServicesItem>Частная школа</ComplexServicesItem>
          </Col>
          <Col md={2}>
            <ComplexServicesItem>Бассейн</ComplexServicesItem>
          </Col>
          <Col md={2}>
            <ComplexServicesItem>Детский сад</ComplexServicesItem>
          </Col>
          <Col md={2}>
            <ComplexServicesItem>Частная школа</ComplexServicesItem>
          </Col>
        </Row>
      </Grid>
    </ComplexServices>
  );
}
export default InfrastructureShow;

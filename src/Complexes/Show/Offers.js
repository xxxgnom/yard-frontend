//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexOffers = styled.section`
  padding-top: 4.1rem;
  padding-bottom: 3.75rem;
  background-color: #f4f5f9;
`;
const OffersTitle = styled.h3`
  margin: 0;
  margin-bottom: 1.55rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  text-align: center;
`;
const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;
const CardTitle = styled.h4`
  margin: 0;
  margin-bottom: 1.4rem;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  color: #3e4247;
`;
const CardKey = styled.small`
  display: block;
  margin: 0;
  margin-bottom: 0.6rem;
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;
const CardValue = styled.p`
  display: block;
  margin: 0;
  margin-top: 1.5rem;

  font-size: 16px;
  line-height: 1.38;
  color: #3e4247;
`;
const OffersBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 2.2rem;
  padding: 0.75rem 2rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.0;
  color: #ffffff;
  text-align: center;
  background-color: #000000;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
function OffersShow(props) {
  return (
    <ComplexOffers>
      <Grid>
        <OffersTitle>Предложения в ЖК «Полянка/44»</OffersTitle>
        <Row>
          <Col md={4}>
            <Card>
              <CardTitle>1-комнатные квартиры</CardTitle>
              <CardValue>
                <CardKey>Площадь</CardKey>от 59 до 120 м²
              </CardValue>
              <CardValue>
                <CardKey>Стоимость</CardKey>от 20.3 до 84.2 млн руб
              </CardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <CardTitle>2-комнатные квартиры</CardTitle>
              <CardValue>
                <CardKey>Площадь</CardKey>от 59 до 120 м²
              </CardValue>
              <CardValue>
                <CardKey>Стоимость</CardKey>от 20.3 до 84.2 млн руб
              </CardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <CardTitle>3-комнатные квартиры</CardTitle>
              <CardValue>
                <CardKey>Площадь</CardKey>от 59 до 120 м²
              </CardValue>
              <CardValue>
                <CardKey>Стоимость</CardKey>от 20.3 до 84.2 млн руб
              </CardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </Card>
          </Col>
        </Row>
      </Grid>
    </ComplexOffers>
  );
}
export default OffersShow;

//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexOffers = styled.section`
  padding-top: 4.1rem;
  padding-bottom: 3.75rem;
  background-color: #f4f5f9;
`;
const ComplexOffersTitle = styled.h3`
  margin: 0;
  margin-bottom: 1.55rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  text-align: center;
`;
const ComplexOffersCard = styled.div`
  padding: 1.5rem 2rem;
  background-color: #ffffff;
`;
const ComplexOffersCardTitle = styled.h4`
  margin: 0;
  margin-bottom: 1.4rem;
  font-family: Philosopher, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  color: #3e4247;
`;
const ComplexOffersCardKey = styled.small`
  display: block;
  margin: 0;
  margin-bottom: 0.6rem;
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;
const ComplexOffersCardValue = styled.p`
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
        <ComplexOffersTitle>Предложения в ЖК «Полянка/44»</ComplexOffersTitle>
        <Row>
          <Col md={4}>
            <ComplexOffersCard>
              <ComplexOffersCardTitle>
                1-комнатные квартиры
              </ComplexOffersCardTitle>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Площадь</ComplexOffersCardKey>от 59 до 120
                м²
              </ComplexOffersCardValue>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Стоимость</ComplexOffersCardKey>от 20.3 до
                84.2 млн руб
              </ComplexOffersCardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </ComplexOffersCard>
          </Col>
          <Col md={4}>
            <ComplexOffersCard>
              <ComplexOffersCardTitle>
                2-комнатные квартиры
              </ComplexOffersCardTitle>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Площадь</ComplexOffersCardKey>от 59 до 120
                м²
              </ComplexOffersCardValue>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Стоимость</ComplexOffersCardKey>от 20.3 до
                84.2 млн руб
              </ComplexOffersCardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </ComplexOffersCard>
          </Col>
          <Col md={4}>
            <ComplexOffersCard>
              <ComplexOffersCardTitle>
                3-комнатные квартиры
              </ComplexOffersCardTitle>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Площадь</ComplexOffersCardKey>от 59 до 120
                м²
              </ComplexOffersCardValue>
              <ComplexOffersCardValue>
                <ComplexOffersCardKey>Стоимость</ComplexOffersCardKey>от 20.3 до
                84.2 млн руб
              </ComplexOffersCardValue>
              <OffersBtn>Посмотреть предложения</OffersBtn>
            </ComplexOffersCard>
          </Col>
        </Row>
      </Grid>
    </ComplexOffers>
  );
}
export default OffersShow;

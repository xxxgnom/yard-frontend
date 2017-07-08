//import React from 'react';
import React, {Component} from 'react';
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.125rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
`;

const List = styled.dl`
  margin-top: 0;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: max-content auto;
`;

const Key = styled.dt`
  grid-column-start: 1;
  margin-bottom: 0.6875rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #a9afb6;
`;

const Value = styled.dd`
  margin-left: 2rem;
  grid-column-start: 2;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  color: #3e4247;
`;

export default () =>
<div>
  <Grid>
    <Title>Характеристики</Title>
    <Row>
      <Col md={4}>
        <List>
          <Key>Количество квартир:</Key>
          <Value>1 503</Value>
          <Key>Статус:</Key>
          <Value>Квартиры</Value>
          <Key>Цены:</Key>
          <Value>от 5.3 до 143.5 млн</Value>
          <Key>Безопасность:</Key>
          <Value>Охраняемая территория</Value>
        </List>
      </Col>
      <Col md={4}>
        <List>
          <Key>Конструкция корпусов:</Key>
          <Value>монолит</Value>
          <Key>Площадь:</Key>
          <Value>от 50 до 154 м²</Value>
          <Key>Высота потолков:</Key>
          <Value>3.45 − 5 м</Value>
          <Key>Обслуживание:</Key>
          <Value>1 200 руб / м² / месяц</Value>
        </List>
      </Col>
      <Col md={4}>
        <List>
          <Key>Начало строительства:</Key>
          <Value>I квартал 2012 года</Value>
          <Key>Конец строительства:</Key>
          <Value>IV квартал 2018 года</Value>
          <Key>Наземная парковка:</Key>
          <Value>1 500 м/м</Value>
          <Key>Подземная парковка:</Key>
          <Value>Нет</Value>
        </List>
      </Col>
    </Row>
  </Grid>
  </div>;

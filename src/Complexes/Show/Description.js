//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexDescription = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
`;
const ComplexDescriptionTitle = styled.h3`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
`;
const ComplexDescriptionText = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.58;
  color: #3e4247;
`;
function DescriptionShow(props) {
  return (
    <ComplexDescription>
      <Grid>
        <Row>
          <Col md={2}>
            <ComplexDescriptionTitle>Описание</ComplexDescriptionTitle>
          </Col>
          <Col md={10}>
            <ComplexDescriptionText>
              ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
              Территория разделена на три зоны: жилой район, центральный стадион
              «Динамо» и большой спортивный парк.
            </ComplexDescriptionText>
            <ComplexDescriptionText>
              Жилой район — это 13 корпусов: апартаменты, штаб-квартира
              «Динамо», отель «Hyatt Regency Moscow» и четыре современных
              бизнес-центра. На территории — рестораны, спа-комплекс,
              фитнес-центр, химчистка, аптеки, магазины и отделения банков. В
              каждом корпусе работает консьерж и круглосуточная охрана. Для
              жителей оборудованы технические помещения под хранение колясок и
              велосипедов, комнаты для домашних животных и уютные вестибюли с
              мягкими креслами для встреч с друзьями и соседями.
            </ComplexDescriptionText>
            <ComplexDescriptionText>
              Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились
              музей, торгово-развлекательный комплекс, подземная парковка для
              гостей и две крупные спортивные арены. Жизнь квартала
              сосредоточена в этой зоне: здесь можно сходить на концерт или
              фестиваль, поболеть за любимую команду и купить новую рубашку в
              торговом комплексе.
            </ComplexDescriptionText>
            <ComplexDescriptionText>
              Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и
              Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые
              зоны, для подростков — спортивные площадки на открытом воздухе,
              для взрослых — велосипедные дорожки и зоны отдыха, где можно
              подышать свежим воздухом во время рабочего перерыва.
            </ComplexDescriptionText>
          </Col>
        </Row>
      </Grid>
    </ComplexDescription>
  );
}
export default DescriptionShow;

//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexLandmark = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.5rem;
  margin-bottom: 13.5rem;
  background-color: #3e4247;
  color: #ffffff;
`;
const Name = styled.h5`
  margin: 0;
  margin-top: 7.45rem;
  margin-bottom: 3.1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #a9afb6;
`;
const Title = styled.h2`
  margin: 0;
  margin-bottom: 3.2rem;
  font-family: Philosopher, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
`;
const GuideLink = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  color: #00779a;
  text-decoration: none;
`;
const MapMark = styled.img`
  position: absolute;
  margin-top: 3.8rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;
const Nearby = styled.div`
  position: absolute;
  width: 583px;
  margin-top: 3.8rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;
const NearbyItem = styled.div`
  padding: 1.5rem;
  padding-bottom: 1.57rem;
  box-sizing: border-box;
  border-bottom: solid 1px #e0e0e1;
`;
const NearbyPlace = styled.h6`
  display: block;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;
const NearbyDistance = styled.p`
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;
function GuideShow(props) {
  return (
    <ComplexLandmark>
      <Grid>
        <Row>
          <Col md={6}>
            <Name>Якиманка</Name>
            <Title>
              Исторический центр Москвы в двух<br /> километрах от Кремля
            </Title>
            <GuideLink>Гид по Якиманке →</GuideLink>
          </Col>
          <Col md={6}>
            <img
              src={process.env.PUBLIC_URL + "/polyanka-photo.jpg"}
              alt="Полянка"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <MapMark src={process.env.PUBLIC_URL + "/map.png"} alt="Карта" />
          </Col>
          <Col md={6}>
            <Nearby>
              <NearbyItem>
                <NearbyPlace>Красный Октябрь</NearbyPlace>
                <NearbyDistance>24 минуты, 6 км</NearbyDistance>
              </NearbyItem>
              <NearbyItem>
                <NearbyPlace>World class</NearbyPlace>
                <NearbyDistance>2 минуты, 300 м</NearbyDistance>
              </NearbyItem>
              <NearbyItem>
                <NearbyPlace>Третьяковская галерея</NearbyPlace>
                <NearbyDistance>14 минут, 4 км</NearbyDistance>
              </NearbyItem>
            </Nearby>
          </Col>
        </Row>
      </Grid>
    </ComplexLandmark>
  );
}
export default GuideShow;

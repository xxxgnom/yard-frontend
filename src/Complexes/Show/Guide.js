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
const ComplexLandmarkName = styled.h5`
  margin: 0;
  margin-top: 7.45rem;
  margin-bottom: 3.1rem;
  font-family: Philosopher, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #a9afb6;
`;
const ComplexLandmarkTitle = styled.h2`
  margin: 0;
  margin-bottom: 3.2rem;
  font-family: Philosopher, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
`;
const ComplexLandmarkLink = styled.a`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  color: #00779a;
  text-decoration: none;
`;
const ComplexLandmarkMap = styled.img`
  position: absolute;
  margin-top: 3.8rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;
const ComplexLandmarkNearby = styled.div`
  position: absolute;
  width: 583px;
  margin-top: 3.8rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;
const ComplexLandmarkNearbyItem = styled.div`
  padding: 1.5rem;
  padding-bottom: 1.57rem;
  box-sizing: border-box;
  border-bottom: solid 1px #e0e0e1;
`;
const ComplexLandmarkNearbyItemLastChild = styled.section`border-bottom: 0;`;
const ComplexLandmarkNearbyPlace = styled.h6`
  display: block;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;
const ComplexLandmarkNearbyDistance = styled.p`
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;
function GuideShow(props) {
  return (
    <ComplexLandmark>
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <ComplexLandmarkName>Якиманка</ComplexLandmarkName>
            <ComplexLandmarkTitle>
              Исторический центр Москвы в двух<br /> километрах от Кремля
            </ComplexLandmarkTitle>
            <ComplexLandmarkLink>Гид по Якиманке →</ComplexLandmarkLink>
          </div>
          <div className="col-xs-6">
            <img
              src={process.env.PUBLIC_URL + "/polyanka-photo.jpg"}
              alt="Полянка"
              className="ComplexLandmark-img"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <ComplexLandmarkMap
              src={process.env.PUBLIC_URL + "/map.png"}
              alt="Карта"
            />
          </div>
          <div className="col-xs-6">
            <ComplexLandmarkNearby>
              <ComplexLandmarkNearbyItem>
                <ComplexLandmarkNearbyPlace>
                  Красный Октябрь
                </ComplexLandmarkNearbyPlace>
                <ComplexLandmarkNearbyDistance>
                  24 минуты, 6 км
                </ComplexLandmarkNearbyDistance>
              </ComplexLandmarkNearbyItem>
              <ComplexLandmarkNearbyItem>
                <ComplexLandmarkNearbyPlace>
                  World class
                </ComplexLandmarkNearbyPlace>
                <ComplexLandmarkNearbyDistance>
                  2 минуты, 300 м
                </ComplexLandmarkNearbyDistance>
              </ComplexLandmarkNearbyItem>
              <ComplexLandmarkNearbyItem>
                <ComplexLandmarkNearbyPlace>
                  Третьяковская галерея
                </ComplexLandmarkNearbyPlace>
                <ComplexLandmarkNearbyDistance>
                  14 минут, 4 км
                </ComplexLandmarkNearbyDistance>
              </ComplexLandmarkNearbyItem>
            </ComplexLandmarkNearby>
          </div>
        </div>
      </div>
    </ComplexLandmark>
  );
}
export default GuideShow;

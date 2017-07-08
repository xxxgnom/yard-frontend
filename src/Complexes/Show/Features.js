//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const ComplexInfo = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 1.6rem;
  padding-bottom: 1rem;
`;
const ComplexInfoBlock = styled.div`margin-right: 4rem;`;
const ComplexInfoBlockTitle = styled.h2`
  margin: 0;
  font-family: Philosopher, sans-serif;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
`;
const ComplexInfoBlockDescription = styled.h2`
  display: block; /* текст занимает всю ширину строки */
  margin-top: 0.6rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;
const Stripe = styled.div`border-top: solid 1px #e0e0e1;`;
function FeauturesShow(props) {
  return (
    <Grid>
      <ComplexInfo>
        <ComplexInfoBlock>
          <ComplexInfoBlockTitle>
            950<ComplexInfoBlockDescription>
              предложений
            </ComplexInfoBlockDescription>
          </ComplexInfoBlockTitle>
        </ComplexInfoBlock>
        <ComplexInfoBlock>
          <ComplexInfoBlockTitle>
            John McAslan + Partners<ComplexInfoBlockDescription>
              архитектор
            </ComplexInfoBlockDescription>
          </ComplexInfoBlockTitle>
        </ComplexInfoBlock>
        <ComplexInfoBlock>
          <ComplexInfoBlockTitle>
            Группа «ПСН»<ComplexInfoBlockDescription>
              застройщик
            </ComplexInfoBlockDescription>
          </ComplexInfoBlockTitle>
        </ComplexInfoBlock>
      </ComplexInfo>
      <Stripe />
    </Grid>
  );
}
export default FeauturesShow;

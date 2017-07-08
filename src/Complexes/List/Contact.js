import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";

const ContactTitle = styled.h2`
  padding-top: 4rem;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #3e4247;
`;
const Contact = styled.div`width: 804px;`;
const ContactText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;
const ContactBtn = styled.button`
  padding: 0.75rem 2rem;
  margin-bottom: 4rem;
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

function Contactshow(props) {
  return (
    <Grid>
      <Row center="md">
        <Contact>
          <ContactTitle>Discover Our New Developments</ContactTitle>
          <ContactText>
            Compass brings a modern approach to new development marketing and
            sales. From boutique rental conversions to luxurious ground-up
            condominiums, browse our portfolio of current offerings.
          </ContactText>
          <ContactBtn href="#">Contact the team</ContactBtn>
        </Contact>
      </Row>
    </Grid>
  );
}
export default Contactshow;

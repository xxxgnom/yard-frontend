import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import RightArrow from "./img/combined-shape.svg";

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #111111;
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1;
`;
const Title = styled.h4`
  margin: 0;
  margin-bottom: 0.9rem;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  color: #646971;
`;
const FooterLink = styled(Link)`
display: block;
margin-bottom: 1rem;
font-size: 14px;
font-weight: 300;
color: #ffffff;
text-decoration: none;
`;

const FooterLinkLast = styled(FooterLink)`
margin-top: 1.5rem;
`;
const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
`;

const TextLast = styled.p`margin-top: 1.5rem;`;
const FooterDisclaimer = styled.p`
  padding-top: 4.5rem;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.6;
  color: #a9afb6;
`;
const Nav = styled.nav`
  padding-top: 1rem;
  border-top: solid 2px #3e4247;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col md={4}>
            <div>
              <Title>ООО «Ярд»</Title>
              <Text>ОГРН 1175074002531</Text>
              <Text>ИНН 5036165365</Text>
              <TextLast>+7 (999) 821-14-88</TextLast>
            </div>
          </Col>
          <Col md={2}>
            <Nav>
              <Title>Жилые комплексы</Title>
              <FooterLink to="/">ВТБ Арена Парк</FooterLink>
              <FooterLink to="/">Садовые кварталы</FooterLink>
              <FooterLink to="/">Резиденция Монэ</FooterLink>
              <FooterLinkLast to="/">
                Все ЖК Москвы <img src={RightArrow} alt="RightArrow" />
              </FooterLinkLast>
            </Nav>
          </Col>
          <Col md={2}>
            <Nav>
              <Title>Компания</Title>
              <FooterLink to="/">Команда</FooterLink>
              <FooterLink to="/">О компании</FooterLink>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={4}>
            <FooterDisclaimer>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </FooterDisclaimer>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};

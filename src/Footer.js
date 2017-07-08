import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const FooterText = styled.p`
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
`;

const FooterTextLast = styled.p`margin-top: 1.5rem;`;
const FooterDisclaimer = styled.p`
  padding-top: 4.5rem;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.6;
  color: #a9afb6;
`;
const FooterNav = styled.nav`
  padding-top: 1rem;
  border-top: solid 2px #3e4247;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <div className="footer-company">
              <Title>ООО «Ярд»</Title>
              <FooterText>ОГРН 1175074002531</FooterText>
              <FooterText>ИНН 5036165365</FooterText>
              <FooterTextLast>+7 (999) 821-14-88</FooterTextLast>
            </div>
          </div>
          <div className="col-xs-2">
            <FooterNav>
              <Title>Жилые комплексы</Title>
              <FooterLink to="/">ВТБ Арена Парк</FooterLink>
              <FooterLink to="/">Садовые кварталы</FooterLink>
              <FooterLink to="/">Резиденция Монэ</FooterLink>
              <FooterLinkLast to="/">
                Все ЖК Москвы{" "}
                <img src={process.env.PUBLIC_URL + "/combined-shape.svg"} />
              </FooterLinkLast>
              {/*<a className="footer-link footer-link-last" href="#">Все ЖК Москвы <img src="combined-shape.svg" className="blackstripelogo" /></a>*/}
            </FooterNav>
          </div>
          <div className="col-xs-2">
            <FooterNav>
              <Title>Компания</Title>
              <FooterLink to="/">Команда</FooterLink>
              <FooterLink to="/">О компании</FooterLink>
            </FooterNav>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-4">
            <FooterDisclaimer>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </FooterDisclaimer>
          </div>
        </div>
      </div>
    </Footer>
  );
};

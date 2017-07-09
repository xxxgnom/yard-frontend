//import React from 'react';
import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const GalleryStripe = styled.div`
  display: flex;
  padding-top: 0.5rem;
`;
const PhotoCountBtn = styled.div`
  position: absolute;
  margin-top: -2.7rem;
  padding: 0.5rem 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
`;
function GalleryShow(props) {
  return (
    <div>
      <GalleryStripe>
        <img
          src={process.env.PUBLIC_URL + "/gallery-img-1.jpg"}
          alt="gallery"
        />
        <img
          src={process.env.PUBLIC_URL + "/gallery-img-2.jpg"}
          alt="gallery"
        />
        <img
          src={process.env.PUBLIC_URL + "/gallery-img-3.jpg"}
          alt="gallery"
        />
        <img
          src={process.env.PUBLIC_URL + "/gallery-img-4.jpg"}
          alt="gallery"
        />
        <img
          src={process.env.PUBLIC_URL + "/gallery-img-5.jpg"}
          alt="gallery"
        />
      </GalleryStripe>
      <Grid>
        <PhotoCountBtn href="#">41 фотография</PhotoCountBtn>
      </Grid>
    </div>
  );
}
export default GalleryShow;

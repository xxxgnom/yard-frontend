//import React from 'react';
import React, {Component} from 'react';

export default () => {
  return (
    <div>
    <section className="intro">
        <img src="compass-development-logo.svg" className="blackstripelogo" />
      </section>
    <main className="main">
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-8">
              <h2 className="contact-title">Discover Our New Developments</h2>
              <p className="contact-text">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
              <button className="contact-btn" href="#">Contact the team</button>
            </div>
          </div>
          <a className="complexcard" href="#">
            <img src="bitmap.jpg" srcSet="bitmap@2x.jpg 2x, bitmap@3x.jpg 3x" className="complexcard-img" />
            <article className="complexcard-info">
              <p className="complexcard-place">SOUTH BEACH, SAN FRANCISCO</p>
              <h3 className="complexcard-adress">764 Metropolitan Avenue</h3>
              <p className="complexcard-description">The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</p>
            </article>
          </a>
          <a className="complexcard" href="#">
            <img src="bitmap.jpg" srcSet="bitmap@2x.jpg 2x, bitmap@3x.jpg 3x" className="complexcard-img" />
            <article className="complexcard-info">
              <p className="complexcard-place">MIDTOWN EAST, MANHATTAN</p>
              <h3 className="complexcard-adress">100 East 53rd Street</h3>
              <p className="complexcard-description">One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</p>
            </article>
          </a><a className="complexcard" href="#">
            <img src="bitmap.jpg" srcSet="bitmap@2x.jpg 2x, bitmap@3x.jpg 3x" className="complexcard-img" />
            <article className="complexcard-info">
              <p className="complexcard-place">NOLITA, MANHATTAN</p>
              <h3 className="complexcard-adress">152 Elizabeth</h3>
              <p className="complexcard-description">152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</p>
            </article>
          </a>
        </div>
      </main>
      </div>
  );
};

import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

function CardsShow(props) {
  return (
    <Grid>
      <Card title="SOUTH BEACH, SAN FRANCISCO" address="100 East 53rd Street">
        One Hundred East Fifty Third Street by Foster + Partners is a limited
        collection of modern residences in Midtown Manhattan's Cultural
        District. The 94 residences ranging from alcove lofts to four bedrooms
        within the 63-story tower are generously proportioned.
      </Card>
      <Card title="MIDTOWN EAST, MANHATTAN" address="764 Metropolitan Avenue">
        The Lewis Steel Building is a masterful industrial conversion located in
        the heart of Williamsburg. Located at 76 North 4th Street, the former
        1930's steel factory has been transformed into 83 individually unique
        and luxury loft apartments.
      </Card>
      <Card title="NOLITA, MANHATTAN" address="152 Elizabeth">
        152 Elizabeth is an ultra-luxury condominium building—the first in New
        York City designed by Japanese master architect Tadao Ando. Located at
        the corner of Kenmare and Elizabeth Streets in Nolita, the
        32,000-square-foot building will stand as a profound architectural
        statement and embrace the industrial character of the neighborhood.
      </Card>
    </Grid>
  );
}
export default CardsShow;

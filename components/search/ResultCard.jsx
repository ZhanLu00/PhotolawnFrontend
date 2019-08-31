import React from "react";
import Grid from "../uikit/Grid";

const ResultCard = () => {
  return (
    <Grid className="uk-card uk-card-default uk-grid-collapse uk-width-2-3@m">
      <div className="uk-width-1-5@m uk-padding-small">
        <img src="http://static1.squarespace.com/static/5c49faec70e80221e49dbd74/t/5c4a074b562fa72365a1440c/1562640619999/%3Fformat=750w" />
      </div>
      <div className="uk-width-3-5@m uk-card-body uk-padding-small">
        <h5 className="uk-margin-small-top">Ants and Lemons Studio</h5>
        <div className="uk-card-badge uk-label">Verified</div>
      </div>
      <div className="uk-width-auto@m" />
    </Grid>
  );
};

export default ResultCard;

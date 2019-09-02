import React from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

const PortfolioPage = () => {
  return (
    <React.Fragment>
      <div data-uk-grid className="uk-margin-top">
        <div className="uk-width-1-6@m uk-padding-remove">
          <img src="http://static1.squarespace.com/static/5c49faec70e80221e49dbd74/t/5c4a074b562fa72365a1440c/1562640619999/%3Fformat=750w" />
        </div>
        <div className="uk-width-5-6@m uk-padding-small">
          <h3>New Born and Baby Portfolio</h3>
          <p>
            Our baby photography focuses on preserving the most precious moments
            of your family. We offer excellent service to make sure you're
            happy.
          </p>
          <p>Styles offered: Simple, Magical</p>
        </div>
      </div>
      <div
        className="uk-child-width-1-2@s uk-child-width-1-3@m"
        data-uk-grid="masonry: true"
      >
        {Array.from({ length: 20 }, (item, index) => (
          <div key={index}>
            <div
              className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
              style={{ height: getRandomInt(130, 500) }}
            >
              Image
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PortfolioPage;

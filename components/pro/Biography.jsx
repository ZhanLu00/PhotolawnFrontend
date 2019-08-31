import React from "react";
import Grid from "../uikit/Grid";
import HeadingLine from "../uikit/HeadingLine";

const Biography = () => {
  return (
    <React.Fragment>
      <HeadingLine>Biography</HeadingLine>
      <Grid>
        <div className="uk-text-center uk-width-1-3@m">
          <div className="uk-card uk-card-default uk-border-rounded">
            <div className="uk-card-media-top">
              <img
                src="https://static1.squarespace.com/static/52e58f9be4b06c2b5ce3d434/t/5a1a36a60d92971bbcdb9ddd/1511667392535/2017-11-04+Headshots+002.jpg?format=1000w"
                alt=""
              />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">William Lauzon</h3>
            </div>
          </div>
        </div>
        <div className="uk-width-expand@m">
          <dl className="uk-description-list">
            <dt>Statement of passion</dt>
            <dd>
              I photograph because I love the art, and it would be my honour to
              share that with you. If you have any questions, please don't
              hesitate to contact me! You're welcome to visit my contact page,
              or feel free to check out my social media links in the upper
              corner.
            </dd>
            <dt>Experience</dt>
            <dd>5 years</dd>
            <dt>Training</dt>
            <dd>Vancouver Film School</dd>
            <dt>Gears</dt>
            <dd>
              <p className="uk-margin-remove-vertical">
                Camera: Canon EOS 5D Mark IV (30.4MP Full-Frame CMOS Sensor)
              </p>
              <p className="uk-margin-remove-vertical">
                Lens: Canon EF 24-70mm f/2.8L II USM
              </p>
            </dd>
            <dt>Price Range</dt>
            <dd>$89-$2000 (CAD)</dd>
          </dl>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default Biography;

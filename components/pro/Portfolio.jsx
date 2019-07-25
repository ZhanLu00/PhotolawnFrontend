import React from "react";
import Grid from "../uikit/Grid";
import HeadingLine from "../uikit/HeadingLine";

const Portfolio = () => {
  return (
    <React.Fragment>
      <HeadingLine>Portfolio</HeadingLine>
      <Grid className="uk-grid-small uk-child-width-1-5@l uk-child-width-1-4@m uk-flex-center uk-text-center">
        <div>
          <div className="uk-inline pl-category-wedding">
            <div className="uk-position-bottom">
              <h5 className="uk-text-bold" style={{ color: "white" }}>
                Wedding
              </h5>
            </div>
          </div>
          <a
            className="uk-margin-top uk-button uk-button-primary uk-border-rounded uk-width-1-1"
            href="#package-modal"
            data-uk-toggle
          >
            Choose time
          </a>
          <div className="uk-text-meta">
            <p>
              Starting from $399
              <br />
              <span className="uk-margin-small-right" uk-icon="check" />
              Customizable
            </p>
          </div>
        </div>

        <div>
          <div className="uk-inline pl-category-new-born">
            <div className="uk-position-bottom">
              <h5 className="uk-text-bold" style={{ color: "white" }}>
                New Born
              </h5>
            </div>
          </div>
          <button className="uk-margin-top uk-button uk-button-primary uk-border-rounded uk-width-1-1">
            Choose time
          </button>
          <div className="uk-text-meta">
            <p>
              Starting from $199
              <br />
              <span className="uk-margin-small-right" uk-icon="check" />
              Customizable
            </p>
          </div>
        </div>
        <div>
          <div className="uk-inline pl-category-family">
            <div className="uk-position-bottom">
              <h5 className="uk-text-bold" style={{ color: "white" }}>
                Family
              </h5>
            </div>
          </div>
          <button className="uk-margin-top uk-button uk-button-primary uk-border-rounded uk-width-1-1">
            Choose time
          </button>
          <div className="uk-text-meta">
            <p>
              Starting from $80
              <br />
              <span className="uk-margin-small-right" uk-icon="check" />
              Customizable
            </p>
          </div>
        </div>

        <div>
          <div className="uk-inline pl-category-graduation">
            <div className="uk-position-bottom">
              <h5 className="uk-text-bold" style={{ color: "white" }}>
                Graduation
              </h5>
            </div>
          </div>
          <button className="uk-margin-top uk-button uk-button-primary uk-border-rounded uk-width-1-1">
            Choose time
          </button>
          <div className="uk-text-meta">
            <p>
              Starting from $199
              <br />
              <span className="uk-margin-small-right" uk-icon="check" />
              Customizable
            </p>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};
export default Portfolio;

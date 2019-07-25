import React from "react";
import Grid from "../uikit/Grid";

const TopProfile = () => {
  return (
    <div className="uk-section">
      <Grid>
        <div className="uk-width-2-3@m">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            data-uk-slideshow
          >
            <ul className="uk-slideshow-items">
              <li>
                <img
                  data-src="https://images.unsplash.com/photo-1470322450444-8ccc64987ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a18d70aa45c470e60a575dca38c370a2&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  data-uk-cover
                  data-uk-img="target: !ul > :last-child, !* +*"
                />
              </li>
              <li>
                <img
                  data-src="https://images.unsplash.com/photo-1514149529177-e2053bf69625?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1646eb60bc33ac44b722e621980b629e&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  data-uk-cover
                  data-uk-img="target: !* -*, !* +*"
                />
              </li>
              <li>
                <img
                  data-src="https://images.unsplash.com/photo-1511396651042-2153ae4f2bb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed58ff550800eb40449bd386103fecd8&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  data-uk-cover
                  data-uk-img="target: !* -*, !ul > :first-child"
                />
              </li>
            </ul>
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-previous
              data-uk-slideshow-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              href="#"
              data-uk-slidenav-next
              data-uk-slideshow-item="next"
            />
          </div>
        </div>
        <div className="uk-width-expand@m uk-text-center">
          <img
            data-src="https://getuikit.com/docs/images/avatar.jpg"
            className="uk-align-center uk-border-circle uk-margin-small-bottom"
            width="200"
            height="200"
            data-uk-img
          />
          <h3 className="uk-text-bold uk-margin-remove-vertical">
            William Lauzon Photography
          </h3>
          <span className="uk-label">
            <span data-uk-icon="check" />
            Verified
          </span>
        </div>
      </Grid>
    </div>
  );
};

export default TopProfile;

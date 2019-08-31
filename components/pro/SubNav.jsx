import React from "react";

const SubNav = () => {
  return (
    <div className="pl-branding-sub-nav">
      <div className="uk-container">
        <div
          className="uk-grid uk-grid-medium uk-flex uk-flex-middle"
          data-uk-grid
        >
          <div className="uk-width-auto">
            <a href="#" className="uk-logo" title="">
              <img
                data-src="https://d1g145x70srn7h.cloudfront.net/files/ee0ff387c3b3a4ee1b4efef70e6abe07884af6fa/original.png"
                width="50"
                height="50"
                alt=""
                data-uk-img
              />
              <span className="uk-text-small">William Lauzon Photography</span>
            </a>
          </div>
          <div className="uk-width-expand">
            <ul className="uk-subnav" data-uk-margin>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Porfolio</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Reputation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;

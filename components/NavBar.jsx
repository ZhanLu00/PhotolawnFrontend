import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header id="pl-navbar">
      <div className="uk-container uk-container-expand">
        <div
          className="uk-grid uk-grid-medium uk-flex uk-flex-middle"
          data-uk-grid
        >
          <div className="uk-width-auto">
            <Link href="/">
              <a className="uk-logo">Photolawn</a>
            </Link>
            {/* <Link href="/" className="uk-logo">
              Photolawn
            </Link> */}
          </div>
          <div className="uk-width-expand">
            <div className="pl-search-bar uk-inline uk-width-1-2 uk-border-rounded">
              <span className="uk-form-icon uk-form-icon">
                <i data-feather="search" />
              </span>
              <input
                className="uk-input uk-width-1-1 search-fld uk-border-rounded"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="uk-width-auto">
            <ul className="uk-subnav" data-uk-margin>
              <li className="uk-visible@s">
                <Link href="/signup">
                  <a>Join as a photographer</a>
                </Link>
              </li>
              <li className="uk-visible@s">
                <Link href="/login">
                  <a>Sign in</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

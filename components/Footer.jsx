import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="uk-section uk-section-small" id="pl-footer">
      <div className="uk-container uk-container-small">
        <div data-uk-grid>
          <div className="uk-width-2-3@m">
            <ul className="uk-list uk-link-text">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="uk-margin-remove-top">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="uk-margin-remove-top">
                <Link href="/terms">
                  <a>Terms</a>
                </Link>
              </li>
              <li className="uk-margin-remove-top">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="uk-width-expand@m uk-text-small uk-text-right">
            <p>
              <a href="#" className="uk-icon-button">
                <i data-feather="facebook" />
              </a>
              <a href="#" className="uk-icon-button">
                <i data-feather="twitter" />
              </a>
              <a href="#" className="uk-icon-button">
                <i data-feather="instagram" />
              </a>
            </p>
            <p>© Photolawn, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

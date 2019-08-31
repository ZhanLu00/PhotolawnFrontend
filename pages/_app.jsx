import App from "next/app";
import Head from "next/head";
import React from "react";
import "../assets/global.less";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNav from "../components/pro/SubNav";

export default class Photolawn extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/css/uikit.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.6/js/uikit-icons.min.js" />
        </Head>
        <NavBar />
        {((router.pathname.includes("pro") ||
          router.pathname.includes("portfolio")) && <SubNav />) ||
          (router.pathname.includes("album") && (
            <div
              className="uk-height-large uk-background-cover uk-light uk-flex"
              uk-parallax="bgy: -200"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1562887106-0ba63ac82e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80')"
              }}
            >
              <h1 className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                Baby Photo Session Album
              </h1>
            </div>
          ))}
        <BodyContainer>
          <Component {...pageProps} />
          <Footer />
        </BodyContainer>
      </React.Fragment>
    );
  }
}

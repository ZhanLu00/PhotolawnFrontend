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
        {(router.pathname.includes("pro") ||
          router.pathname.includes("portfolio")) && <SubNav />}
        <BodyContainer>
          <Component {...pageProps} />
          <Footer />
        </BodyContainer>
      </React.Fragment>
    );
  }
}

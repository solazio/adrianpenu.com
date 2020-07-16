import React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../sass/styles.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description, url } = useSiteMetadata();
  return (
    <div className='main'>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='canonical' href={url} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix("/")}img/logo.svg`}
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`${withPrefix("/")}img/logo.svg`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`${withPrefix("/")}img/logo.svg`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix("/")}img/logo.svg`}
        />
        <meta name='theme-color' content='#c9c1a9' />

        <meta property='og:type' content='painter' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta property="og:site_name" content="Adrian Penu"></meta>
        <meta
          property='og:image'
          content={`${withPrefix("/")}img/adrian.jpg`}
        />
      </Helmet>
      <Header path={globalHistory.location.pathname} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;

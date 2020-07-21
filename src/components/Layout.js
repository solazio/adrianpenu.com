import React from "react";
import { Helmet } from "react-helmet";
import { globalHistory } from "@reach/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../sass/styles.scss";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description, url } = useSiteMetadata();
  return (
    <div className='main'>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='preconnect' href={url} />
        <link rel='canonical' href={url} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${url}/img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`${url}/img/logo.svg`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`${url}/img/logo.svg`}
          sizes='16x16'
        />

        <link rel='mask-icon' href={`${url}/img/logo.svg`} />
        <meta name='theme-color' content='#c9c1a9' />

        {/* To DO add fb:app_id https://stackoverflow.com/questions/8845082/getting-fb-app-id-from-a-fb-page*/}
        <meta property='og:type' content='profile' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content='Adrian Penu'></meta>
        <meta property='og:image' content={`${url}/img/adrian.jpg`} />

        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={`${url}/img/adrian.jpg`} />
        {/* TO DO add twitter user name*/}
        <meta property='twitter:site' content='@username' />

        <meta property='fb:app_id' content='add_fb_app_id' />
      </Helmet>
      <Header path={globalHistory.location.pathname} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;

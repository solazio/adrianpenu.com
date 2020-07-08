import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='p-footer'>
        <div className='row'>
          <div className='col-4 p-footer--left'>
            <p className='u-no-margin--bottom'>
              Powered by{" "}
              <a className='p-link' href='https://designza.co.uk'>
                Designza
              </a>
            </p>
          </div>
          <div className='col-4 p-footer--center'>
            <p className='u-no-margin--bottom'>
              Copyright © 2020 Adrian Penu. All rights reserved
            </p>
          </div>
          <div className='col-4 p-footer--right'>
            <a title='facebook' href='https://www.facebook.com/adrianpenuart'>
              <i className='p-icon--facebook'></i>
            </a>
            <a title='instagram' href='https://www.instagram.com/adpenu/'>
              <i className='p-icon--instagram'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

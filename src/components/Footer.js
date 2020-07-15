import React from "react";

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
            <a title='Follow me on Facebook' href='https://www.facebook.com/adrianpenuart'>
              <i className='p-icon--facebook'></i>
            </a>
            <a title='Follow me on Instagram' href='https://www.instagram.com/adpenu/'>
              <i className='p-icon--instagram'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

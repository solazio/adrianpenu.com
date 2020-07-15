import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const SocialShare = ({ socialConfig, tags }) => (
  <div className='p-social-share'>
    <i title='Share this page' className='p-icon--share'></i>
    <FacebookShareButton
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      title='Share on Facebook'
      className='button is-outlined is-rounded facebook'>
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
  </div>
);

SocialShare.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

SocialShare.defaultProps = {
  tags: [],
};

export default SocialShare;

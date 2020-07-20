import React from "react";
import PropTypes from "prop-types";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <div className='p-strip'>
      <div className='u-fixed-width'>
        <h1>No preview available</h1>
        <p>We are sorry, but this page does not have a preview available.</p>
      </div>
    </div>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;

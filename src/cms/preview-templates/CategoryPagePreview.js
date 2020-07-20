import React from "react";
import PropTypes from "prop-types";
import { CategoryTemplate } from "../../templates/category-page";

const IndexPagePreview = ({ entry}) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <>
        <div className='p-strip is-shallow'>
          <div className='u-fixed-width'>
            <p>
              <strong>Note:</strong> Use the <code>position</code> field to set the order of the categories or images on the page.
            </p>
          </div>
        </div>
        <CategoryTemplate
          images={data.images}
          description={data.description}
          title={data.title}
        />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;

import React from "react";
import PropTypes from "prop-types";
import { CategoryTemplate } from "../../templates/category-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <CategoryTemplate
        images={getAsset(data.images)}
        description={data.description}
        title={data.title}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;

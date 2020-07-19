import React from "react";
import PropTypes from "prop-types";
import { CategoryTemplate } from "../../templates/category-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  console.log(entry.getIn(["data"]));
  const data = entry.getIn(["data"]);

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

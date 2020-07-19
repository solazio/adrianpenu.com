import React from "react";
import PropTypes from "prop-types";
import { CategoryTemplate } from "../../templates/category-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  console.log(entry);
  console.log(entry.getIn(["data"]));
  console.log(entry.getIn(["data"]).toJS());
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <CategoryTemplate
        images={getAsset(data.images)}
        description={entry.getIn(["data", "description"])}
        title={entry.getIn(["data", "title"])}
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

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({
  imageInfo,
  immageClass,
  imageStyle,
  alt,
}) => {
  const { childImageSharp, image, url } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={immageClass}
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        className={immageClass}
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return (
      <img className={immageClass} style={imageStyle} src={image} alt={alt} />
    );

  if (!!url && typeof url === "string")
    return (
      <img className={immageClass} style={imageStyle} src={url} alt={alt} />
    );

  if (!!imageInfo && typeof imageInfo === "string")
    return (
      <img
        className={immageClass}
        style={imageStyle}
        src={imageInfo}
      />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
  immageClass: PropTypes.string,
  imageStyle: PropTypes.object,
  alt: PropTypes.string,
};

export default PreviewCompatibleImage;

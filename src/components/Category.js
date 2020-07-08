import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Category = ({ category }) => (
  <div className='col-4 col-medium-3'>
    <Link to={`/${category.slug}`}>
      <div className='p-card--category'>
        <div className='p-card--category__title'>{category.name}</div>
        <ul className='p-card--category__list'>
          {category.images.map((el, i) => {
            if (i === 0 && el.featured) {
              return (
                <li className='p-card--category__large' key={el.alt}>
                  <PreviewCompatibleImage
                    imageInfo={el.image}
                    immageClass='p-card--category__image'
                    alt={el.alt}
                  />
                </li>
              );
            } else if (i > 0 && i < 4 && el.featured) {
              return (
                <li className='p-card--category__small' key={el.alt}>
                  <PreviewCompatibleImage
                    imageInfo={el.image}
                    immageClass='p-card--category__image'
                    alt={el.alt}
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </Link>
  </div>
);

Category.propTypes = {
  images: PropTypes.object,
};

Category.defaultProps = {
  category: {},
};

export default Category;

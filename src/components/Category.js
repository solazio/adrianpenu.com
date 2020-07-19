import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { sortBy } from "lodash";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Category = ({ category }) => {
  // Sort images by the specified position
  const images = sortBy(category.images, [
    function (el) {
      return el.position;
    },
  ]);

  const featuredImages = [];
  images.forEach((el) => {
    if (el.featured) {
      featuredImages.push(el);
    }
  });

  return (
    <div className='col-4 col-medium-3'>
      <Link to={`/work/${category.slug}`}>
        <div className='p-card--category'>
          <div className='p-card--category__title'>{category.title}</div>
          <ul className='p-card--category__list'>
            {featuredImages.map((el, i) => {
              if (i === 0) {
                return (
                  <li className='p-card--category__large' key={el.alt}>
                    <PreviewCompatibleImage
                      imageInfo={el.image}
                      immageClass='p-card--category__image'
                      alt={el.alt}
                    />
                  </li>
                );
              } else if (i > 0 && i < 4) {
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
};

Category.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }),
};

Category.defaultProps = {
  category: {},
};

export default Category;

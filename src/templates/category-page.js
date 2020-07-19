import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { sortBy } from "lodash";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const CategoryTemplate = ({ images, slug, helmet }) => {
  const allImages = images.map((el, i) => (
    <Link to={`/work/${slug}/${el.slug}`} key={i}>
      <div className='p-card--highlighted' title={el.title}>
        <div className='p-card__image'>
          <PreviewCompatibleImage imageInfo={el.image} alt={el.alt} />
          <div className='p-card__info'>
            <div className='u-right'>{el.dimensions}</div>
            <div className='u-left'>{el.title}</div>
          </div>
        </div>
      </div>
    </Link>
  ));

  let itemsInColOne = 0,
    itemsInColTwo = 0;

  if (images.length % 3 === 2) {
    itemsInColOne = (images.length + 1) / 3;
    itemsInColTwo = (images.length + 1) / 3;
  } else if (images.length % 3 === 1) {
    itemsInColOne = (images.length + 2) / 3;
    itemsInColTwo = (images.length - 1) / 3;
  } else if (images.length % 3 === 0) {
    itemsInColOne = images.length / 3;
    itemsInColTwo = images.length / 3;
  }

  let columnOne = [],
    columnTwo = [],
    columnThree = [];

  allImages.forEach((el, i) => {
    if (i < itemsInColOne) {
      columnOne.push(el);
    } else if (i >= itemsInColOne && i < itemsInColTwo + itemsInColOne) {
      columnTwo.push(el);
    } else if (i >= itemsInColTwo + itemsInColOne) {
      columnThree.push(el);
    }
  });

  return (
    <section className='p-strip'>
      {helmet || ""}
      <div className='row'>
        <div className='col-4'>{columnOne}</div>
        <div className='col-4'>{columnTwo}</div>
        <div className='col-4'>{columnThree}</div>
      </div>
    </section>
  );
};

CategoryTemplate.propTypes = {
  images: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Category = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // Sort images by the specified position
  const images = sortBy(frontmatter.images, [
    function (el) {
      return el.position;
    },
  ]);

  return (
    <Layout>
      <CategoryTemplate
        images={images}
        slug={frontmatter.slug}
        helmet={
          <Helmet titleTemplate='%s | Adrian Penu'>
            <title>{`${frontmatter.title}`}</title>
            <meta name='description' />
          </Helmet>
        }
        title={frontmatter.title}
      />
    </Layout>
  );
};

Category.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Category;

export const pageQuery = graphql`
  query CategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        images {
          title
          alt
          dimensions
          slug
          position
          image {
            childImageSharp {
              fluid(maxWidth: 370, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

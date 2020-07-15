import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { find } from "lodash";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PaintingTemplate = ({ painting, helmet }) => {
  return (
    <section className='p-strip'>
      {helmet || ""}
      <div className='row'>
        <div className='col-6'>
          <PreviewCompatibleImage
            imageInfo={painting.image}
            alt={painting.alt}
          />
        </div>
        <div className='col-5 col-start-large-8'>
          <div className='p-card--details'>
            <div className='p-card__header'>
              <h1 className='p-heading--3'>{painting.title}</h1>
              <p>{painting.description}</p>
            </div>
            <div className='p-card__details'>
              <ul className='p-list--small'>
                <li className='p-list__item'>{painting.type}</li>
                <li className='p-list__item'>{painting.dimensions}</li>
                <li className='p-list__item p-heading--3 u-no-margin--bottom'>
                  {painting.price}
                </li>
                {painting.price[0] === "£" ? (
                  <li className='p-list__item'>
                    Free worldwide shipping and returns
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div className='p-card__buy-now'>
              <p>Interested in acquiring this artwork?</p>
              <Link
                className='p-button--neutral u-no-margin--bottom'
                to='/contact'>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PaintingTemplate.propTypes = {
  image: PropTypes.object,
  helmet: PropTypes.object,
};

const Painting = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  // find the painting for this page
  const painting = find(frontmatter.images, { slug: pageContext.paintingSlug });

  return (
    <Layout>
      <PaintingTemplate
        painting={painting}
        helmet={
          <Helmet titleTemplate='%s | Work'>
            <title>{painting.title}</title>
            <meta name='description' content={painting.description} />
          </Helmet>
        }
      />
    </Layout>
  );
};

Painting.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Painting;

export const pageQuery = graphql`
  query PaintingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          title
          alt
          description
          dimensions
          slug
          type
          price
          image {
            childImageSharp {
              fluid(maxWidth: 650, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

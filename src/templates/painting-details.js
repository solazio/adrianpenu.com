import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { find } from "lodash";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PaintingTemplate = ({ image, alt, title, helmet }) => {
  return (
    <section className='p-strip'>
      {helmet || ""}
      <div className='u-fixed-width'>
        <PreviewCompatibleImage imageInfo={image} alt={alt} />
      </div>
    </section>
  );
};

PaintingTemplate.propTypes = {
  image: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Painting = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  // find the painting for this page
  const painting = find(frontmatter.images, { slug: pageContext.paintingSlug });

  return (
    <Layout>
      <PaintingTemplate
        image={painting}
        description={frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Work'>
            <title>{`${frontmatter.title}`}</title>
            <meta name='description' />
          </Helmet>
        }
        title={frontmatter.title}
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
          size
          slug
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

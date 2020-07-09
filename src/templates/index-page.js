import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Category from "../components/Category";

export const IndexPageTemplate = ({ categories }) => (
  <div>
    <section className='p-strip'>
      <div className='row'>
        {categories.map((category, i) => (
          <Category category={category} key={i} />
        ))}
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  categories: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate categories={frontmatter.categories} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        categories {
          name
          slug
          images {
            alt
            featured
            image {
              childImageSharp {
                fluid(maxWidth: 350, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

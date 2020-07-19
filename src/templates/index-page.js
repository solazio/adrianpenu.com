import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { sortBy } from "lodash";

import Layout from "../components/Layout";
import Category from "../components/Category";

export const IndexPageTemplate = ({ categories }) => (
  <div>
    <section className='p-strip'>
      <div className='row'>
        {categories.map((category, i) => (
          <Category category={category.node.frontmatter} key={i} />
        ))}
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  categories: PropTypes.array,
};

const IndexPage = ({ data }) => {
  // Sort categories by the specified position
  const categories = sortBy(data.allMarkdownRemark.edges, [
    function (el) {
      return el.node.frontmatter.position;
    },
  ]);

  return (
    <Layout>
      <IndexPageTemplate categories={categories} />
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
  query CategoriesForIndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "category-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            position
            images {
              featured
              alt
              position
              image {
                childImageSharp {
                  fluid(maxWidth: 370, quality: 50) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;

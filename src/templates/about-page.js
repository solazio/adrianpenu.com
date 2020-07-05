import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className='p-strip'>
      <div className='u-fixed-width'>
        <h1 className='p-heading--2'>{title}</h1>
      </div>
      <div className='row'>
        <div className='col-6'>
          <PreviewCompatibleImage
            imageInfo={image}
            imageStyle={{ width: "250px" }}
          />
        </div>
      </div>
      <div className='u-fixed-width' style={{ paddingBlockStart: "2rem" }}>
        <PageContent className='content' content={content} />
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 200, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

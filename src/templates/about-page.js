import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutPageTemplate = ({
  title,
  subtitle,
  image,
  description,
  expos,
}) => {
  return (
    <>
      <section className='p-strip'>
        <div className='u-fixed-width'>
          <h1 className='p-heading--3'>{title}</h1>
        </div>
        <div className='row'>
          <div className='col-6'>
            <p>{description}</p>
          </div>
          <div className='col-6'>
            <PreviewCompatibleImage
              imageInfo={image}
            />
          </div>
        </div>
      </section>

      <section className='p-strip'>
        <div className='u-fixed-width'>
          <h2 className='p-heading--4'>{subtitle}</h2>
        </div>
        <div className='row'>
          {expos.map((el) => (
            <div className='col-3 col-medium-3 col-small-4'>
              <div className='p-card--expo'>
                <div className='p-card__date'>
                  <i class='p-icon--calendar'></i>
                  <span>{el.date}</span>
                </div>
                <p className='p-card__content'>{el.name}</p>
                <div className='p-card__location'>
                  <i class='p-icon--location'></i>
                  <span>{el.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string.isRequired,
  expos: PropTypes.array.isRequired,
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        expos={frontmatter.expos}
        image={frontmatter.image}
        description={frontmatter.description}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }).isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 280, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        expos {
          date
          location
          name
        }
      }
    }
  }
`;

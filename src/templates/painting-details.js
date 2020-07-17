import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { find } from "lodash";

import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SocialShare from "../components/SocialShare";

export const PaintingTemplate = ({ painting, helmet, siteMetadata }) => {
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
                {painting.price && painting.price[0] === "£" ? (
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
              <div className='row'>
                <div className='col-3'>
                  <Link
                    className='p-button--neutral u-no-margin--bottom'
                    to='/contact'>
                    {" "}
                    Get in touch{" "}
                  </Link>{" "}
                </div>
                <div className='col-2'>
                  <SocialShare
                    socialConfig={{
                      config: {
                        url: `${siteMetadata.url}${siteMetadata.path}`,
                        title: `${painting.title}`,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PaintingTemplate.propTypes = {
  image: PropTypes.object,
  siteMetadata: PropTypes.object,
  helmet: PropTypes.object,
};

const Painting = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  let { siteMetadata } = data.site;
  siteMetadata.path = pageContext.pagePath;

  // find the painting for this page
  const painting = find(frontmatter.images, { slug: pageContext.paintingSlug });

  return (
    <Layout>
      <PaintingTemplate
        painting={painting}
        siteMetadata={siteMetadata}
        helmet={
          <Helmet titleTemplate='%s | Work'>
            <meta charSet='utf-8' />
            <title>{painting.title}</title>
            <meta name='description' content={painting.description} />
            <meta
              property='og:title'
              content={`${painting.title} | Adrian Penu`}
            />
            <meta
              property='twitter:title'
              content={`${painting.title} | Adrian Penu`}
            />
            <meta property='og:description' content={painting.description} />
            <meta
              property='twitter:description'
              content={painting.description}
            />
            <meta
              property='og:url'
              content={`${siteMetadata.url}${siteMetadata.path}`}
            />
            <meta
              property='og:image'
              content={`${siteMetadata.url}${painting.image.childImageSharp.fluid.src}`}
            />
            <meta
              name='twitter:image'
              content={`${siteMetadata.url}${painting.image.childImageSharp.fluid.src}`}
            />
            <meta name='twitter:card' content='summary_large_image' />
          </Helmet>
        }
      />
    </Layout>
  );
};

Painting.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    markdownRemark: PropTypes.object,
  }),
};

export default Painting;

export const pageQuery = graphql`
  query PaintingByID($id: String!) {
    site {
      siteMetadata {
        url
      }
    }
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

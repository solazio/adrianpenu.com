import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className='row'>
        {posts &&
          posts.map(({ node: post }) => (
            <div className='col-6' key={post.id}>
              <article
                className={`p-card--blog ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}>
                <header className='row'>
                  {post.frontmatter.featuredimage ? (
                    <div className='col-2'>
                      <div className='p-card__image'>
                        <PreviewCompatibleImage
                          immageClass='p-card__thumbnail'
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    </div>
                  ) : null}
                  <div
                    className={`${
                      post.frontmatter.featuredimage ? "col-4" : "col-6"
                    } p-card__title`}>
                    <Link
                      className='p-heading--4 p-link--blog'
                      to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <p>
                      <small>{post.frontmatter.date}</small>
                    </p>
                  </div>
                </header>
                <p className='p-card__content'>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link
                    className='p-button--neutral u-no-margin--bottom'
                    to={post.fields.slug}>
                    Keep reading
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

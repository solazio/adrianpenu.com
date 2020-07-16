import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          className='p-strip--blog'
          style={{
            backgroundImage: `linear-gradient(to top, rgba(201, 193, 169, 0.3) 0%, rgba(201, 193, 169, 0.3) 100%), url('/img/fiction-galatea-IV.jpg')`,
          }}>
          <div className='u-fixed-width'>
            <h1>Latest stories</h1>
          </div>
        </section>
        <section className='p-strip'>
            <BlogRoll />
        </section>
      </Layout>
    );
  }
}

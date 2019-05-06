import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

class IndexPage extends React.Component {
  render() {
    const { email, phone, phoneFormatted } = this.props.data.site.siteMetadata;

    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Layout>
          <About />
          <Contact />
        </Layout>
      </>
    );
  }
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        email
        phone
        phoneFormatted
      }
    }
  }
`;

export default IndexPage;

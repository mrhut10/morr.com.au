import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Logo from '../images/logo.svg';

class IndexPage extends React.Component {
  render() {
    const { email, phone, phoneFormatted } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="flex flex-1 flex-col items-center justify-center">
          <img className="h-32 sm:h-64 mb-12 mt-auto" src={Logo} alt="" />
          <h1 className="font-semibold text-2xl">Under construction</h1>
          <div className="flex">
            <p>
              Phone:{' '}
              <a className="font-bold text-green-500" href={phone}>
                {phoneFormatted}
              </a>
            </p>
            <p className="ml-2">
              Email:{' '}
              <a className="font-bold text-green-500" href={email}>
                {email}
              </a>
            </p>
          </div>
          <p className="mt-auto">
            Website by{' '}
            <a
              className="font-bold text-green-500"
              href="https://phirannodesigns.com.au"
              rel="nofollow"
            >
              Phiranno Designs
            </a>
          </p>
        </div>
      </Layout>
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

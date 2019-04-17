import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Logo from '../images/logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="flex flex-1 flex-col items-center justify-center">
      <img className="h-32 sm:h-64 mb-12" src={Logo} alt="" />
      <h1 className="text-2xl">Under construction</h1>
      <p>
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

export default IndexPage;

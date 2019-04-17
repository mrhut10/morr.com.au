import React from 'react';
// import { Link } from 'gatsby';

import SEO from '../components/SEO';
import Logo from '../images/logo.svg';

const IndexPage = () => (
  <main className="flex flex-1 flex-col items-center justify-center min-h-screen text-gray-700">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
  </main>
);

export default IndexPage;

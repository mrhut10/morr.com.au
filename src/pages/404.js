import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Logo from '../images/logo.svg';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="flex flex-1 flex-col items-center justify-center">
          <img className="h-32 sm:h-64 mb-12 mt-auto" src={Logo} alt="" />
          <h1 className="font-semibold text-2xl">404: Page not found</h1>
          <Link className="font-bold text-green-500" to="/">
            Return home
          </Link>
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

export default NotFoundPage;

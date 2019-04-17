import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-2xl">404: Page not found</h1>
      <Link
        className="bg-green-500 font-semibold inline-block px-4 py-2 text-white"
        to="/"
      >
        Return home
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;

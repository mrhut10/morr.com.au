import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import '../../css/tailwind.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div className="body antialiased flex flex-col font-sans leading-relaxed min-h-screen text-gray-700 w-full">
    <Header />
    <main className="bg-white flex flex-1 flex-col mx-auto w-full">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

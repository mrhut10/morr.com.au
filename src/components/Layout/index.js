import React from 'react';

// import Header from '../Header';
// import Footer from '../Footer';

import '../../css/tailwind.css';
import '../../css/global.css';

const Layout = ({ children }) => (
  <div className="body antialiased flex flex-col leading-relaxed min-h-screen overflow-hidden text-gray-700 w-full">
    {/* <Header /> */}
    <main className="bg-white flex flex-1 flex-col max-w-1920 mx-auto w-full">
      {children}
    </main>
    {/* <Footer /> */}
  </div>
);

export default Layout;

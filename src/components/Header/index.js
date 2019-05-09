import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import Logo from '../../images/logo-type.svg';

const handleClick = e => {
  e.preventDefault();
  const element = document.getElementById('nav');
  element.classList.toggle('block');
  element.classList.toggle('hidden');
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            phone
            phoneFormatted
          }
        }
      }
    `}
    render={data => (
      <header className="bg-green-500 md:flex items-center leading-none py-1 relative shadow sticky text-white top-0 w-full z-50">
        <div className="flex flex-wrap items-center max-w-1920px mx-auto w-full">
          <div className="flex justify-between w-full md:w-auto">
            <Link
              to="/"
              className="flex font-bold items-center no-underline px-4 sm:pl-12 text-4xl uppercase"
            >
              <img className="h-12 py-2" src={Logo} alt="" />
            </Link>

            <button
              className="flex md:hidden items-center justify-center p-4 sm:px-12"
              onClick={handleClick}
              type="button"
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <nav
            id="nav"
            className="hidden md:flex md:flex-1 md:items-center md:justify-end relative w-full md:w-auto"
          >
            <NavLink link="/" title="Home" />
            <NavLink link="/#about" title="About&nbsp;Us" />
            <NavLink link="/#projects" title="Projects" />
            <NavLink link="/#contact" title="Contact" />
            <a
              className="border-green-400 border-t md:border-none flex text-sm"
              href={`tel:${data.site.siteMetadata.phone}`}
            >
              <span
                className="bg-white font-bold inline-block mb-1 md:mb-0 ml-4 sm:ml-12 md:ml-3 mr-4 sm:mr-12 mt-2 md:mt-0 p-2 text-green-500 uppercase"
                style={{ whiteSpace: `nowrap` }}
              >
                Phone: {data.site.siteMetadata.phoneFormatted}
              </span>
            </a>
          </nav>
        </div>
      </header>
    )}
  />
);

const NavLink = props => (
  <Link
    to={props.link}
    className="hover:bg-green-400 block border-green-400 border-t md:border-none px-4 sm:px-12 md:px-3 py-2 text-sm tracking-wide"
  >
    {props.title}
  </Link>
);

export default Header;

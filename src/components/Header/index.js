import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

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
      <header className="bg-green-brand md:flex items-center leading-none py-2 relative text-white w-full">
        <div className="flex items-center max-w-1920px mx-auto w-full">
          <div className="flex justify-between w-full md:w-auto">
            <Link
              to="/"
              className="flex font-bold items-center no-underline px-4 text-4xl uppercase"
            >
              Morr
            </Link>

            <button
              className="flex md:hidden items-center justify-center p-4"
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
              className="bg-white font-bold inline-block ml-2 mr-4 mt-2 md:mt-0 p-2 text-green-brand uppercase"
              href={`tel:${data.site.siteMetadata.phone}`}
            >
              Phone: {data.site.siteMetadata.phoneFormatted}
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
    className="hover:bg-green-400 block border-green-400 border-t md:border-none p-2 text-sm tracking-wide"
  >
    {props.title}
  </Link>
);

export default Header;

import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import Logo from '../../images/logo-white.svg';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            address
            email
            googleMaps
            title
          }
        }
      }
    `}
    render={data => (
      <footer className="bg-green-brand text-white">
        <div className="max-w-1920px mx-auto w-full">
          <div className="flex flex-wrap items-center">
            <div className="p-4 mx-auto w-1/2 sm:w-1/3">
              <img
                className="w-full"
                style={{ maxWidth: `256px` }}
                src={Logo}
                alt="Morr logo."
              />
            </div>
            <div className="p-4 text-right w-full sm:w-2/3">
              <nav className="mb-4">
                <Link className="ml-4" to="/">
                  Home
                </Link>
                <Link className="ml-4" to="/about">
                  About
                </Link>
                <Link className="ml-4" to="/projects">
                  Projects
                </Link>
                <Link className="ml-4" to="/contact">
                  Contact
                </Link>
              </nav>
              <div className="font-bold uppercase">
                <p>
                  Contact:{' '}
                  <a href={`email:${data.site.siteMetadata.email}`}>
                    {data.site.siteMetadata.email}
                  </a>
                </p>
                <p>
                  Head Office:{' '}
                  <a href={data.site.siteMetadata.googleMaps}>
                    {data.site.siteMetadata.address}
                  </a>
                </p>
                <p className="flex items-center justify-end">
                  Connect with us <FaInstagram className="ml-1 inline-block" />{' '}
                  <FaFacebookSquare className="ml-1 inline-block" />
                </p>
              </div>
            </div>
          </div>
          <p className="flex flex-wrap items-center justify-center mb-0 p-4 text-center text-xs w-full">
            <span className="flex-no-shrink w-full sm:w-auto">
              © {new Date().getFullYear()} {data.site.siteMetadata.title}
            </span>
            <span className="hidden sm:block mx-2 w-full sm:w-auto">|</span>
            <span className="flex-no-shrink w-full sm:w-auto">
              Website by
              <a
                className="font-semibold inline-flex px-1"
                href="https://phirannodesigns.com.au"
                rel="nofollow"
              >
                Phiranno Designs
              </a>
            </span>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;

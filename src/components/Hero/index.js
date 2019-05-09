import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Image from './Image';
import Logo from '../../images/logo-vertical-lockup.svg';

const Hero = () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            title
            phone
            phoneFormatted
            email
          }
        }
      }
    `}
    render={data => (
      <div className="flex font-bold font-sans overflow-hidden relative text-green-500 w-full">
        <Image />
        <div className="absolute flex flex-col inset-0 max-w-1920px mx-auto p-4 sm:px-12 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-5xl uppercase">
              <img className="h-10 py-1" src={Logo} alt="Morr logo." />
            </h1>
            <nav className="text-sm">
              <Link to="/projects" className="block text-right uppercase">
                Our Latest Projects
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-end justify-between mt-auto">
            <div className="leading-none text-4xl uppercase">
              <span className="bg-white inline-block my-1 py-1 px-3">Plan</span>
              <br />
              <span className="bg-white inline-block my-1 py-1 px-3">
                Build
              </span>
              <br />
              <span className="bg-white inline-block my-1 py-1 px-3">
                Deliver
              </span>
            </div>
            <AnchorLink
              offset="56"
              className="bg-white leading-none px-2 text-2xl"
              href="#about"
            >
              <span
                className="inline-block"
                style={{ transform: `rotate(90deg) translateY(-5%)` }}
              >
                &raquo;
              </span>
            </AnchorLink>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;

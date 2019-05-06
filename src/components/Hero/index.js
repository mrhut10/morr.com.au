import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import Image from './Image';

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
      <div className="flex font-bold font-sans items-center overflow-hidden relative text-green-brand w-full">
        <Image />
        <div className="max-w-1920px mx-auto p-4 relative w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl uppercase">Morr</h1>
            <nav>
              <Link to="/projects" className="uppercase">
                Our Latest Projects
              </Link>
            </nav>
          </div>
          <div className="flex items-end justify-between">
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
            <Link className="bg-white leading-none px-2 text-2xl" to="/#about">
              <span
                className="inline-block"
                style={{ transform: `rotate(90deg) translateY(-5%)` }}
              >
                &raquo;
              </span>
            </Link>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;

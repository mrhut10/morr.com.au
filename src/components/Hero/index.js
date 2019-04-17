import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import Image from './Image';
import Button from '../Button';

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
      <div className="flex items-center max-w-1920 mx-auto overflow-hidden relative w-full">
        <div className="image-container">
          <Image />
        </div>
        <div className="flex flex-col pb-16 pt-16 px-4 relative w-full md:w-1/2">
          <div className="max-w-sm mx-auto">
            <h1 className="font-bold leading-none mb-8 text-white text-6xl">
              {/* <img
                className="h-32 md:h-48 w-auto"
                src={Logo}
                alt={data.site.siteMetadata.title}
              /> */}
              {data.site.siteMetadata.title}
            </h1>
            <Button to="/#" white>
              Call to action
            </Button>
          </div>
        </div>
      </div>
    )}
  />
);

export default Hero;

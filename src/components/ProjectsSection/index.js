import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ProjectSection = () => (
  <StaticQuery
    query={graphql`
      fragment projectSectionFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query projectSectionQuery {
        flindersStreetStation: file(
          relativePath: { eq: "flinders-street-station.jpg" }
        ) {
          ...projectSectionFluidImage
        }
      }
    `}
    render={data => (
      <div className="bg-green-500 flex flex-wrap-reverse mb-12 px-8 py-16 relative text-white">
        <div className="w-full lg:w-1/2">
          <Img
            className="flinder-street-station"
            fluid={data.flindersStreetStation.childImageSharp.fluid}
          />
        </div>
        <div className="flex justify-center p-4 w-full lg:w-1/2">
          <h2 className="triangle font-bold leading-none mb-16 lg:mb-0 text-5xl uppercase">
            <Link to="/projects">
              <span>Our </span>
              <br className="hidden lg:block" />
              <span>Latest </span>
              <br className="hidden lg:block" />
              <span>Projects </span>
            </Link>
          </h2>
        </div>
      </div>
    )}
  />
);

export default ProjectSection;

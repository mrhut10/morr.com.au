import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
// import Img from 'gatsby-image';
import flindersStreetStation from '../../images/flinders-street-station.jpg';

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
      <div className="bg-green-brand flex flex-wrap-reverse px-8 py-16 relative text-white">
        <div className="w-full lg:w-1/2">
          {/* <Img
            className="flinder-street-station"
            fluid={data.flindersStreetStation.childImageSharp.fluid}
          /> */}
          <img
            className="flinder-street-station"
            src={flindersStreetStation}
            alt=""
          />
        </div>
        <div className="triangle p-4 text-right lg:text-left w-full lg:w-1/2">
          <h2 className="font-bold leading-none mb-8 md:mb-0 text-5xl uppercase">
            <Link to="/projects">
              <span>Our </span>
              <br className="hidden md:block" />
              <span>Latest </span>
              <br className="hidden md:block" />
              <span>Projects </span>
            </Link>
          </h2>
        </div>
      </div>
    )}
  />
);

export default ProjectSection;

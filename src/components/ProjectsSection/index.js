import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaPlus, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

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
      <div className="bg-green-500 flex flex-wrap-reverse mb-12 px-4 sm:px-12 xl:px-24 py-16 relative text-white">
        <div className="w-full lg:w-1/2">
          <div
            className="flinder-street-station bg-black mx-auto relative shadow-xl"
            style={{ maxWidth: `480px` }}
          >
            <Img
              className="h-full opacity-75"
              fluid={data.flindersStreetStation.childImageSharp.fluid}
            />
            <div className="absolute content-between flex flex-wrap inset-0 p-4 text-xl">
              <p className="flex justify-end w-full">
                <FaPlus />
              </p>
              <p className="flex justify-between w-full">
                <FaAngleDoubleLeft />
                <FaAngleDoubleRight />
              </p>
              <h3 className="flex font-bold justify-center leading-none uppercase w-full">
                Flinders St. Value: $58m.
              </h3>
            </div>
          </div>
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

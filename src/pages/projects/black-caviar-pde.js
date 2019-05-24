import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Carousel from 'nuka-carousel';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const BlackCaviarPage = () => (
  <StaticQuery
    query={graphql`
      fragment BlackCaviarPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query BlackCaviarPageQuery {
        hero: file(relativePath: { eq: "6-35-black-caviar.jpg" }) {
          ...BlackCaviarPageFluidImage
        }
        allFile(filter: { dir: { regex: "/black-caviar/" } }) {
          edges {
            node {
              id
              childImageSharp {
                fluid(maxWidth: 5000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Black Caviar Pde" />
        <div className="relative">
          <Img
            style={{ height: `50vh`, minHeight: `22rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-end justify-center max-w-3xl mx-auto p-4">
            <div className="bg-white leading-none px-2 py-1">
              <AnchorLink offset="56" href="#black-caviar">
                <FaAngleDoubleDown className="text-green-500" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <section
          id="black-caviar"
          className="flex flex-wrap items-center max-w-1920px my-8 md:mb-16 mx-auto w-full"
        >
          <h1 className="font-bold px-4 sm:px-12 lg:pl-24 text-green-500 text-4xl uppercase w-full">
            Black Caviar Pde
          </h1>
          <div className="p-4 sm:px-12 lg:pl-24 w-full md:w-1/2">
            <div className="border-green-500 border-l-4 pl-4 text-gray-600 lg:text-xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti laborum quidem quibusdam esse consequuntur facilis,
                velit, laboriosam omnis deserunt accusamus, sunt veritatis
                provident ut natus possimus commodi totam. Animi, eveniet!
              </p>
              <p className="mt-4">
                <a
                  className="flex font-bold items-center text-green-500 uppercase"
                  href=""
                >
                  View next project{' '}
                  <FaAngleDoubleRight className="text-xs ml-1" />
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-8 p-4 sm:px-12 lg:pr-24 lg:text-xl w-full md:w-1/2">
            <div className="border-4 border-green-500 md:max-w-sm p-4">
              <p>
                <strong>Value:</strong> $58m
              </p>
              <p>
                <strong>Client:</strong> Department of Economic Development,
                Jobs, Transport and Resources Major Projects Victoria
              </p>
              <p>
                <strong>Architect:</strong> Lovell Chen
              </p>
              <p>
                <strong>Completion Date:</strong> July 2018
              </p>
            </div>
          </div>
          <div id="carousel">
            <Carousel
              renderBottomCenterControls={false}
              slidesToShow={3}
              wrapAround
            >
              {data.allFile.edges.map(edge => (
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  key={edge.node.id}
                  alt=""
                />
              ))}
            </Carousel>
          </div>
        </section>
      </Layout>
    )}
  />
);

export default BlackCaviarPage;

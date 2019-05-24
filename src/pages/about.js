import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaAngleDoubleDown } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Location from '../components/Location';

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      fragment AboutPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query AboutPageQuery {
        hero: file(relativePath: { eq: "6-35-black-caviar.jpg" }) {
          ...AboutPageFluidImage
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="About" />
        <div className="relative">
          <Img
            style={{ height: `50vh`, minHeight: `22rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-end justify-center max-w-3xl mx-auto p-4">
            <div className="bg-white leading-none px-2 py-1">
              <AnchorLink offset="56" href="#about">
                <FaAngleDoubleDown className="text-green-500" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <section
          id="about"
          className="flex flex-wrap max-w-1920px mt-8 mx-auto w-full"
        >
          <h1 className="font-bold px-4 sm:px-12 lg:px-24 text-green-500 text-4xl uppercase w-full">
            About
          </h1>
          <div className="p-4 sm:px-12 lg:px-24 mb-8 w-full">
            <div
              className="border-green-500 border-l-4 pl-4 text-gray-600"
              style={{
                columns: `320px 2`,
                columnGap: `2rem`,
              }}
            >
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                cum neque reprehenderit a possimus, officiis nisi eaque optio,
                doloribus fuga inventore unde quia quaerat delectus fugiat.
                Repudiandae, repellat. Consectetur, quidem!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, soluta. Pariatur repellendus doloremque labore, iure
                officia laborum architecto optio veniam eligendi quos quaerat
                nostrum a facilis excepturi libero doloribus error.
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center p-4 sm:px-12 lg:text-xl w-full md:w-1/2">
            <div className="border-4 border-green-500 max-w-sm p-4">
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
          </div> */}
          <div className="bg-green-500 px-4 sm:px-12 lg:px-24 py-16 relative text-white w-full">
            <span className="flex justify-end triangle" />
            <div className="max-w-xl mx-auto relative">
              <svg
                className="absolute fill-current left-0 sm:-ml-12 -mt-12 top-0 w-24"
                style={{ color: `hsla(360, 100%, 100%, .33)` }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </g>
              </svg>
              <p className="text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                maiores consequuntur expedita. Error quod delectus voluptates
                sit sed, magnam facilis nemo veniam aliquam id facere
                consequuntur sunt ipsam natus molestias?
              </p>
            </div>
          </div>
        </section>
        <Location />
      </Layout>
    )}
  />
);

export default AboutPage;

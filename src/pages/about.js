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
              <AnchorLink href="#about">
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
                // maxWidth: `320px`,
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
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                style={{ color: `hsla(360, 100%, 100%, .33)` }}
                strokeMiterlimit="1.414"
                clipRule="evenodd"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="nonzero"
                  d="M14.684 16.6c1.61 0 2.916-1.343 2.916-3 0-1.656-1.306-3-2.916-3-2.915 0-.972-5.799 2.916-5.799v-1.4C10.661 3.4 7.942 16.6 14.684 16.6zm-8.4 0c1.609 0 2.915-1.343 2.915-3 0-1.656-1.306-3-2.915-3-2.916 0-.973-5.799 2.915-5.799v-1.4C2.261 3.4-.458 16.6 6.284 16.6z"
                />
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

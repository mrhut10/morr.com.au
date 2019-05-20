import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaAngleDoubleDown, FaAngleDoubleRight } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
      fragment ProjectsPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query ProjectsPageQuery {
        hero: file(relativePath: { eq: "6-35-black-caviar.jpg" }) {
          ...ProjectsPageFluidImage
        }
        allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Projects" />
        <div className="relative">
          <Img
            style={{ height: `50vh`, minHeight: `22rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-end justify-center max-w-3xl mx-auto p-4">
            <div className="bg-white leading-none px-2 py-1">
              <AnchorLink href="#projects">
                <FaAngleDoubleDown className="text-green-500" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <section
          id="projects"
          className="flex flex-wrap max-w-1920px my-8 md:mb-16 mx-auto w-full"
        >
          <h1 className="font-bold px-4 sm:px-12 lg:px-24 text-green-500 text-4xl uppercase w-full">
            Projects
          </h1>
          <div className="p-4 sm:px-12 lg:px-24 w-full md:w-1/2">
            <div className="border-green-500 border-l-4 pl-4 text-gray-600 lg:text-xl">
              <p className="mt-4">
                <Link
                  className="flex font-bold items-center text-green-500 uppercase"
                  to="/projects/black-caviar-pde"
                >
                  Black Caviar Pde{' '}
                  <FaAngleDoubleRight className="text-xs ml-1" />
                </Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center p-4 sm:px-12 lg:text-xl w-full md:w-1/2">
            {/* <div className="border-4 border-green-500 max-w-sm p-4">
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
            </div> */}
          </div>
        </section>
      </Layout>
    )}
  />
);

export default ProjectsPage;

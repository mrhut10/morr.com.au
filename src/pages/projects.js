import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaAngleDoubleDown } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlackCaviar from '../images/black-caviar/37-black-caviar-LR-2.jpg';
import Foreshore from '../images/7b-foreshore/005.jpg';

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
              <AnchorLink offset="56" href="#projects">
                <FaAngleDoubleDown className="text-green-500" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <section
          id="projects"
          className="flex flex-col max-w-1920px my-8 md:mb-16 mx-auto w-full"
        >
          <h1 className="font-bold px-4 sm:px-12 lg:px-24 text-green-500 text-4xl uppercase w-full">
            Projects
          </h1>
          <div className="p-4 sm:px-12 lg:px-24">
            <div className="border-green-500 border-l-4 pl-4 text-gray-600 lg:text-xl">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                vitae repudiandae odit corporis voluptates ab ducimus!
                Consequuntur, unde rerum laboriosam aut possimus dolorum error?
                Quaerat fugit totam vel repellendus itaque?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between p-4 sm:px-12 lg:text-xl w-full">
            <Link className="max-w-sm w-full" to="/projects/black-caviar-pde">
              <img
                className="h-48 object-cover w-full"
                src={BlackCaviar}
                alt=""
              />
              <div className="border-4 border-green-500 px-3 py-4 text-gray-600">
                <h3 className="font-bold text-green-500 uppercase">
                  Black Caviar
                </h3>
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
                  <strong>Completion date:</strong> July 2018
                </p>
              </div>
            </Link>
            <Link className="max-w-sm w-full" to="/projects/foreshore">
              <img
                className="h-48 object-cover w-full"
                src={Foreshore}
                alt=""
              />
              <div className="border-4 border-green-500 px-3 py-4 text-gray-600">
                <h3 className="font-bold text-green-500 uppercase">
                  Foreshore
                </h3>
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
                  <strong>Completion date:</strong> July 2018
                </p>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
    )}
  />
);

export default ProjectsPage;

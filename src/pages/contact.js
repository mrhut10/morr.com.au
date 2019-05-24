import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FaAngleDoubleDown } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/Form';

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      fragment ContactPageFluidImage on File {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query ContactPageQuery {
        hero: file(relativePath: { eq: "6-35-black-caviar.jpg" }) {
          ...ContactPageFluidImage
        }
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Contact" />
        <div className="relative">
          <Img
            style={{ height: `50vh`, minHeight: `22rem` }}
            fluid={data.hero.childImageSharp.fluid}
          />
          <div className="absolute flex inset-0 items-end justify-center max-w-3xl mx-auto p-4">
            <div className="bg-white leading-none px-2 py-1">
              <AnchorLink offset="56" href="#contact">
                <FaAngleDoubleDown className="text-green-500" />
              </AnchorLink>
            </div>
          </div>
        </div>
        <section
          id="contact"
          className="flex flex-wrap max-w-1920px my-8 md:mb-16 mx-auto w-full"
        >
          <h1 className="font-bold px-4 sm:px-12 lg:px-24 text-green-500 text-4xl uppercase w-full">
            Contact
          </h1>
          <div className="p-4 sm:px-12 lg:px-24 w-full md:w-1/2">
            <div className="border-green-500 border-l-4 pl-4 text-gray-600 lg:text-xl">
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                inventore nulla quasi id perferendis modi adipisci excepturi
                consequuntur magnam, voluptatibus sapiente tempora eius libero
                autem quas nesciunt odio mollitia eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                laboriosam quibusdam explicabo est! Hic eum ab laudantium
                praesentium? Voluptas ab natus illum quod in modi alias qui
                atque! Neque, deserunt.
              </p>
              <p className="font-bold text-gray-700 hover:text-green-500">
                <a href={`tel:${data.site.siteMetadata.email}`}>
                  {data.site.siteMetadata.email}
                </a>
              </p>
            </div>
          </div>
          <div className="p-4 sm:px-12 lg:text-xl w-full md:w-1/2">
            <h2 className="font-bold mb-4 text-gray-800 uppercase">Enquiry</h2>
            <ContactForm />
          </div>
        </section>
      </Layout>
    )}
  />
);

export default ContactPage;

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Form from '../Form';

const ContactSection = () => (
  <StaticQuery
    query={graphql`
      query ContactSectionQuery {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={data => (
      <div
        id="contact"
        className="flex flex-wrap items-center max-w-1920px mx-auto w-full"
      >
        <div className="p-4 w-full md:w-1/2">
          <h2 className="font-bold text-green-500 text-4xl uppercase">
            Contact
          </h2>
          <div className="border-green-500 border-l-4 max-w-lg pl-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui at
              corrupti consectetur hic iusto voluptatem officiis. Quod quis nemo
              error corporis laboriosam! Consequuntur dolore reprehenderit nihil
              voluptates quae autem ex.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              sit enim voluptas reprehenderit veniam aut est iste expedita
              magnam incidunt quibusdam cumque iusto, cupiditate sequi quam!
              Tempore voluptatem nesciunt ad?
            </p>
            <p className="font-bold">
              Send email to{' '}
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                {data.site.siteMetadata.email}
              </a>
            </p>
          </div>
        </div>
        <div className="p-4 w-full md:w-1/2">
          <h3 className="font-bold mb-3 text-lg uppercase">Enquiry</h3>
          <Form />
        </div>
      </div>
    )}
  />
);

export default ContactSection;

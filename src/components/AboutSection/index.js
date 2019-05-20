import React from 'react';

import AboutImage from '../../images/6-35-black-caviar.jpg';

const AboutSection = () => (
  <div
    id="about"
    className="flex flex-wrap max-w-1920px my-8 md:mb-16 mx-auto w-full"
  >
    <div className="p-4 sm:px-12 lg:pl-24 w-full md:w-1/2">
      <h2 className="font-bold text-green-500 text-4xl uppercase">About</h2>
      <div className="border-green-500 border-l-4 max-w-lg pl-4 text-gray-600">
        <p>
          Morr Homes and Projects is a progressive building company based in
          Port Macquarie. Our professional team of experts specialise in
          multi-residential, commercial and custom home projects. And have over
          30 years’ experience in design and construction in the local area.
          We’re motivated by our passion to design with purpose. To build with
          pride. And deliver a personalised client experience. From concept to
          creation, we tailor our projects to meet client’s individual needs.   
        </p>
      </div>
    </div>
    <div className="relative w-full md:w-1/2">
      <img
        className="md:absolute md:h-full object-cover p-4 md:pl-0 sm:pr-12 lg:pr-24 w-full"
        src={AboutImage}
        alt=""
      />
    </div>
  </div>
);

export default AboutSection;

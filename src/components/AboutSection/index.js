import React from 'react';

const AboutSection = () => (
  <div
    id="about"
    className="flex flex-wrap items-center max-w-1920px my-8 md:mb-16 mx-auto w-full"
  >
    <div className="p-4 sm:px-12 w-full md:w-1/2">
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
    <div className="p-4 sm:px-12 w-full md:w-1/2">
      <p>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod,
        magni tenetur dolores natus at consequuntur esse cum accusantium tempore
        asperiores quae veniam aperiam id a cupiditate iure aut quibusdam. */}
      </p>
    </div>
  </div>
);

export default AboutSection;

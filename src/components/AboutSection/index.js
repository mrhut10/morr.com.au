import React from 'react';

const AboutSection = () => (
  <div
    id="about"
    className="flex flex-wrap items-center max-w-1920px my-8 md:mb-16 mx-auto w-full"
  >
    <div className="p-4 sm:px-12 w-full md:w-1/2">
      <h2 className="font-bold text-green-brand text-4xl uppercase">About</h2>
      <div className="border-green-brand border-l-4 max-w-lg pl-4 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consequatur quo cum dignissimos modi possimus sapiente praesentium
          recusandae nesciunt quisquam officia, at voluptates ducimus eos
          deleniti aperiam voluptatem suscipit dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, natus
          eum officiis dolorum enim laborum dolore tenetur nemo quidem
          laboriosam ea id itaque cupiditate saepe, ab temporibus praesentium
          inventore? Ducimus.
        </p>
      </div>
    </div>
    <div className="p-4 sm:px-12 w-full md:w-1/2">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod,
        magni tenetur dolores natus at consequuntur esse cum accusantium tempore
        asperiores quae veniam aperiam id a cupiditate iure aut quibusdam.
      </p>
    </div>
  </div>
);

export default AboutSection;

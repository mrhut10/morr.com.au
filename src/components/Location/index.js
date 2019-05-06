import React from 'react';
import LazyLoad from 'react-lazyload';

const Map = () => (
  <LazyLoad height={360}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.241838775774!2d152.89910671514846!3d-31.43500848139793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff233bdbec93%3A0xe17ce2081a3c3820!2sShop+3%2F146+Gordon+St%2C+Port+Macquarie+NSW+2444!5e0!3m2!1sen!2sau!4v1557115024048!5m2!1sen!2sau"
      className="w-full"
      height={360}
      frameBorder={0}
      style={{ border: 0 }}
      title="location"
      allowFullScreen
    />
  </LazyLoad>
);

export default Map;

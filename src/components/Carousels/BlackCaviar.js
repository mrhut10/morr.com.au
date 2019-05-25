import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Carousel from 'nuka-carousel';

export default class BlackCaviar extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    return (
      <div className="w-full" id="carousel">
        <Carousel
          heightMode="max"
          renderBottomCenterControls={null}
          slidesToShow={3}
          wrapAround
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="bg-white leading-none px-2 py-1"
              onClick={previousSlide}
              type="button"
            >
              <FaAngleDoubleLeft className="text-green-500" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="bg-white leading-none px-2 py-1"
              onClick={nextSlide}
              type="button"
            >
              <FaAngleDoubleRight className="text-green-500" />
            </button>
          )}
        >
          {data.allFile.edges.map(edge => (
            <Img
              fluid={edge.node.childImageSharp.fluid}
              key={edge.node.id}
              alt=""
            />
          ))}
        </Carousel>
      </div>
    );
  }
}

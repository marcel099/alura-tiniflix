/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 16px;
  }

  .slick-prev, .slick-next {
    ${({ categoryColor }) => categoryColor && css`
      &::before {
        color: ${categoryColor};
      }
    `}
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, color: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, color: "green" }}
//       onClick={onClick}
//     />
//   );
// }

function Slider({ categoryColor, children }) {
  return (
    <Container
      categoryColor={categoryColor}
    >
      <SlickSlider {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        swipeToSlide: true,
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

Slider.defaultProps = {
  categoryColor: 'red',
};

Slider.propTypes = {
  categoryColor: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Slider;

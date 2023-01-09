import React, { forwardRef } from "react";
import Slider from "react-slick";

const Carousel = forwardRef(({ children, ...rest }, ref) => {
  let settings = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    centerPadding: "6px",
    centerMode: true,
    className: "center",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider ref={ref} {...settings} {...rest}>
      {children}
    </Slider>
  );
});

export default Carousel;

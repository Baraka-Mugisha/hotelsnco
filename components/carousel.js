import React, { forwardRef } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";

const Carousel = forwardRef(({ children, ...rest }, ref) => {
  let settings = {
    speed: 300,
    slidesToScroll: 1,
    vertical: false,
    infinite: false,
    variableWidth: true,
    className: "center",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
    nextArrow: (
      <Icon
        icon="ph:arrow-circle-right-thin"
        color="#333"
        height={30}
        width={30}
      />
    ),
    prevArrow: (
      <Icon
        icon="ph:arrow-circle-left-thin"
        color="#333"
        height={30}
        width={30}
      />
    ),
  };
  return (
    <Slider ref={ref} {...settings} {...rest}>
      {children}
    </Slider>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;

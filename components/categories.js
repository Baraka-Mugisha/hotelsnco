import React from "react";
import Carousel from "./carousel";
import { Icon } from "@iconify/react";

const categories = [
  {
    id: 0,
    title: "National parks",
    icon: "material-symbols:pool-sharp",
  },
  {
    id: 1,
    title: "Amazing pools",
    icon: "icon-park-twotone:homestay",
  },
  {
    id: 2,
    title: "Earth homes",
    icon: "material-symbols:pool-sharp",
  },
  {
    id: 3,
    title: "Lakefront",
    icon: "icon-park-twotone:homestay",
  },
];
const Categories = () => {

  const carouselRef = React.useRef()
  return (
    <div>
      <Carousel ref={carouselRef}>
        {categories.map((category, i) => (
          <div style={{ width: "100px", height: "100px" }}>
            <Icon icon={category.icon} width={30} height={30} />
            <span>{category.title}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;

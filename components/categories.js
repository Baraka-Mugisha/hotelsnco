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
];
const Categories = ({ changeCategory }) => {
  const carouselRef = React.useRef();
  const [activeCategory, setCategory] = React.useState();

  return (
    <div className=" flex flex-row px-14 w-100 justify-between items-center">
      <div className="w-90 w-10/12">
        <Carousel
          ref={carouselRef}
          nextArrow={
            <div>
              <Icon
                icon="ph:arrow-circle-right-thin"
                color="#333"
                height={30}
                width={30}
              />
            </div>
          }
          prevArrow={
            <div>
              <Icon
                icon="ph:arrow-circle-left-thin"
                color="#333"
                height={30}
                width={30}
              />
            </div>
          }
        >
          {categories.map((category, i) => (
            <div className="px-2" key={i}>
              <div
                className={`text-center cursor-pointer border-b-2 ${
                  (activeCategory === i && "border-black ") ||
                  "text-neutral-500"
                }  pb-2`}
                onClick={() => setCategory(i)}
              >
                <Icon
                  icon={category.icon}
                  width={30}
                  height={30}
                  className="mx-auto mt-2 text-inherit"
                />
                <span className="text-xs">{category.title}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="account-container flex gap-x-1 border border-slate-200 rounded-xl h-fit items-center cursor-pointer p-2 hover:shadow hover:transition-shadow">
        <Icon icon="mi:filter" height={20} width={20} color="#666" />
        <span className="w-fit">Filters</span>
      </div>
    </div>
  );
};

export default Categories;

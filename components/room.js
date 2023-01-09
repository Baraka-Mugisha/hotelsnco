import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const room = {
  title: "Tulbagh",
  location: "South Africa",
  pricePerNight: 164,
  currency: "$",
  availability: "Jan 20 - 54",
  rating: 4.32,
  image:
    "https://a0.muscache.com/im/pictures/da2d506f-91a0-4dc6-867d-aa0bd10f32be.jpg?im_w=720",
};

const Room = () => {
  return (
    <div className="text-sm">
      <div className="relative">
        <Image
          src={room.image}
          alt={room.title}
          width={290}
          height={350}
          className="rounded-xl"
        />
        <Icon
          className="absolute top-3 right-4 cursor-pointer"
          icon="icon-park-twotone:like"
          width={25}
          height={25}
          color="white"
        />
      </div>

      <div className="font-medium mt-1">
        <span>{room.title}</span>
        <span>, {room.location}</span>
        <div className="inline float-right flex items-center">
          <Icon className="inline" icon="material-symbols:star" width={12} />
          <span className="inline">{room.rating}</span>
        </div>
      </div>
      <h5 className="text-gray-500">3666 kilometres away</h5>
      <h5 className="text-gray-500">{room.availability}</h5>
      <h5 className="font-medium">${room.pricePerNight} per night</h5>
    </div>
  );
};

export default Room;

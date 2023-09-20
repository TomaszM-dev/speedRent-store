"use client";
import { Divide, SlidersHorizontal, Star, Stars } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useMediaQuery } from "react-responsive";

const products = [
  {
    type: "sedan",
    power: 230,
    brand: "bmw",
    price: 32,
    rate: 3.45,
    image: "images/carSlider/car02.svg",
  },
  {
    type: "sedan",
    power: 180,
    brand: "mercedes",
    price: 23,
    rate: 4.45,
    image: "images/carSlider/car03.svg",
  },
  {
    type: "sedan",
    power: 230,
    brand: "bmw",
    price: 32,
    rate: 3.45,
    image: "images/carSlider/car01.svg",
  },
  {
    type: "sedan",
    power: 230,
    brand: "bmw",
    price: 32,
    rate: 3.45,
    image: "images/carSlider/car02.svg",
  },
  {
    type: "sedan",
    power: 230,
    brand: "bmw",
    price: 32,
    rate: 3.45,
    image: "images/carSlider/car02.svg",
  },
  {
    type: "sedan",
    power: 230,
    brand: "bmw",
    price: 32,
    rate: 3.45,
    image: "images/carSlider/car02.svg",
  },
];

const ProductSlider = () => {
  const desktopMode = useMediaQuery({
    query: "(min-width: 800px)",
  });

  return (
    <div className="container mx-auto  ">
      <Swiper
        spaceBetween={20}
        slidesPerView={desktopMode ? 3 : 1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="max-w-[385px] border-[1px] rounded-md space-y-1 mx-auto
               flex flex-col justify-center "
              >
                <Image
                  src={car.image}
                  width={380}
                  height={284}
                  alt=""
                  className="p-2"
                />
                <div className="px-4 pb-4">
                  <div className="flex flex-col ">
                    <div className="text-[1rem] text-secondary uppercase flex justify-between">
                      <span>{car.type}</span>
                      <div className="flex">
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                        <Star className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-[1.3rem] font-bold uppercase">
                      {car.brand}
                    </h3>
                    <h3 className="uppercase text-accent font-semibold">
                      ${car.price}/day
                    </h3>
                  </div>
                  <button className="bg-accent text-white rounded-md px-5 py-3 w-full mt-10 uppercase font-semibold">
                    See details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

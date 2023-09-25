"use client";
import { Divide, SlidersHorizontal, Star, Stars } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useMediaQuery } from "react-responsive";
import { Product } from "@/types";
import ProductCart from "../product-card";
import ProductCard from "../product-card";

// const products = [
//   {
//     type: "sedan",
//     power: 230,
//     brand: "bmw",
//     price: 32,
//     rate: 3.45,
//     image: "images/carSlider/car02.svg",
//   },
//   {
//     type: "sedan",
//     power: 180,
//     brand: "mercedes",
//     price: 23,
//     rate: 4.45,
//     image: "images/carSlider/car03.svg",
//   },
//   {
//     type: "sedan",
//     power: 230,
//     brand: "bmw",
//     price: 32,
//     rate: 3.45,
//     image: "images/carSlider/car01.svg",
//   },
//   {
//     type: "sedan",
//     power: 230,
//     brand: "bmw",
//     price: 32,
//     rate: 3.45,
//     image: "images/carSlider/car02.svg",
//   },
//   {
//     type: "sedan",
//     power: 230,
//     brand: "bmw",
//     price: 32,
//     rate: 3.45,
//     image: "images/carSlider/car02.svg",
//   },
//   {
//     type: "sedan",
//     power: 230,
//     brand: "bmw",
//     price: 32,
//     rate: 3.45,
//     image: "images/carSlider/car02.svg",
//   },
// ];

interface ProductsProps {
  products: Product[];
}

const ProductSlider = ({ products }: ProductsProps) => {
  const desktopMode = useMediaQuery({
    query: "(min-width: 800px)",
  });

  console.log(products);
  return (
    <div className="container mx-auto  ">
      <Swiper
        // @ts-ignore
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
              <ProductCard car={car} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

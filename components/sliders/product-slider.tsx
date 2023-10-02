"use client";

// react next
import Image from "next/image";
import React from "react";

// responsiveness
import { useMediaQuery } from "react-responsive";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// component
import ProductCard from "../product-card";

// types
import { Product } from "@/types";

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

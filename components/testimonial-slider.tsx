import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experiecne a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experiecne a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
];

const TestimonialSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-4 max-sm:mt-20">
                <FaQuoteLeft className="text-6xl text-accent mb-6" />
                <div className="text-[2.4rem] leading-10 w-[76%] max-sm:w-[88%] text-center max-sm:text-[1.3rem]">
                  {person.message}
                </div>
                <Image
                  src={person.avatar}
                  alt=""
                  width={64}
                  height={64}
                  className="mt-6"
                />
                <div className="text-lg font-bold">{person.name}</div>
                <div className="text-secondary">{person.job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;

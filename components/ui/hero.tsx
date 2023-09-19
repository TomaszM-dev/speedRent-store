"use client";
import Image from "next/image";
import React, { useContext } from "react";

import Search from "./search-modal";
import { SearchContext } from "@/context/search";

import hero from "public/images/hero/car.svg";
import appStore from "public/icons/buttons/app-store.svg";
import googlePlay from "public/icons/buttons/google-play.svg";

import { fadeIn } from "@/animations/animations";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const Hero = () => {
  // @ts-ignore
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 " id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex items-center justify-center h-full max-xl:flex-col max-xl:pt-28  gap-10">
          <div className=" mt-16 xl:mt-0 flex-1  max-xl:text-center max-xl:pt-20 flex flex-col max-sm:gap-3">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1 "
            >
              Explore our Amazing <span className="text-accent">rental </span>
              offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-xl:w-[70%] max-xl:mx-auto max-md:w-[100%] "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ut ratione voluptatum, aliquam dolores tenetur iure sint soluta
              voluptates molestiae!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-3 mt-10 max-xl:justify-center "
            >
              <button className="btn-cta">
                <Image src={appStore} alt=""></Image>
              </button>
              <button className="btn-cta">
                <Image src={googlePlay} alt=""></Image>
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 max-xl:w-[40rem] max-md:w-[35rem] max-sm:w-[28rem]"
          >
            <Image src={hero} alt="" className="aspect-square object-fill" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className="fixed top-[80px] z-10 w-full max-w-[1920px]"
          >
            <Search />
          </motion.div>
        ) : (
          <div className="-mt-12 w-full mx-auto max-w-[1300px]">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit="hidden"
              viewport={{ once: false, amount: 0.6 }}
            >
              <Search />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

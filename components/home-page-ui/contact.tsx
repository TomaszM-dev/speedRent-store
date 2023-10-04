"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

import appStore from "public/icons/buttons/app-store.svg";
import googlePlay from "public/icons/buttons/google-play.svg";
import mobile from "public/images/cta/phone.png";

const Contact = () => {
  return (
    <section className=" bg-gray-50 pt-48 flex items-center " id="contact">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex items-center justify-center h-full max-xl:flex-col max-xl:pt-28  gap-10">
          <div className=" mt-16 xl:mt-0 flex-1  max-xl:text-center max-xl:pt-20 flex flex-col max-sm:gap-3  ml-10 max-md:ml-0">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-[2.3rem] leading-[2.5rem] font-semibold  mb-6"
            >
              Download our App now and
              <span className="text-accent"> hit the road </span>
              with ease
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-xl:w-[70%] text-[1.2rem] max-xl:mx-auto max-md:w-[100%] "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ut ratione voluptatum, aliquam dolores tenetur iure sint soluta
              voluptates molestiae!
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
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
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 max-xl:w-[40rem] max-md:w-[35rem] max-sm:w-[28rem]"
          >
            <Image
              src={mobile}
              alt=""
              width={500}
              height={500}
              className="w-[20rem]  mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

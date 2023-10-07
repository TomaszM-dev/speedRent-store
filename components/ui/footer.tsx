"use client";

// react next
import React from "react";
import Image from "next/image";

// icons
import { FaPhone, FaEnvelope } from "react-icons/fa6";

// animations
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

const Footer = () => {
  return (
    <footer className=" my-16 z-20 ">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container flex items-center justify-between gap-1 px-1 max-lg:flex-col max-lg:gap-10 "
      >
        <div className="flex max-sm:flex-col  max-sm:justify-center max-sm:items-center  max-sm:gap-14">
          <div className="flex flex-col  max-lg:mr-14 max-sm:mr-0  gap-2  max-sm:items-center  ">
            <h3 className="text-[1.8rem] font-semibold w-fit  ">
              Speed<span className="text-accent">Rental</span>
            </h3>
            <p className="w-[70%] mb-4 max-sm:w-[90%] max-sm:text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="flex items-center gap-3">
              <FaPhone /> +47 532-232-345
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> speedRental@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 mr-28 max-lg:mr-0">
            <h3 className="text-[1.4rem] font-semibold  ">Company</h3>
            <p className="font-semibold">Krakow</p>
            <p className="font-semibold">Warszawa</p>
            <p className="font-semibold">Lisbona</p>
            <p className="font-semibold">New York</p>
          </div>
        </div>
        <div className="flex max-sm:flex-col  max-sm:justify-center max-sm:items-center  max-sm:gap-10 ">
          <div className="flex flex-col justify-center gap-3 pr-20 max-sm:items-center  max-lg:pr-0  max-lg:flex-1 max-lg:ml-20 max-sm:ml-0">
            <h3 className="text-[1.4rem] font-semibold   ">Working Hours</h3>
            <p>
              Mon-Fri:{" "}
              <span className="ml-2 font-semibold">09:00AM - 09:00PM</span>
            </p>
            <p>
              Sat: <span className="ml-2 font-semibold">09:00AM - 07:00PM</span>
            </p>
            <p>
              Sun: <span className="ml-2 font-semibold">Closed</span>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 max-lg:items-center max-lg:w-[60%] ">
            <h3 className="text-[1.4rem] font-semibold text-center">
              NewsLetter
            </h3>
            <p className="text-center  max-lg:w-[70%]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex">
              <form>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="shadow-sm shadow-black rounded-lg px-4 mt-4 border-accent py-2 mr-2 max-sm:w-full"
                ></input>
                <button className="max-sm:w-full mt-2 bg-accent text-white uppercase px-5 py-2 font-bold rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

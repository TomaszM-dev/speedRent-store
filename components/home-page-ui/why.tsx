"use client";
import Image from "next/image";
import React from "react";
import whycar from "public/images/why/motocycle.png";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

const Why = () => {
  return (
    <section className="section flex items-center " id="why">
      <div className="container flex flex-col gap-3">
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="text-[2rem] text-center font-bold"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="text-secondary w-[60%] mx-auto text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam
          aperiam aut voluptatum ad sit voluptates quis vitae? Qui, doloremque!
          Lorem ipsum dolor sit . Vero, tenetur?
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
        >
          <Image
            alt=""
            width={550}
            height={500}
            src={whycar}
            className=" mx-auto max-md:w-[95%] max-md:my-10 my-5"
          />
        </motion.div>
        <div className="flex items-center gap-14 mt-5 max-md:flex-col max-md:text-center max-md:w-[80%] max-md:mx-auto">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col gap-2 items-center"
          >
            <MdHandshake className="text-4xl text-accent " />
            <h3 className="text-[1.3rem] font-semibold ">
              Rent simply and quickly
            </h3>
            <p className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati aut quo placeat facilis doloremque recusandae
              hic corporis vero libero?
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col gap-2 items-center"
          >
            <MdKey className="text-4xl text-accent " />
            <h3 className="text-[1.3rem] font-semibold">
              Rent simply and quickly
            </h3>
            <p className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati aut quo placeat facilis doloremque recusandae
              hic corporis vero libero?
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col gap-2 items-center"
          >
            <MdTrendingUp className="text-4xl text-accent " />
            <h3 className="text-[1.3rem] font-semibold">
              Rent simply and quickly
            </h3>
            <p className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates obcaecati aut quo placeat facilis doloremque recusandae
              hic corporis vero libero?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;

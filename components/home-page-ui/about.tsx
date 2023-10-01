"use client";
import Image from "next/image";
import React from "react";
import carAbout from "/public/images/about/scooter1.png";
import {
  MdOutdoorGrill,
  MdOutlineBuildCircle,
  MdOutlineDirections,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section flex items-center " id="about" ref={ref}>
      <div className="container flex max-lg:flex-col justify-center ">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1"
        >
          <Image
            src={carAbout}
            alt=""
            className="max-lg:w-[70%] max-lg:mx-auto max-sm:w-[90%]"
          />
        </motion.div>
        <div className="flex flex-col gap-4 flex-1 w-full  ml-28 max-lg:ml-0 max-lg:items-center max-lg:mt-10">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-[2.2rem] font-semibold  max-sm:text-center"
          >
            Vehicle services simplified.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="w-[80%] max-lg:text-center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            quaerat? Accusantium, ut soluta corporis perferendis minima eligendi
            dolores reprehenderit laudantium.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="flex gap-20"
          >
            <div className="flex flex-col gap-2 mt-6 items-center">
              <MdOutlineDirectionsCar className="text-5xl text-accent" />
              <div className="text-2xl font-bold">
                {inView ? (
                  <CountUp start={0} end={50} duration={3} delay={0.2} />
                ) : (
                  ""
                )}
                +
              </div>
              <p className="text-center uppercase font-semibold text-[0.9rem] leading-tight">
                Vehicle <br></br> Types
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-6 items-center">
              <MdOutlineMapsHomeWork className="text-5xl text-accent" />
              <div className="text-2xl font-bold">
                {inView ? (
                  <CountUp start={0} end={83} duration={3} delay={0.2} />
                ) : (
                  ""
                )}
                +
              </div>
              <p className="text-center uppercase font-semibold text-[0.9rem] leading-tight">
                rental <br></br> outlets
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-6 items-center">
              <MdOutlineBuildCircle className="text-5xl text-accent" />
              <div className="text-2xl font-bold">
                {inView ? (
                  <CountUp start={0} end={34} duration={3} delay={0.2} />
                ) : (
                  ""
                )}
                +
              </div>
              <p className=" uppercase font-semibold text-[0.9rem] leading-tight text-center">
                Quick <br></br> fixes
              </p>
            </div>
          </motion.div>
          <motion.button
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            className="mt-8 font-bold bg-accent text-white uppercase w-fit px-8 py-4 rounded-md "
          >
            See our full offer
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;

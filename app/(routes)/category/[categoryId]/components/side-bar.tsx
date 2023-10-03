"use client";
import React from "react";
import Filter from "./filter";
import ResetFilter from "./reset-filter";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";
import { Brand, Location, Type } from "@/types";

interface SideBarProps {
  categoryId: string;
  types: Type[];
  brands: Brand[];
  locations: Location[];
}

const SideBar = ({ categoryId, types, brands, locations }: SideBarProps) => {
  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className=" max-xl:hidden flex-[25%] max-md:flex-[45%] border-[1px] bg-white px-6 py-6 flex flex-col "
      >
        <ResetFilter categoryId={categoryId} />
        <div className="flex flex-col mt-8 gap-4">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Filter valueKey="typeId" name="Types" data={types} />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Filter valueKey="brandId" name="Brands" data={brands} />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Filter valueKey="locationId" name="Locations" data={locations} />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;

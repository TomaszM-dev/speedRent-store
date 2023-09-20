"use client";
import React from "react";
import BrandsImages from "../brands";
import ProductSlider from "../product-slider";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

const Products = () => {
  return (
    <section className="section  flex items-center w-full " id="products">
      <motion.div className="container  mx-auto flex flex-col gap-20 ">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
        >
          <BrandsImages />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <ProductSlider />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;

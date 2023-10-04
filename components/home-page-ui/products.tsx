"use client";
import React from "react";
import BrandsImages from "./brands";
import ProductSlider from "../sliders/product-slider";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";
import { Product } from "@/types";
import RenderProducts from "@/app/(routes)/category/[categoryId]/components/render-products";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products, brands, locations, types }: ProductsProps) => {
  return (
    <section className="section  flex items-center w-full " id="products">
      <motion.div className="container  mx-auto flex flex-col gap-20 max-sm:gap-10 ">
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
          <RenderProducts
            products={products}
            types={types}
            brands={brands}
            locations={locations}
          />
          <ProductSlider products={products} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;

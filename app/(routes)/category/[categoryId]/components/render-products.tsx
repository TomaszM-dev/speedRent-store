"use client";
import ProductCard from "@/components/product-card";
import NoResults from "@/components/ui/no-results";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, scale } from "@/animations/animations";

const RenderProducts = ({ products, categoryId }) => {
  return (
    <div className="flex-[75%] grid grid-cols-2 xxl:grid-cols-3 max-md:grid-cols-1 gap-4 h-fit w-full relative ">
      <AnimatePresence>
        {products.length === 0 && (
          <motion.div
            className="absolute left-[50%]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <NoResults categoryId={categoryId} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            variants={scale(0.2 * index)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <ProductCard car={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RenderProducts;

"use client";

// react next
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// components
import ProductCard from "@/components/product-card";
import NoResults from "@/components/ui/no-results";
import Filter from "./filter";

// animation
import { fadeIn, menuVars, scale, widthUp } from "@/animations/animations";
import { AnimatePresence, motion } from "framer-motion";

// icons
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import ResetFilter from "./reset-filter";

// types
import { Brand, Location, Product, Type } from "@/types";

interface RenderProductsProps {
  products: Product[];
  categoryId: string;
  types: Type[];
  brands: Brand[];
  locations: Location[];
}

const RenderProducts = ({
  products,
  categoryId,
  types,
  brands,
  locations,
}: RenderProductsProps) => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="flex-[75%] grid grid-cols-2 xxl:grid-cols-3 max-md:grid-cols-1 gap-4 h-fit w-full relative  ">
      <AnimatePresence>
        {products.length === 0 && (
          <motion.div
            className=" left-[-50%] w-full h-[40rem]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <motion.div className="">
              <NoResults categoryId={categoryId} />
            </motion.div>
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
      <BiFilterAlt
        onClick={() => setOpenFilter(!openFilter)}
        className="xl:hidden absolute top-[-2.4rem] right-4 text-[1.9rem] cursor-pointer"
      ></BiFilterAlt>
      <AnimatePresence>
        {openFilter && (
          <motion.div
            variants={menuVars}
            initial="initial"
            whileInView={"animate"}
            exit="exit"
            viewport={{ once: false, amount: 0.6 }}
            className="bottom-0 left-0 w-screen gap-5 h-[50%] shadow-lg fixed bg-white z-20 origin-bottom p-10  flex flex-col max-lg:h-[100%] overflow-scroll"
          >
            <AiOutlineClose
              className="  text-[2.2rem] max-lg:text-[1.8rem]   cursor-pointer "
              onClick={() => setOpenFilter(!openFilter)}
            />
            <div className="flex w-full justify-between items-center mt-3 ">
              <h1></h1>
              <ResetFilter
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
                categoryId={categoryId}
              />
            </div>
            <div className="flex  justify-between max-lg:gap-0  gap-20 max-lg:flex-col ">
              <motion.div
                className="w-full"
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Filter
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                  valueKey="typeId"
                  name="Types"
                  data={types}
                />
              </motion.div>
              <motion.div
                className="w-full"
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Filter
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                  valueKey="brandId"
                  name="Brands"
                  data={brands}
                />
              </motion.div>
              <motion.div
                className="w-full"
                variants={fadeIn("right", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.6 }}
              >
                <Filter
                  openFilter={openFilter}
                  setOpenFilter={setOpenFilter}
                  valueKey="locationId"
                  name="Locations"
                  data={locations}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RenderProducts;

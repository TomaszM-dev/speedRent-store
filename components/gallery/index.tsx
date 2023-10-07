"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse mt-[-4rem] ">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none max-lg:mb-20 ">
        <Tab.List className="grid grid-cols-4 gap-6 ">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className=" aspect-square w-full h-full relative max-lg:aspect-auto mt-[-3rem]">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="aspect-square  max-lg:w-[50rem] max-lg:h-[20rem] max-sm:w-[20rem]  max-md:w-[30rem]   sm:rounded-lg overflow-hidden"
            >
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-contain overflow-hidden max-sm:object-scale-down   scale-125 "
              />
            </motion.div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;

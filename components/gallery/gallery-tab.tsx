"use client";
import NextImage from "next/image";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Image } from "@/types";
import { fadeIn, scale } from "@/animations/animations";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <motion.div>
          <motion.span
            variants={scale(0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md"
          >
            <NextImage
              fill
              src={image.url}
              alt=""
              className=" object-contain scale-150"
            />
          </motion.span>
          <motion.span
            variants={scale(0.3)}
            initial="hidden"
            whileInView={"show"}
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </motion.div>
      )}
    </Tab>
  );
};

export default GalleryTab;

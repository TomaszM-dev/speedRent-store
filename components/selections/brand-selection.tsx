"use client";
import { useFetch } from "@/hooks/use-fetch";
import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { FaMapMarkedAlt, FaMapMarker } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";

interface BrandSelectionProps {
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
}

const BrandSelection = ({ brand, setBrand }: BrandSelectionProps) => {
  const data = useFetch();

  return (
    <Menu as="div" className="flex items-center  justify-center  w-full">
      <div className="relative flex-1 ">
        <Menu.Button className="dropdown-menu w-full  h-full flex flex-col  ">
          <div className="flex gap-2 items-center">
            <MdBrandingWatermark className="text-accent text-[1.1rem]" />
            <div className="uppercase font-bold text-[1.1rem] ">
              Select Brand
            </div>
          </div>
          <div className=" ml-6 text-secondary">{brand}</div>
        </Menu.Button>

        <Menu.Items className=" text-center w-[20rem]  rounded-lg   dropdown-menu shadow-xl absolute top-[5.5rem] bg-white left-[50%] translate-x-[-50%] ">
          {data.brands.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setBrand(item.name);
              }}
              className="py-4 text-secondary  hover:bg-gray-50 font-semibold"
            >
              {item.name}
            </div>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default BrandSelection;

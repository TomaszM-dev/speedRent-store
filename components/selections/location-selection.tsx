"use client";
import React, { useState } from "react";

import { useFetch } from "@/hooks/use-fetch";
import { Menu } from "@headlessui/react";

import { FaMapMarker } from "react-icons/fa";

interface LocationSelectionProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const LocationSelection = ({
  location,
  setLocation,
}: LocationSelectionProps) => {
  const data = useFetch();

  return (
    <Menu as="div" className="flex items-center  justify-center  w-full mr-20">
      <div className="relative flex-1 ">
        <Menu.Button className="dropdown-menu w-full  h-full flex flex-col  ">
          <div className="flex gap-2 items-center">
            <FaMapMarker className="text-accent text-[1.1rem]" />
            <div className="uppercase font-bold text-[1.1rem]">
              Select Location
            </div>
          </div>
          <div className=" text-secondary ml-6">{location}</div>
        </Menu.Button>
        <Menu.Items className=" text-center w-[20rem]  rounded-lg   dropdown-menu shadow-xl absolute top-[5.5rem] bg-white left-[50%] translate-x-[-50%] ">
          {data.locations.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setLocation(item.name);
              }}
              className="py-4 text-secondary hover:bg-gray-50 font-semibold"
            >
              {item.name}
            </div>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default LocationSelection;

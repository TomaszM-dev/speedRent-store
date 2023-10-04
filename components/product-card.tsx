"use client";

// next react
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// icons
import { Star } from "lucide-react";

// types
import { Product } from "@/types";

interface ProductCardProps {
  car: Product;
}

const ProductCard = ({ car }: ProductCardProps) => {
  const router = useRouter();

  // open product witch was clicked
  const handleClick = () => {
    router.push(`/product/${car.id}`);
  };
  const starRate = Number(car.rate.value);
  const starRateArray = Array.from({ length: starRate }, () => <Star />);

  return (
    <div
      className="w-full border-[1px] rounded-md space-y-1 mx-auto
 flex flex-col justify-center bg-white"
    >
      <Image
        src={car.images?.[0]?.url}
        width={380}
        height={284}
        alt=""
        className="p-2 pb-6 self-center"
      />
      <div className="px-4 pb-2 ">
        <div className="flex flex-col ">
          <div className="text-[1rem] text-secondary uppercase flex justify-between">
            <span>{car.type.name}</span>
            <div className="flex text-accent ">{starRateArray}</div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-[1.3rem] font-bold uppercase">{car.name}</h3>
              <h3 className="uppercase text-accent font-semibold">
                ${car.price}/day
              </h3>
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-accent text-white rounded-md px-5 py-3 w-full mt-5  mb-2 uppercase font-semibold"
        >
          See details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

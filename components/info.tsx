"use client";
import { Product } from "@/types";

// import useCart from "@/use-cart";
import { ShoppingCart, Star } from "lucide-react";
import React, { MouseEventHandler, useState } from "react";
import DateSelection from "./selections/date-selection";
import Button from "./ui/button";
import Currency from "./ui/currency";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  // const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    // cart.addItem(data);
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      total: 1,
    },
  ]);

  const days = (date1, date2) => {
    let difference = date1.getTime() - date2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const totalDays = Number(days(date[0].endDate, date[0].startDate)) + 1;
  console.log(totalDays);

  const starRate = Number(data.rate.value);
  const starRateArray = Array.from({ length: starRate }, () => <Star />);

  return (
    <div className=" font-bold text-gray-500 text-[1.2rem]">
      <h1 className="text-4xl text-black">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
        <hr className="my-4" />
        <div className="flex flex-col gap-y-6">
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Type:</h3>
            <div>{data?.type?.name}</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Power:</h3>
            <div>{data?.power?.value} HP</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Brand:</h3>
            <div>{data?.brand?.name}</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Pick up Location:</h3>
            <div>{data?.location?.name}</div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Rate:</h3>
            <div className="flex text-accent ">{starRateArray}</div>
          </div>
        </div>
      </div>
      <DateSelection date={date} setDate={setDate} />

      <div className="mt-10 flex items-center   gap-x-3">
        <Button
          onClick={onAddToCart}
          className="bg-accent flex items-center gap-x-2"
        >
          <ShoppingCart size={20} />
          Add To Cart |{" "}
          <span className="font-bold">
            Your Total Price: {Number(data.price) * totalDays}$
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Info;

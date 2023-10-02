"use client";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { format } from "date-fns/esm";

// import useCart from "@/use-cart";
import { ShoppingCart, Star } from "lucide-react";
import React, { MouseEventHandler, useState } from "react";
import { isTemplateSpan } from "typescript";
import DateSelection from "./selections/date-selection";
import Button from "./ui/button";
import Currency from "./ui/currency";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/animations";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data, totalDays, formattedDates);
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      total: 1,
    },
  ]);

  const formattedDates = {
    startDate: format(date[0].startDate, "dd/MM/yyy"),
    endDate: format(date[0].endDate, "dd/MM/yyy"),
  };

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
    <div className=" font-bold text-gray-500 text-[1.2rem] ">
      <motion.h1
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-4xl text-black"
      >
        {data.name}
      </motion.h1>
      <div className="mt-3 items-end justify-between">
        <motion.p
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-2xl text-gray-900"
        >
          <Currency value={data?.price} />
        </motion.p>
        <hr className="my-4" />
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col gap-y-6"
        >
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
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      >
        <DateSelection date={date} setDate={setDate} />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mt-10 flex items-center   gap-x-3"
      >
        <Button
          onClick={onAddToCart}
          className="bg-accent flex max-sm:items-start items-center gap-x-2 max-sm:flex-col max-sm:w-full max-sm: max-sm:bg-transparent max-sm:gap-6"
        >
          <div className="px-4 py-3 bg-accent flex rounded-lg gap-3 items-center ">
            <ShoppingCart size={20} />
            <span>Add To Cart | </span>
          </div>
          <span className="font-bold max-sm:text-black">
            Your Total Price: {Number(data.price) * totalDays}$
          </span>
        </Button>
      </motion.div>
    </div>
  );
};

export default Info;

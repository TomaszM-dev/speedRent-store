"use client";

// zustand
import { useFetch } from "@/hooks/use-fetch";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { MdBrandingWatermark } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

// date
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DateSelectionProps {
  date: any;
  setDate: any;
}

const DateSelection = ({ date, setDate }: DateSelectionProps) => {
  // @ts-ignore
  const handleChange = (item) => {
    setDate([item.selection]);
  };

  return (
    <Menu as="div" className="flex  items-center  justify-center  w-full">
      <div className="relative flex-1  mt-10 flex flex-col  gap-10">
        <Menu.Button className=" w-full  h-full flex flex-col   ">
          <div className="flex gap-2 items-center ">
            <MdBrandingWatermark className="text-accent text-[1.1rem]" />
            <div className="text-black uppercase font-bold text-[1.1rem] ">
              Select Date
            </div>
          </div>
          <div className=" ml-6 text-secondary font-semibold text-[1.1rem] flex gap-4 items-center">
            <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
            <FaArrowRightLong className="text-accent" />
            <div>
              {date[0].endDate ? (
                <div>{format(date[0].endDate, "dd/MM/yyy")}</div>
              ) : (
                <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
              )}
            </div>
          </div>
        </Menu.Button>

        <Menu.Items className=" absolute top-[4rem] text-center w-[20rem]  rounded-lg  z-10  shadow-xl   bg-white  flex  items-center justify-start  ">
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
            onChange={handleChange}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSelection;

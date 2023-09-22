import Link from "next/link";
import React from "react";

const DropDownMenu = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="absolute  w-full h-screen top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" absolute bg-white font-semibold  shadow-md rounded-md top-16 mx-4  right-[4.2rem] text-start"
      >
        <ul className="flex flex-col gap-1  ">
          <Link href="/category">
            <li className="px-12 border-b-[1px] hover:bg-slate-50  w-full h-full py-3 cursor-pointer">
              Cars
            </li>
          </Link>
          <li className="px-12 py-3 hover:bg-slate-50  cursor-pointer">
            Skooters
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;

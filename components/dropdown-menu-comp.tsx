import getCategories from "@/actions/get-categories";
import React from "react";
import DropDownMenu from "./dropdown-menu";

const DropdownMenuComp = ({ setOpen, open, categories }) => {
  return (
    <div>
      <p
        onClick={() => setOpen(!open)}
        className="max-xl:hidden  text-[1.14rem] font-semibold text-primary cursor-pointer"
      >
        Explore Collection |
      </p>
      {open && (
        <DropDownMenu setOpen={setOpen} open={open} categories={categories} />
      )}
    </div>
  );
};

export default DropdownMenuComp;

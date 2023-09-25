import getCategories from "@/actions/get-categories";
import { Category } from "@/types";
import React from "react";
import DropDownMenu from "./dropdown-menu";

interface DropDownMenu {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[];
  open: boolean;
}

const DropdownMenuComp = ({ setOpen, open, categories }: DropDownMenu) => {
  return (
    <div>
      <p
        onClick={() => setOpen(!open)}
        className="max-xl:hidden  text-[1.14rem] font-semibold text-primary cursor-pointer"
      >
        Explore Collection |
      </p>
      {open && <DropDownMenu setOpen={setOpen} categories={categories} />}
    </div>
  );
};

export default DropdownMenuComp;

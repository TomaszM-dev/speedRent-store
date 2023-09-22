import React from "react";
import DropDownMenu from "./dropdown-menu";

const DropdownMenuComp = ({ setOpen, open }) => {
  return (
    <div>
      <p
        onClick={() => setOpen(!open)}
        className="max-xl:hidden  text-[1.14rem] font-semibold text-primary cursor-pointer"
      >
        Explore Collection |
      </p>
      {open && <DropDownMenu setOpen={setOpen} open={open} />}
    </div>
  );
};

export default DropdownMenuComp;

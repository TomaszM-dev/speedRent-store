import getCategories from "@/actions/get-categories";
import React from "react";
import Header from "../header";

const Navbar = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <Header categories={categories} />
    </div>
  );
};

export default Navbar;

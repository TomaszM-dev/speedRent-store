import getCategories from "@/actions/get-categories";
import React from "react";
import HomeNav from "./home-nav";

const Navbar = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      <HomeNav categories={categories} />
    </div>
  );
};

export default Navbar;

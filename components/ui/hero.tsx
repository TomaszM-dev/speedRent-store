"use client";
import { SearchContext } from "@/context/search";
import React, { useContext } from "react";
import Search from "./search-modal";

const Hero = () => {
  // @ts-ignore
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2] " id="home">
      <div className="container mx-auto h-full xl:pt-10"> hero container</div>

      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
};

export default Hero;

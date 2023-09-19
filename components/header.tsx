"use client";

import React from "react";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-scroll";

import { useMediaQuery } from "react-responsive";

import { motion, AnimatePresence } from "framer-motion";
import { BiBasket, BiMenuAltRight, BiSolidBasket, BiX } from "react-icons/bi";

import { SearchContext } from "@/context/search";

// header component

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  // @ts-ignore
  const { setSearchActive } = useContext(SearchContext);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  // links
  const linkData = [
    {
      name: "Home",

      to: "home",
      activeClass: "active",
      spy: true,
    },

    {
      name: "Products",

      to: "products",
      activeClass: "active",
      spy: true,
    },
    {
      name: "About",

      to: "about",
      activeClass: "active",
      spy: true,
    },
    {
      name: "Why us",

      to: "why",
      activeClass: "active",
      spy: true,
    },
    {
      name: "Testimonials",

      to: "testimonials",
      activeClass: "active",
      spy: true,
    },
    {
      name: "Contact",

      to: "contact",
      activeClass: "active",
      spy: true,
    },
    {
      name: "",

      to: "contact",
      activeClass: "active",
      spy: true,
    },
  ];

  // adding background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? " bg-white shadow-md py-2" : "bg-transparent shadow-none py-"
      } fixed w-full max-w-[1900px] py-6 mx-auto px-10 z-20 transition-all duration-300 text-[1.1rem] `}
    >
      <div className="xl:container mx-auto flex  flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*  go back home */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className={"cursor-pointer"}
          >
            <p className="text-[1.4rem] font-bold text-primary">
              Speedy<span className="text-accent">Rental</span>
            </p>
          </Link>
          {/* nav open menu */}
          <div className="flex items-center">
            <div className="flex gap-3 mr-2 items-center ">
              <p>Cars</p>
              <p>Boards</p>
              <BiSolidBasket className="text-3xl" />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer xl:hidden flex items-center"
            >
              {nav ? (
                <BiX className="text-4xl" />
              ) : (
                <BiMenuAltRight className="text-4xl" />
              )}
            </div>
          </div>
        </div>

        {/* nav */}
        <AnimatePresence>
          {nav && (
            <div className="max-h-max py-8 px-4  xl:px-0   gap-y-5 uppercase opacity-1 flex flex-col w-full  bg-white overflow-hidden font-bold xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center cursor-pointer">
              {linkData.map((link) => (
                <Link
                  className="cursor-pointer"
                  key={link.name}
                  to={link.to}
                  activeClass={link.activeClass}
                  spy={link.spy}
                  smooth={desktopMode}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          {!nav && (
            <div className="max-h-0 xl:max-h-max flex flex-col w-full  bg-white overflow-hidden font-bold xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center">
              {linkData.map((link) => (
                <Link
                  className="cursor-pointer"
                  key={link.name}
                  to={link.to}
                  activeClass={link.activeClass}
                  spy={link.spy}
                  smooth={desktopMode}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

{
  /* <nav
className={`${
  nav
    ? "max-h-max py-8 px-4  xl:px-0   gap-y-5 uppercase opacity-1 "
    : "max-h-0 xl:max-h-max  "
} flex flex-col w-full  bg-white overflow-hidden font-bold xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center `}
> */
}

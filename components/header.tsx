"use client";

import React from "react";
import { useContext, useEffect, useState } from "react";

import { Link } from "react-scroll";

import { useMediaQuery } from "react-responsive";

import { motion, AnimatePresence } from "framer-motion";
import {
  BiBasket,
  BiDesktop,
  BiMenuAltRight,
  BiSolidBasket,
  BiX,
} from "react-icons/bi";

import { AiFillShopping } from "react-icons/ai";

import { SearchContext } from "@/context/search";
import { containerVars, menuLinkVars, menuVars } from "@/animations/animations";
import { ShoppingBag } from "lucide-react";

// header component
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

const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  // @ts-ignore
  const { setSearchActive } = useContext(SearchContext);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  // links

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
        header ? " bg-white shadow-sm py-2" : "bg-transparent shadow-none "
      } fixed w-full max-w-[1920px] py-6 mx-auto px-10 z-20 transition-all duration-300 text-[1.1rem] max-sm:px-3`}
    >
      <div className="flex justify-between max-xl:justify-stretch items-center">
        <h1 className=" text-[1.5rem] max-xl:flex-1 ">
          <Link to="/" className="font-bold">
            Speed<span className="text-accent">Rental</span>
          </Link>
        </h1>
        <div className="flex items-center max-xl:hidden text-[1.1rem] gap-6 text-primary font-semibold ml-16">
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

        <div className=" flex gap-3 mx-5 items-center  text-[1.1rem] font-semibold relative ">
          <p className="text-[1.14rem] font-semibold text-primary">
            Explore Collection |
          </p>
          <ShoppingBag className="text-[2.1rem] cursor-pointer" />
          <motion.span
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-accent text-white text-[0.8rem] font-[500] w-5 h-5 rounded-full absolute top-[-0.4rem] right-[-0.6rem] items-center flex justify-center "
          >
            0
          </motion.span>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="  cursor-pointer xl:hidden flex items-center"
        >
          {nav ? (
            <BiX className="text-4xl" />
          ) : (
            <BiMenuAltRight className="text-4xl" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            exit="exit"
            animate="animate"
            className="h-screen w-full fixed top-0 left-0 bg-white py-6 px-10  origin-top max-sm:px-3"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-[1.5rem] font-bold ">
                  Speed<span className=" text-accent">Rental</span>
                </h1>
                <BiX
                  onClick={() => setNav(false)}
                  className="text-4xl cursor-pointer"
                />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="items-center flex  flex-col  h-full gap-5 text-[1.7rem] justify-center"
              >
                {linkData.map((link, index) => (
                  <motion.div className="overflow-hidden">
                    <MobileNavLink
                      key={index}
                      to={link.to}
                      spy={link.spy}
                      activeClass={link.activeClass}
                      name={link.name}
                      smooth={desktopMode}
                      setNav={setNav}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
const MobileNavLink = ({ to, activeClass, spy, smooth, name, setNav }) => {
  return (
    <motion.div variants={menuLinkVars}>
      <Link
        onClick={() => setNav(false)}
        className="cursor-pointer"
        to={to}
        key={name}
        activeClass={activeClass}
        spy={spy}
        smooth={smooth}
      >
        {name}
      </Link>
    </motion.div>
  );
};

export default Header;

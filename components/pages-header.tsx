"use client";

// react....
import React from "react";
import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";

// navi
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

// icons
import { AiFillShopping } from "react-icons/ai";
import { BiMenuAltRight, BiX } from "react-icons/bi";

// animations
import { motion, AnimatePresence } from "framer-motion";
import { containerVars, menuLinkVars, menuVars } from "@/animations/animations";

// components & context
import { SearchContext } from "@/context/search";
import DropDownMenu from "./dropdown-menu";
import CartActions from "./cart-button";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

//interface for categories
interface CategoryProps {
  categories: Category[];
}

interface LinkDataType {
  name: string;
  to: string;
  activeClass: string;
  spy: boolean;
}

// header data
const linkData: LinkDataType[] = [
  {
    name: "Home",
    to: "/",
    activeClass: "active",
    spy: true,
  },

  {
    name: "Products",

    to: "/",
    activeClass: "active",
    spy: true,
  },
  {
    name: "About",

    to: "/",
    activeClass: "active",
    spy: true,
  },
  {
    name: "Why us",

    to: "/",
    activeClass: "active",
    spy: true,
  },
  {
    name: "Testimonials",

    to: "/",
    activeClass: "active",
    spy: true,
  },
  {
    name: "Contact",

    to: "/",
    activeClass: "active",
    spy: true,
  },
  {
    name: "",

    to: "/",
    activeClass: "active",
    spy: true,
  },
];

const PagesHeader = ({ categories }: CategoryProps) => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  // @ts-ignore
  const { setSearchActive } = useContext(SearchContext);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

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
          <Link href="/" className="font-bold">
            Speed<span className="text-accent">Rental</span>
          </Link>
        </h1>

        <div className=" flex-1 flex gap-3  items-center  text-[1.1rem] font-semibold ">
          <div className="w-full flex items-center justify-end  text-[1.2rem] gap-4">
            {categories.map((cat) => (
              <Link
                className={cn(
                  pathname === `/category/${cat.id}`
                    ? "text-accent"
                    : "text-black"
                )}
                href={`/category/${cat.id}`}
                key={cat.id}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <CartActions />
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="  cursor-pointer  flex items-center"
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
                      href="/"
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

interface MobileNavProps {
  activeClass: string;
  spy: boolean;
  name: string;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
  smooth: boolean;
}

const MobileNavLink = ({
  activeClass,
  spy,
  smooth,
  name,
  setNav,
}: MobileNavProps) => {
  return (
    <motion.div variants={menuLinkVars}>
      <Link
        onClick={() => setNav(false)}
        className="cursor-pointer"
        href="/"
        key={name}
        // @ts-ignore
        activeClass={activeClass}
        spy={spy}
        smooth={smooth}
      >
        {name}
      </Link>
    </motion.div>
  );
};

export default PagesHeader;

"use client";

// import useCart from "@/use-cart";
import { ShoppingBag } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { motion } from "framer-motion";

const CartActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  // const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full  px-4 py-2"
      >
        <ShoppingBag className="text-[2.3rem] text-black cursor-pointer relative" />

        <motion.span
          initial={{ scale: 0 }}
          exit={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-accent text-white text-[0.8rem] font-[500] w-5 h-5 rounded-full absolute top-[-0rem] right-[0.3rem] max-xl:right-[5.3rem] max-sm:right-[3.7rem] items-center flex justify-center "
        >
          0
        </motion.span>
      </Button>
    </div>
  );
};

export default CartActions;

"use client";

import { useEffect, useState } from "react";

// hook
import useCart from "@/hooks/use-cart";

// components
import LoadingSpinner from "@/components/ui/loading-spinner";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

// catche
export const revalidate = 0;

const CartPage = () => {
  // zustand cart
  const cart = useCart();
  // preventing hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white max-w-[1300px] mx-auto ">
      <div>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 ">
              {/* if there is no items in the cart */}
              {cart.items.length === 0 && (
                <div className="relative max-lg:h-[23rem]">
                  <LoadingSpinner />
                </div>
              )}
              <ul>
                {/* render items from the cart */}
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

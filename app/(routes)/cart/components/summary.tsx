"use client";

// react next
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// axios
import axios from "axios";

// zustand
import useCart from "@/hooks/use-cart";

// components
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";

// modal
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  // calculating order payments
  const firstPayment = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
  const totalPayment = items.reduce((total, item) => {
    return total + Number(item.totalPrice);
  }, 0);

  // on checkout function & stripe redirection
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className=" mt-16  w-full rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <div className="mb-10 text-secondary flex flex-col gap-3">
        <span>
          *You will pay for first day of your rent, then we will be charging you
          every day till your rental contract will end.
        </span>
        <span>For testing enter card number: 4242 4242 4242 4242</span>
      </div>
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            First Payment
          </div>
          <Currency value={firstPayment} />
        </div>
        <div className="flex items-center justify-between  border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPayment} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6 bg-accent"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

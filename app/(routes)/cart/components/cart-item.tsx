import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { format } from "date-fns/fp";
import { FaArrowRightLong } from "react-icons/fa6";
interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b items-center">
      <div className="relative h-40 w-40 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className=" object-contain  scale-125"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col gap-1  text-[1rem]">
        <div className=" flex justify-between items-center z-10 right-0 top-0">
          <p className="  font-semibold text-black text-[1.3rem]">
            {data.name}
          </p>
          <IconButton className="" onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className=" flex flex-col justify-center ">
          <div className="mt-1 flex ">
            <p className="text-gray-500">{data.brand.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.type.name}
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.power.value}HP
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.location.name}
            </p>
          </div>
        </div>
        <div className="flex items-center   gap-10 mt-2 text-secondary ">
          <p className=" text-[1.1rem] font-semibold text-accent ">
            Total Price: {data.totalPrice}$
          </p>
          <div className="flex items-center gap-3">
            <div>{data.startDate}</div>
            <FaArrowRightLong className="text-accent" />
            <div>{data.endDate}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

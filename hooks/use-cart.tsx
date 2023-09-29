import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";
import { AlertTriangle } from "lucide-react";

interface CartStore {
  items: Product[];
  addItem: (data: Product, totalDays: Number, date: object) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, totalDays: Number, date: object) => {
        const upgradedData = {
          ...data,
          totalPrice: data.price * totalDays,
          startDate: date.startDate,
          endDate: date.endDate,
        };

        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Item already in cart.");
        }

        set({ items: [...currentItems, upgradedData] });
        toast.success("Item added to a cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCart;

import { create } from "zustand";
import { persist } from "zustand/middleware";

import Stripe from "stripe";
import { Brand, Location, Type } from "@/types";

type CartState = {
  locations: Location[];
  types: Type[];
  brands: Brand[];
  addAllLocations: (props) => void;
  addAllTypes: (props) => void;
  addAllBrands: (props) => void;
};

export const useFetch = create<CartState>()(
  persist(
    (set) => ({
      locations: [],

      types: [],
      brands: [],
      addAllLocations: (props) =>
        set((state) => {
          const items = props;
          return { locations: items };
        }),
      addAllTypes: (props) =>
        set((state) => {
          const items = props;
          return { types: items };
        }),
      addAllBrands: (props) =>
        set((state) => {
          const items = props;
          return { brands: items };
        }),
    }),

    { name: "cart-store" }
  )
);

import { SearchContext } from "@/context/search";
import { useContext } from "react";
import LocationSelection from "./ui/location-selection";

export default function Search() {
  // @ts-ignore
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px] w-[100%]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] w-[80%]"
      } hidden xl:block  mx-auto relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
}

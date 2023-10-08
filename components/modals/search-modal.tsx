"react next";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

// hook contect
import { SearchContext } from "@/context/search";
import { useFetch } from "@/hooks/use-fetch";

// components
import Button from "../ui/button";
import BrandSelection from "../selections/brand-selection";
import LocationSelection from "../selections/location-selection";
import TypeSelection from "../selections/type-selection";

// type
interface SearchModalProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchModal({
  location,
  setLocation,
  brand,
  setBrand,
  type,
  setType,
}: SearchModalProps) {
  // @ts-ignore

  const { searchActive } = useContext(SearchContext);
  const data = useFetch();
  const router = useRouter();

  const [disable, setDisable] = useState(false);

  // if info is provided then enable button to sarch products
  useEffect(() => {
    if (
      location === "Select Location" ||
      type === "Select Type" ||
      brand === "Select Brand"
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [location, type, brand]);

  // redirecting based on given information
  const handleClick = () => {
    const curBrand = data.brands.filter((item) => item.name === brand);
    const curLocation = data.locations.filter((item) => item.name === location);
    const curType = data.types.filter((item) => item.name === type);

    router.push(
      `/category/d96c6ef2-edff-4268-acc0-2d860e138204?typeId=${curType[0].id}&brandId=${curBrand[0].id}&locationId=${curLocation[0].id}`
    );
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[100px] flex items-center w-[100%] px-10 mt-2  "
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px] w-[80%]"
      } hidden xl:flex  mx-auto relative shadow-lg `}
    >
      <div className="xl:h-full flex  items-center  w-full  mx-10  xl:px-0">
        <LocationSelection location={location} setLocation={setLocation} />
        <TypeSelection type={type} setType={setType} />
        <BrandSelection brand={brand} setBrand={setBrand} />
      </div>
      <Button
        disabled={disable}
        onClick={handleClick}
        className="bg-accent px-10  py-2 h-14 self-center   "
      >
        Search{" "}
      </Button>
    </div>
  );
}

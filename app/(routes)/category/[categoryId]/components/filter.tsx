"use client";

// next
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// types
import { Brand, Type, Power, Location, Rate } from "@/types";

// url stringify
import qs from "query-string";

// util
import { cn } from "@/lib/utils";

// components
import Button from "@/components/ui/button";

// type
interface FilterProps {
  data: (Rate | Brand | Type | Power | Location)[];
  name: string;

  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
  setOpenFilter,
  openFilter,
  data,
  name,
  valueKey,
}) => {
  // next js
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  //  filtering items
  const onClick = (id: string) => {
    //  parsing to string & creating current query
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    // if true  then reset filter
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    // if false then redirect to url
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);

    setTimeout(() => {
      setOpenFilter(!openFilter);
    }, 600);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-col ">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center ">
            {valueKey === "typeId" ? (
              // @ts-ignore
              <Image src={filter.imageUrl} width={40} height={40} alt="" />
            ) : null}
            <Button
              className={cn(
                "text-black",
                selectedValue === filter.id && "text-accent"
              )}
              onClick={() => onClick(filter.id)}
            >
              {/* @ts-ignore */}
              {filter.name ? filter.name : filter.value}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

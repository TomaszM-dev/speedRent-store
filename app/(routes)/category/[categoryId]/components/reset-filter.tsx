"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface FilterProps {
  categoryId: string;
}

const ResetFilter = ({
  setOpenFilter,
  openFilter,
  categoryId,
}: FilterProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/category/${categoryId}`);
    setOpenFilter(!openFilter);
  };
  return (
    <p
      onClick={handleClick}
      className="text-accent font-semibold text-end text-[1.1rem] cursor-pointer"
    >
      Reset filters
    </p>
  );
};

export default ResetFilter;

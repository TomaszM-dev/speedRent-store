"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface FilterProps {
  categoryId: string;
}

const ResetFilter = ({ categoryId }: FilterProps) => {
  const router = useRouter();

  return (
    <p
      onClick={() => router.push(`/category/${categoryId}`)}
      className="text-accent font-semibold text-end text-[1.1rem] cursor-pointer"
    >
      Reset filters
    </p>
  );
};

export default ResetFilter;

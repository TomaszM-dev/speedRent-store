"use client";
import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold text-accent">
      {formatter.format(Number(value))}/ DAY
    </div>
  );
};

export default Currency;

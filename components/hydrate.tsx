"use client";
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import LoadingSpinner from "./ui/loading-spinner";

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <LoadingSpinner />}</>;
};

export default Hydrate;

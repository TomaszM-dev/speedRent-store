"use client";

import React, { createContext, useContext, useState } from "react";

// @ts-ignore
export const SearchContext = createContext();

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    // @ts-ignore
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

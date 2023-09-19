"use client";

import React, { useEffect, useState } from "react";
// import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{/* <PreviewModal></PreviewModal> */}</>;
};

export default ModalProvider;

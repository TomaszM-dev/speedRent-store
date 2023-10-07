"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import noResults from "@/public/lottieAnim/no-results.json";
import { motion } from "framer-motion";
import ResetFilter from "@/app/(routes)/category/[categoryId]/components/reset-filter";

interface NoResultsProps {
  categoryId: string;
}

const NoResults = ({ categoryId }: NoResultsProps) => {
  return (
    <div className="absolute max-md:left-[20%] max-sm:left-[8%] left-[50%] top-[6rem]  text-neutral-500">
      <div
        className="
      w-[22rem] flex flex-col items-center "
      >
        <Player autoplay loop src={noResults}></Player>
        <p className="text-center mb-3">No results found, please try again.</p>
        <ResetFilter categoryId={categoryId} />
      </div>
    </div>
  );
};

export default NoResults;

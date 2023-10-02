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
    <div className="absolute top-[6rem]  left-[50%] translate-x-[-50%]  text-neutral-500">
      <div className="max-2xl:w-[22rem] flex flex-col items-center ">
        <Player autoplay loop src={noResults}></Player>
        <p className="text-center mb-3">No results found, please try again.</p>
        <ResetFilter categoryId={categoryId} />
      </div>
    </div>
  );
};

export default NoResults;

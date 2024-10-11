"use client";

import { ShowMoreProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Using useSearchParams hook

  const updateSearchParams = (param: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(param, value);
    return current.toString();
  };

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newParams = updateSearchParams("limit", `${newLimit}`);
    
    router.push(`?${newParams}`);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
export interface ContentAreaProps {
  category: string;
  description: string[];
}
const ContentArea: React.FC<ContentAreaProps> = (props) => {
  const [currentElt, setCurrentElt] = useState<number>(0);
  const handleProgres = () => {
    if (currentElt < props.description.length) {
      setCurrentElt(currentElt + 1);
    }
  };
  const handlePrevious = () => {
    console.log("previous testonmg");
    if (currentElt > 0) {
      setCurrentElt((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-1">
        <p className="text-neutral-500 text-base text-[1.3rem]">
          {props.category}
        </p>
        <p className="text-neutral-400 text-base text-[1rem]">
          {props.description[currentElt]}
        </p>
      </div>
      {/* Region for handling of navigation */}
      <div className="flex gap-x-6">
        <div className="flex items-center">
          <button disabled={currentElt == 0} id="prev" onClick={handlePrevious}>
            <ChevronLeftIcon className="w-6 text-neutral-500" />
          </button>
          <span className="text-base text-neutral-500">
            {currentElt + 1}/{props.description.length}
          </span>
          <button
            disabled={currentElt == props.description.length}
            onClick={handleProgres}
          >
            <ChevronLeftIcon className="w-6 rotate-180 text-neutral-500" />
          </button>
        </div>
        <ArrowPathIcon className="w-6 text-neutral-500" />
        <ClipboardDocumentIcon className="w-6 text-neutral-400 hover:cursor-pointer" />
      </div>
    </div>
  );
};
export default ContentArea;

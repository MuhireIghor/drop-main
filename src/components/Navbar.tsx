import React from "react";
import { USAFlagIcon } from "../assets/icons";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  title?: string;
  back?: boolean;
  prevScreen?: string;
}

export default function Navbar({
  title,
  back = true,
  prevScreen,
}: NavbarProps) {
  return (
    <div className="w-full flex items-center justify-between py-2 px-4 border-b border-border-line">
      {title && (
        <h2 className="font-medium text-neutral-900 text-base">{title}</h2>
      )}
      {back && (
        <div
          role="button"
          className="flex items-center gap-x-1 hover:text-main-primary "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7803 5.21967C12.0732 5.51256 12.0732 5.98744 11.7803 6.28033L8.06066 10L11.7803 13.7197C12.0732 14.0126 12.0732 14.4874 11.7803 14.7803C11.4874 15.0732 11.0126 15.0732 10.7197 14.7803L6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967L10.7197 5.21967C11.0126 4.92678 11.4874 4.92678 11.7803 5.21967Z"
              fill="#171717"
            />
          </svg>
          <span className="font-medium text-lg">Voltar</span>
        </div>
      )}
      <div className="relative  w-[25rem] h-fit">
        <MagnifyingGlassIcon className="w-4 absolute top-3 left-2 text-gray-600" />
        <input
          placeholder="Pesquisar..."
          className="w-full outline-none bg-gray-100 pl-8 pr-2 py-3  rounded-lg"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <CountryDropdown />
        <div className="rounded-full h-9 w-9 flex items-center text-base font-medium justify-center bg-orange-300">
          J
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2803 11.4697C16.5732 11.7626 16.5732 12.2374 16.2803 12.5303L8.78033 20.0303C8.48744 20.3232 8.01256 20.3232 7.71967 20.0303C7.42678 19.7374 7.42678 19.2626 7.71967 18.9697L14.6893 12L7.71967 5.03033C7.42678 4.73744 7.42678 4.26256 7.71967 3.96967C8.01256 3.67678 8.48744 3.67678 8.78033 3.96967L16.2803 11.4697Z"
            fill="#171717"
          />
        </svg>
      </div>
    </div>
  );
}

const CountryDropdown = () => {
  return (
    <div className="relative flex items-center gap-x-1">
      <USAFlagIcon />
      <ChevronDownIcon className="w-4"/>
    </div>
  );
};
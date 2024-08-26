import React, { FC } from "react";
import Button from "./Button";
import { EllipsisVerticalIcon, StarIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/outline";

export interface CardProps {
  dateTime: string;
  hour: string;
  title: string;
  description: string;
}
const Card: FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col gap-y-3 bg-second-background rounded-xl shadow-md border border-border-line p-4">
      <div className="w-full flex justify-between">
        <Button
          className="bg-cover-background flex items-center justify-center text-base text-main-primary p-2 rounded"
          text="Descrição"
        />
        <div className="flex">
          <StarIcon className="w-4 text-orange-400" />
          <EllipsisVerticalIcon className="w-4" />
        </div>
      </div>
      <div className="w-full flex items-center gap-x-2">
        <CalendarIcon className="w-4 text-neutral-400" />
        <p className="text-xs flex flex-nowrap text-neutral-400">
          {props.dateTime} às {props.hour} horas
        </p>
      </div>
      <p className="text-[1.2rem] text-text-black font-medium">{props.title}</p>
      <p className="w-full text-base text-neutral-500 flex whitespace-normal">
        {props.description}
      </p>
    </div>
  );
};
export default Card;

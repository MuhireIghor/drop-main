import React, { useState } from "react";
import { favoritesData, recentesData } from "../utils/index";
import Card from "./card";
import { useRecoilState } from "recoil";
import { activeLinkState } from "../atoms";
import { UserROles } from "../types/urls";

const Anuncios = () => {
  const [count, setCount] = useState<number>(2);
  const [activeTab, setActiveTab] = useRecoilState<UserROles>(activeLinkState);

  return (
    <div className="h-full flex flex-col gap-y-8">
      <p className="flex items-baseline gap-x-4 text-neutral-500 text-[1.1rem]">
        ANÚNCIOS{" "}
        <span className="w-4 h-4 rounded-full flex justify-center items-center bg-gray-200/60 text-main-primary">
          ${count}
        </span>
      </p>
      <div className="w-full flex whitespace-nowrap gap-x-8 overflow-x-scroll">
        {activeTab == UserROles.RECENTS
          ? recentesData.map((recent, index) => {
              return (
                <Card
                  key={index}
                  title={recent.title}
                  description={recent.description}
                  hour={recent.hour}
                  dateTime={recent.date}
                />
              );
            })
          : favoritesData.map((recent, index) => {
              return (
                <Card
                  key={index}
                  title={recent.title}
                  description={recent.description}
                  hour={recent.hour}
                  dateTime={recent.date}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Anuncios;

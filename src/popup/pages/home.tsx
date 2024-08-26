import React from "react";
import "../popup.css";
import {
  ClipboardDocumentIcon,
  DocumentTextIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon, StarIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";
import { newsData } from "../../utils/index";
import ContentArea from "../../components/contentArea";

const HomeComponent = () => {
  return (
    <main className="bg-white flex flex-col gap-y-6">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-4">
          <p className="font-medium text-text-black text-[1.7rem]">Resultado</p>
          <Button text="Personas" className="flex items-center justify-center bg-cover-background text-main-primary rounded-md text-base py-2 px-3" />
        </div>
        <Button
          className="gap-x-2 text-white bg-main-primary rounde-md p-3 text-[1rem] flex items-center"
          text="Gerar Novo"
          icon={PlusIcon}
          iconStyle="text-white"
        />
      </div>
      <section className="w-full bg-second-background border-border-line rounded-lg flex flex-col gap-y-12 p-8">
        {/* title section */}
        <div className="w-full flex justify-between">
          <div className="flex gap-x-4 ">
            <div className="bg-cover-background border-[0.2px] rounded-lg p-4 flex items-center justify-center">
              <DocumentTextIcon className="w-12 text-main-primary" />
            </div>
            <div>
              <h2 className="text-md text-[1.2rem] text-text-black font-medium gap-x-2 flex items-baseline">
                A6s Freedom Buds Pro{" "}
                <span>{<StarIcon className="w-4 text-orange-400" />}</span>
              </h2>
              <p className="text-neutral-400 text-base">
                Gerado em: 2 de fevereiro de 2024 às 15:09
              </p>
            </div>
          </div>
          {/* Document description */}
          <div className="flex items-center">
            <Button
              icon={ClipboardDocumentIcon}
              text="Copiar"
              className="bg-cover-background text-main-primary p-2 px-4 font-medium text-base gap-x-2 items-baseline"
            />
            <EllipsisVerticalIcon className="w-8" />
          </div>
        </div>
        <div className=" h-3/4 flex flex-col overflow-y-scroll border-2 border-border-line p-8 rounded-lg gap-y-8">
          {newsData.map((newItem, index) => {
            return (
              <ContentArea
                key={index}
                description={newItem.description}
                category={newItem.category}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default HomeComponent;
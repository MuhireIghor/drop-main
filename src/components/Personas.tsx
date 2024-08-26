import React, { useState } from "react";
import '../popup/popup.css'
import PersonaCraft from "./persona";
const Personas = () => {
  const [count, setCount] = useState<number>(0);


  return (
    <div className="h-full">
      <p className="flex items-baseline gap-x-4 text-neutral-500 text-[1.1rem]">
        PERSONAS{" "}
        <span className="w-4 h-4 rounded-full flex justify-center items-center bg-gray-200/60 text-main-primary">
          ${count}
        </span>
      </p>
      <div className="w-full flex justify-center items-center h-[70%]">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center items-center ">
            <PersonaCraft />
          </div>
          <p className="text-[1.6rem] text-neutral-700 font-medium ">Nenhuma persona gerada</p>
          <p className="w-full text-base flex gap-x-2 text-neutral-500 text-center justify-center">
            Clique para gerar uma
            <span className="text-main-primary"> Nova Persona</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personas;
import React from "react";
import "../popup.css";
import Button from "../../components/Button";

import { useRecoilState } from "recoil";
import { activeRecentesTabState } from "../../atoms";
import { TabState } from "../../types/urls";
import Personas from "../../components/Personas";
import Anuncios from "../../components/Anuncios";
import Descricao from "../../components/descricao";
import Nomes from "../../components/Nomes";

const Recents = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeRecentesTabState);
  const handleChangeTab = (activeTab: TabState) => {
    setActiveTab(activeTab);
  };
  return (
    <main className=" bg-white w-full  flex flex-col gap-y-6">
      <div className="w-full flex flex-col gap-y-5">
        <h2 className="text-[1.4rem] font-semibold text-base">Recentes</h2>
        <p className="text-neutral-500 text-base ">
          Consulte seus prompts mais recentes
        </p>
        <hr />
      </div>

      {/* Filter buttons */}
      <div className=" flex items-center gap-x-5 ">
        <Button
          text="Descrição"
          className={`text-base flex items-center justify-center ${
            activeTab == TabState.Descrição
              ? "text-main-primary bg-cover-background p-2 "
              : "text-neutral-500"
          } `}
          actionHandler={() => handleChangeTab(TabState.Descrição)}
        />
        <Button
          text="Anúncios"
          className={`text-base flex items-center justify-center ${
            activeTab == TabState.Anúncios
              ? "text-main-primary bg-cover-background p-2 "
              : "text-neutral-500"
          } `}
          actionHandler={() => handleChangeTab(TabState.Anúncios)}
        />
        <Button
          text="Personas"
          className={`text-base flex items-center justify-center ${
            activeTab == TabState.Personas
              ? "text-main-primary bg-cover-background p-2 "
              : "text-neutral-500"
          } `}
          actionHandler={() => handleChangeTab(TabState.Personas)}
        />
        <Button
          text="Nomes de produto"
          className={`text-base flex items-center justify-center ${
            activeTab == TabState.Nome_de_produto
              ? "text-main-primary bg-cover-background p-2 "
              : "text-neutral-500"
          } `}
          actionHandler={() => handleChangeTab(TabState.Nome_de_produto)}
        />
      </div>

      {/* Main section */}
      <div className="w-full ">
        {activeTab.toString() === TabState.Nome_de_produto.toString() && (
          <Nomes />
        )}
        {activeTab.toString() === TabState.Anúncios.toString() && <Anuncios />}
        {activeTab.toString() === TabState.Descrição.toString() && (
          <Descricao />
        )}{" "}
        {activeTab.toString() === TabState.Personas.toString() && <Personas />}
      </div>
    </main>
  );
};
export default Recents;
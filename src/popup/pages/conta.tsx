import React from "react";
import Button from "../../components/Button";
import CheckMark from "../../components/check";
const ContaPage = () => {
  return (
    <main className="rounded-tr-xl bg-white  flex flex-col gap-y-6">
      <div className="space-y-4">
        <p className="font-medium text-text-black text-[1.7rem]">Conta</p>
        <hr />
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <p className="w-full text-text-black flex justify-start text-[1.5rem] font-medium">
          Avatar
        </p>
        <div className="w-full flex gap-x-4">
          <div className="w-20 h-20 rounded-full text-[1.4rem] font-medium flex items-center justify-center bg-main-brown text-brown-text">
            J
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label className="text-neutral-400 text-base">Name</label>
            <input
              type="text"
              className="w-1/3 p-2 border border-neutral-400 rounded-lg outline-none text-base "
              placeholder="Junio"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <p className="w-full flex justify-start text-[1.5rem] text-text-black font-medium">
          Informações da conta
        </p>
        <p className="text-neutral-400 text-base">
          Apenas você poderá ver essas informações do perfil.
        </p>
      </div>
      <div className="w-full flex items-baseline gap-x-2">
        <div className="w-9 h-9 rounded-full text-[1rem] font-medium flex items-center justify-center bg-main-brown text-brown-text">
          J
        </div>
        <p className="text-neutral-400">junioborges@gmail.com</p>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="w-full flex justify-start text-[1.5rem] text-text-black font-medium">
          Assinatura
        </p>
        <p className="text-neutral-400 text-base">
          Sua assinatura expira em 1 de fev. de 2024.
        </p>
      </div>
      <Button
        className="w-[140px] mt-4 flex gap-x-2 items-center bg-gray-200/60 rounded-md p-2 text-main-primary text-[0.8rem] font-medium"
        text="Plano PRO"
        icon={CheckMark}
      />
      <div className="w-full space-y-4">
        <p className="font-medium text-text-black text-[1.7rem]">
          Configurações da Taylor
        </p>
        <hr />
      </div>
      <div className="w-full">
        <p className="w-full flex justify-start text-[1.5rem] text-text-black font-medium">
          Idioma de saída
        </p>
        <div className="w-full flex justify-between">
          <p className="text-neutral-400 text-base">
            O idioma usado na resposta da Taylor.
          </p>
        </div>
      </div>
      <div className="w-full">
        <p className="w-full flex justify-start text-[1.5rem] text-text-black font-medium">
          Alterar atalho
        </p>
        <p className="text-neutral-400 flex items-baseline gap-x-4 text-base">
          Seu atalho de teclado atual está definido como {""}{" "}
          <span className="text-main-primary ">Ctrl + M</span>
        </p>
      </div>
    </main>
  );
};
export default ContaPage;

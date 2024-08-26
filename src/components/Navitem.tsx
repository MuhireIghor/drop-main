import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeLinkState } from "../atoms";
import { UserROles } from "../types/urls";
export interface NavitemProps {
  icon: React.ReactNode | JSX.Element | any;
  text: UserROles | any;
  url?: string;
}

const Navitem: React.FC<NavitemProps> = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useRecoilState(activeLinkState);
  const handleNavigation = (text: UserROles, url: string) => {
    navigate(`${url}`);
    setActiveTab(text);
  };
  return (
    <div
      className={`flex gap-x-4 w-full hover:bg-neutral-400 p-2 rounded-md ${
        activeTab == props.text && "bg-neutral-600 text-neutral-300"
      }`}
      onClick={() => handleNavigation(props.text, props.url)}
    >
      <div>{<props.icon className="w-6 text-neutral-500 " />}</div>
      <p className="text-md text-neutral-500 text-[1rem] ">{props.text}</p>
    </div>
  );
};

export default Navitem;

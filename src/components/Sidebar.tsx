import React from "react";
import { NavbarItems } from "../utils/index";
import Navitem from "./Navitem";
import Logo from "./Logo";
import {
  SunIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  // const toogleMode=()=>{

  // }
  return (
    <div className="w-full h-full flex flex-col gap-y-6 border-r rounded-l-xl pl-4 bg-white dark:bg-dark/75 p-12">
      <div className="h-[8%]">
        <Logo />
      </div>
      {/* Sidebar links */}
      <div className="h-[72%] flex flex-col gap-y-20">
        <div className="h-full">
          {NavbarItems.map((navItem, index) => {
            return (
              <div className="p-2 flex flex-col gap-y-3">
                <p className="text-neutral-400 text-md text-[1.2rem] ">
                  {navItem.section.title}
                </p>
                <div className="pl-2 flex flex-col gap-y-4">
                  {navItem.section.items.map((item, index) => {
                    return (
                      <Navitem
                        url={item.url}
                        key={index}
                        icon={item.icon}
                        text={item.text}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="pl-2 flex flex-col gap-y-4 h-[20%] justify-evenly">
          <Navitem url={"/"} icon={SunIcon} text="Modo Claro" />
          <Navitem
            url={"/"}
            icon={ArrowRightStartOnRectangleIcon}
            text="Log Out"
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

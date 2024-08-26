import React from "react";
import { activeLinkState } from "../atoms";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  actionHandler?: Function;
  icon?: React.ReactNode | any;
  iconStyle?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={() => props.actionHandler()}
      className={`${props.className}  flex  p-2 rounded-xl `}
    >
      {props.icon && <props.icon className={`w-4 ${props.iconStyle}`} />}
      {props.text}
    </button>
  );
};
export default Button;

"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";
const Button = ({ text, containerStyle, handleClick, type }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={` bg-blue-500 text-white rounded-full my-6 px-4 py-2 hover:cursor-pointer hover:bg-blue-400 ${containerStyle}`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1`}>{text}</span>
    </button>
  );
};

export default Button;

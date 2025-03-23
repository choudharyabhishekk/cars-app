"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";
const Button = ({ title, containerStyle, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${containerStyle} bg-blue-500 text-white rounded-full my-6 px-4 py-2 hover:cursor-pointer hover:bg-blue-400`}
      onClick={() => {
        handleClick;
      }}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
